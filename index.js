import {Wju, createWjuInstance} from 'wju-dzej-es/instance/Wju.js'
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
                ),
                createElement('button', {on: {click: this.incrementCounter}}, [this.counter])
            ]
        );
    },
    data() {
        return {
            message: 'Hello, world!',
            counter:0
        }
    },
    methods: {
        sayHello() {
            alert(this.message);
        },
        incrementCounter() {
            this.counter++;
            console.log(this.counter)
        }
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    }
}

const rootComponent=createWjuInstance(rootComponentConfig);
rootComponent.$mount(document.body)
