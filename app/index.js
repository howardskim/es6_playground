// import elementToBody from './add_to_dom'
// import $ from 'jquery'

// elementToBody('h1', 'something different');

// elementToBody('p', 'suuuuuuuuupppppppppppppppppppppppppppppp')

// $('body').append('<h1>CAME FROM JQUERY</h1>')

import {Person, SuperPerson} from './person';

const bob = new Person('bob');

console.log(bob.speak('wazzauppppp'));

const superSarah = new SuperPerson('Sarah', 'flying');
superSarah.speak('im super sarah');


superSarah.saySuperPower();