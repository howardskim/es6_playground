import $ from 'jquery';

export class Person {
    constructor(name) {
        this.name = name;
    }
    speak(text) {
        return `${this.name} says ${text}`
    }
}
//super refers to the object ABOVE
//super.speak refers to the parent's speak method

export class SuperPerson extends Person{
    constructor(name, superpower){
        //similar to giving props to the parent
        super(name);
        this.superpower = superpower;
    }
    speak(text){
        $('body').append(`<h1>${super.speak(text)}</h1>`);        
    }
    saySuperPower(){
        this.speak(`my super power is ${this.superpower}`)
    }
}

