import {Wju, createWjuInstance} from 'wju-dzej-es/instance/Wju.js'
import {createElement} from 'wju-dzej-es/instance/VNodeGenerator.js'

console.log('Hello, world!');

const rootComponentConfig = {
    template:`<div>
        <h1>{{this.message}}</h1>
        <p v-on-click="this.sayHello" id="abcd">{{this.reversedMessage}}</p>
        <button v-on-click="this.incrementCounter">{{this.counter}}</button>
        <p>{{this.counter2}}</p>
        </div>`,
    // render() {
    //     /*
    //     <div>
    //     <h1>{{message}}</h1>
    //     <p v-on-click="sayHello">{{reversedMessage}}</p>
    //     </div>
    //      */
    //     return createElement('div', {},
    //         [
    //             createElement('h1', {}, [this.message]),
    //             createElement('p', {on: {click: this.sayHello}, 'id':'abcd'}, [
    //                 this.reversedMessage
    //             ]
    //             ),
    //             createElement('button', {on: {click: this.incrementCounter}}, [this.counter]),
    //             createElement('p', {}, [this.counter2])
    //         ]
    //     );
    // },
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
        },
        counter2(){
            return this.counter.toFixed(2);
        }
    },
    watch: {
        message() {
            console.log('message się zmienił')
        }
    }
}

const rootComponent=createWjuInstance(rootComponentConfig);
rootComponent.$mount(document.body)
window.dbg=rootComponent;
