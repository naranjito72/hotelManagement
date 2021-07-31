'use strict';
// general
let bolean = false;
let numHelper = 0;
let arrDates = [];
let numbersFront = [];
let myAdults = 0;
let myKids = 0;
let seenRooms = 0;
const getLanguage = () => (navigator.languages || [])[0] || navigator.language || 'es';
console.log(getLanguage());
// get the data
// date
let checkInDate = document.querySelector('#datein');
let checkOutDate = document.querySelector('#dateout');
// amount
let priceRoom = Array.from(document.querySelectorAll('.wbkv9-Amount-integerPart'));
// currency
let currencyHotel = (document.querySelector('.wbkv9-Entity-amountCurrencyLabel').innerHTML);
// adults
let guestsAdults = document.getElementById('adults');
// kids
let guestsKids = document.getElementById('kids');
// rooms checked buttons
let roomsChecked = Array.from(document.querySelectorAll(".wbkv9-Entity-button"));
roomsChecked.map((el, ind) => el.addEventListener('click', howManyRooms));
console.log(roomsChecked);
/**********************************************************************************/
// it triggers everything
let allBegins = document.getElementById('bookingBtn');
// add actions to the captures
allBegins.addEventListener('click', getDates);
//roomsChecked.addEventListener('click', getDates);
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
    // check if date comes in dd-MM-yyyy
    // check both i as the arrays will be always the same length
    // to refac with map
    let i = 0;
    for (i; i < arrDates.length; i++) {
        if (numbersFront[i] == 2)
            arrDates[i] = cleanAndReverseDate(arrDates[i]);
        if (checkSymbol(arrDates[i]) == true)
            arrDates[i] = cleanDate(arrDates[i]);
    }
    // iniciate guests
    kindOfGuests();
    // create the object
    createDataObject();
    return arrDates;
}
// kind of gests
function kindOfGuests() {
    // get me the adults
    myAdults = getMePeopleFromSelect(guestsAdults);
    // get me the kids
    myKids = getMePeopleFromSelect(guestsKids);
}
// show me the money
const showPrice = priceRoom.map((e) => e = e.innerText).sort((a, b) => a - b);
console.log((priceRoom));
console.log((showPrice));
// "Every time I see an adult on a bicycle, I no longer despair for the future of the human race" (H.G.Wells)
function getMePeopleFromSelect(people) {
    let bookedPeople = 0;
    let getMePeople = getMeValueSelect(people);
    // making sure is a number
    bookedPeople = parseInt(getMePeople.value);
    console.log(getMePeople);
    return bookedPeople;
}
// How many rooms the user is watching
function howManyRooms() {
    console.log('How many rooms works');
    seenRooms++;
    console.log(seenRooms);
    return seenRooms;
}
// "Adults are always asking kids what they want to be when they grow up because they are looking for ideas" (Paula Poundstone)
// create de Object
function createDataObject() {
    console.log('create works');
    let newOne = new Hotel(arrDates[0], arrDates[1], showPrice[0], currencyHotel, seenRooms, myAdults, myKids, getLanguage());
    console.log(newOne);
    console.log(newOne.howManyGuests());
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
// passing throug the regex function i don't need anymore to check for special symbol
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
// only change symbol
const cleanDate = (str) => str.split(/[/-]/).join('-');
// value from select
const getMeValueSelect = (str) => (str.options[str.selectedIndex]);
