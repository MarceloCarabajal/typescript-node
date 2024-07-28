import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";
import { Hero, Villiain } from '../interfaces'

// printObject( 123 );
// printObject( new Date() );
// printObject( { a:1, b:2, c:3, d:4, e:5, f:6} );
// printObject( ['a', 'b', 'c', 'd', 'e', 'f'] );
// printObject( true );
// printObject( 'Hello, world' );

// const name: string = 'Fernando'

// console.log( genericFunction(3.1554654).toFixed(2));
// console.log( genericFunction(new Date()).getFullYear() )
// console.log( genericFunctionArrow(name).toUpperCase() );

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villiain>(deadpool).dangerLevel);
