'use strict';
// general
let bolean = false;
let numHelper = 0;
let arrDates = [];
let numbersFront;
const getLanguage = () => (navigator.languages || [])[0] || navigator.language || 'es';
console.log(getLanguage());
// test selectors
let element = Array.from(document.querySelectorAll('.wbkv9-Amount-integerPart'));
//class="wbkv9-Amount-integerPart integerPart"
const showMe = element.map((e) => e = e.innerText).sort((a, b) => a - b);
console.log((element));
console.log((showMe));
/**********************************************************************************/
// it triggers everything
let allBegins = document.getElementById('bookingBtn');
allBegins.addEventListener('click', getDates);
// get the data
let checkInDate = document.querySelector('#datein');
let checkOutDate = document.querySelector('#dateout');
// first the dates and convertion to yyyy-MM-dd
function getDates() {
    console.log('dates works');
    // clean arr
    arrDates = [];
    numbersFront = [];
    // create new date
    let d = new Date();
    // empty fields | null
    (checkInDate.value == "") ? checkInDate.value = myFormatYear(d) : checkInDate.value;
    (checkOutDate.value == "") ? checkOutDate.value = checkInDate.value : checkOutDate.value;
    // push them
    pushToArr(checkInDate.value);
    pushToArr(checkOutDate.value);
    console.log(arrDates);
    // check how many numbers infront
    numbersFront = checkLengthFront(arrDates);
    console.log(numbersFront);
    // check regex
    bolean = checkSymbol(checkInDate.value);
    console.log(checkInDate.value);
    console.log(checkOutDate.value);
    createData();
    return arrDates;
}
function createData() {
    console.log('create works');
    let newOne = new Hotel(arrDates[0], arrDates[1], 350, 'GBP', 4, 2, 1, getLanguage());
    console.log(newOne);
}
/************************* aux functions ********************************/
// converting new date
const myFormatYear = (str) => str.toISOString().slice(0, 10);
// pusher
const pushToArr = (num) => arrDates.push(num);
// iterate over them all
const checkLengthFront = (arr) => arr.map((e) => e = howManyIntegersInFront(e));
// check how many integers infront
const howManyIntegersInFront = (str) => str.replace(/[^\d].*/, '').length;
// checking special symbol
function checkSymbol(str) {
    let symbolToCheck = /[/]/;
    let myHelp;
    (symbolToCheck.test(str)) ? myHelp = true : myHelp = false;
    console.log(myHelp);
    return myHelp;
}
//reversing dates and change symbol
const cleanAndReverseDate = (str) => str.split(/[/-]/).reverse().join('-');
console.log(cleanAndReverseDate('20/09/2021'));
console.log(cleanAndReverseDate('20-09-2021'));
console.log(cleanAndReverseDate('20-09/2021'));
// reversing format
const reverseDate = (str) => str.split('-').reverse().join('-');
