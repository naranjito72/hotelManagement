'use strict';
// general
let bolean: boolean   = false;
let numHelper: number = 0;
let arrDates:  any[] = [];
let numbersFront: any[] 

const getLanguage = () => (navigator.languages || [])[0] || navigator.language || 'es';
console.log(getLanguage());

// test selectors
let element = Array.from(document.querySelectorAll('.wbkv9-Amount-integerPart'));

//class="wbkv9-Amount-integerPart integerPart"
const showMe = element.map((e: any) => e = e.innerText).sort((a: any,b: any) => a-b)
console.log((element));
console.log((showMe));

/**********************************************************************************/
// it triggers everything
let allBegins: any = document.getElementById('bookingBtn') as HTMLBodyElement;
allBegins.addEventListener('click', getDates);

// get the data
let checkInDate: any = (document.querySelector('#datein') as HTMLInputElement);
let checkOutDate: any = (document.querySelector('#dateout') as HTMLInputElement);

// first the dates and convertion to yyyy-MM-dd
function getDates(){
console.log('dates works');

// clean arr
arrDates = [];
numbersFront = [];

// create new date
let d: Date = new Date();

// empty fields | null
(checkInDate.value == "") ? checkInDate.value = myFormatYear(d) : checkInDate.value;
(checkOutDate.value == "") ? checkOutDate.value = checkInDate.value : checkOutDate.value;

// push them
pushToArr(checkInDate.value);
pushToArr(checkOutDate.value);
console.log(arrDates);

// check how many numbers infront
numbersFront = checkLengthFront(arrDates);
console.log(numbersFront)

// check regex
bolean = checkSymbol(checkInDate.value);
console.log(checkInDate.value);
console.log(checkOutDate.value);
// check if date comes in dd-MM-yyyy
// check both i as the arrays will be always the same length
let i: number = 0;
for(i; i < arrDates.length; i++){
    if(numbersFront[i] == 2 ) arrDates[i] = cleanAndReverseDate(arrDates[i]);
    if(checkSymbol(arrDates[i])== true) arrDates[i] = cleanDate(arrDates[i]);
}
createData();
return arrDates;
}

function createData() {
console.log('create works');
let newOne = new Hotel(arrDates[0],arrDates[1], 350, 'GBP', 4, 2, 1, getLanguage());
console.log(newOne);
}
/************************* aux functions ********************************/
// converting new date
const myFormatYear = (str: any) => str.toISOString().slice(0, 10);

// pusher
const pushToArr = (num: number) => arrDates.push(num);

// iterate over them all
const checkLengthFront = (arr: string[]) => arr.map((e: any) => e = howManyIntegersInFront(e));

// check how many integers infront
const howManyIntegersInFront = (str: string) => str.replace( /[^\d].*/, '' ).length;

// checking special symbol
// passing throug the regex function i don't need anymore to check for special symbol
function checkSymbol(str: string): boolean{
    let symbolToCheck: RegExp = /[/]/
    let myHelp: boolean;
    (symbolToCheck.test(str)) ? myHelp = true  : myHelp = false;
    console.log(myHelp);
    return myHelp;
}

//reversing dates and change symbol
const cleanAndReverseDate = (str: string) => str.split(/[/-]/).reverse().join('-');
console.log(cleanAndReverseDate('20/09/2021'));
console.log(cleanAndReverseDate('20-09-2021'));
console.log(cleanAndReverseDate('20-09/2021'));

// only change symbol
const cleanDate = (str: string) => str.split(/[/-]/).join('-');
// reversing format
// using regex I avoid second function
// const reverseDate = (str: string) => str.split('-').reverse().join('-');


