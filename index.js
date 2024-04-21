import {Wju} from 'wju-dzej-es/instance/Wju.js'
import {createElement} from 'wju-dzej-es/instance/VNodeGenerator.js'

console.log('Hello, world!');

const rootComponentConfig = {
    render() {
        /*
        <div>
        <h1>{{message}}</h1>
        <p v-on-click="sayHello">{{reversedMessage}}</p>
        </div>
         */
        return createElement('div', {},
            [
                createElement('h1', {}, [this.message]),
                createElement('p', {on: {click: this.sayHello}, 'id':'abcd'}, [
                    this.reversedMessage
                ]
                )
            ]
        );
    },
    data() {
        return {
            message: 'Hello, world!'
        }
    },
    methods: {
        sayHello() {
            alert(this.message);
        }
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    }
}

const rootComponent=new Wju(rootComponentConfig);
rootComponent.$mount(document.body)
