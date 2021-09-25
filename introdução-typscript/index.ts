// types
// interfaces

interface IAnimal 
{
    name: string;
    type: 'terrestrial' | 'aquatic';
    domestic: boolean;
    executeRoar(tallDecimal: number): void;
}

interface IFeline extends IAnimal 
{
    nightVision: boolean;
}

const animal: IAnimal = {
    name: 'Elephant',
    type: 'terrestrial',
    domestic: false,
    executeRoar: (tallDecimal) => (`${tallDecimal}db`)
}

animal.executeRoar(40);

const feline: IFeline = {
    name: 'lion',
    type: 'terrestrial',
    domestic: false,
    nightVision: true,
    executeRoar: () => (30)
}


interface ICanine extends IAnimal 
{
    sizeAnimal: 'short' | 'normal' | 'big'
}

type IDosmestic = IFeline | ICanine;
            // OU \\
// type IDosmestic = IFeline && ICanine;


const animal2: IDosmestic = {
    domestic: true,
    name: 'Dog',
    sizeAnimal: 'normal',
    type: "terrestrial",
    executeRoar: () => (10)
}


/*************************************/

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
   const thisInput = event.currentTarget as HTMLInputElement;
});


// Generic types

function addList<T>(array: T[], valor: T)
{   
    return array.map( () => valor );
}

addList([1,2,3], 8);


/*************************************/

/**
 * Conditionals from param
 */

interface IUser {
    id: string;
    email: string;
    age?: number;
}
interface IAdmin extends IUser {
    office: 'gerente' | 'coordenador' | 'supervisor';
}

function redirect( user: IUser | IAdmin )
{
    if('office' in user) {
        // redirect for area the admin
    }

    // redirect for arear the user

    if(user .age) {
        // have set age
    }
    // // haven't set age
}

/*************************************/

/**
 * Classes
 */

interface Dog {
    name: string;
    age: number;
    parkFavorited?: string;
}

type DogRead = {
    +readonly [key in keyof Dog]-?: Dog[key];
}

class MyDog implements DogRead {
    name;
    age;
    parkFavorited;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

/*************************************/

/**
 * Extends Library
 */

import $ from 'jquery';


/**
 * Orms
 *
 * @interface Person
 */
interface Person {
    name: string;
    age: number;
    nationality: string;
}

interface Brasileiro extends Omit<Person, 'nationality'>
{
    
}

const brasileiro: Brasileiro = {
    
}



