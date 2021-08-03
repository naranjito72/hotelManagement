'use strict';
// general
let bolean = false;
let numHelper = 0;
let arrDates = [];
let numbersFront = [];
let myAdults = 0;
let myKids = 0;
let seenRooms = 0;
let totalGuests = 0;
// object
let newOne;
const getLanguage = () => (navigator.languages || [])[0] || navigator.language || 'es';
console.log(getLanguage());
// get the data
// date
let checkInDate = document.querySelector('#datein');
let checkOutDate = document.querySelector('#dateout');
// amount
let priceRoom = [...document.querySelectorAll('.wbkv9-Amount-integerPart')];
//console.log(priceRoom);
// currency
let currencyHotel = (document.querySelector('.wbkv9-Entity-amountCurrencyLabel').innerHTML);
// adults
let guestsAdults = document.getElementById('adults');
// kids
let guestsKids = document.getElementById('kids');
// rooms checked buttons
let roomsChecked = [...document.querySelectorAll(".wbkv9-Entity-button")]
    .map((el, ind) => el.addEventListener('click', () => { howManyRoomsChecked(), fullInfoCheapestRoom(); }));
// get all selectors rooms shown
let allRoomsShown = [...document.querySelectorAll('.wbkv9-Entity-infoContainer')];
/**********************************************************************************/
// it triggers everything
let allBegins = document.getElementById('bookingBtn');
// add actions to the captures
allBegins.addEventListener('click', getDates);
// first the dates and convertion to yyyy-MM-dd
function getDates() {
    // clean arr
    arrDates = [];
    numbersFront = [];
    // create new date
    let d = new Date();
    // empty fields | null
    (checkInDate.value == "") ? checkInDate.value = AUX_FUNCTIONS.myFormatYear(d) : checkInDate.value;
    (checkOutDate.value == "") ? checkOutDate.value = checkInDate.value : checkOutDate.value;
    // push them
    AUX_FUNCTIONS.pushToArr(checkInDate.value);
    AUX_FUNCTIONS.pushToArr(checkOutDate.value);
    // check how many numbers infront
    numbersFront = AUX_FUNCTIONS.checkLengthFront(arrDates);
    // check regex
    bolean = AUX_FUNCTIONS.checkSymbol(checkInDate.value);
    // check if date comes in dd-MM-yyyy
    // check both index as the arrays will be always the same length
    // how to refac with map?
    let i = 0;
    for (i; i < arrDates.length; i++) {
        if (numbersFront[i] == 2)
            arrDates[i] = AUX_FUNCTIONS.cleanAndReverseDate(arrDates[i]);
        if (AUX_FUNCTIONS.checkSymbol(arrDates[i]) == true)
            arrDates[i] = AUX_FUNCTIONS.cleanDate(arrDates[i]);
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
// show full info cheapest one bonus
function fullInfoCheapestRoom() {
    console.log(allRoomsShown.map((e) => e.innerText)[0]);
    return allRoomsShown.map((e) => e.innerText)[0];
}
// Take value from select html
function getMePeopleFromSelect(people) {
    let bookedPeople = 0;
    let getMePeople = AUX_FUNCTIONS.getMeValueSelect(people);
    // making sure is a number
    bookedPeople = parseInt(getMePeople.value);
    return bookedPeople;
}
// How many rooms the user is watching
function howManyRoomsChecked() {
    seenRooms++;
    newOne.numberRoomsChecked(seenRooms);
    console.log(newOne.toString());
    return seenRooms;
}
// create de Object
function createDataObject() {
    newOne = new Hotel(arrDates[0], arrDates[1], showPrice[0], currencyHotel, seenRooms, myAdults, myKids, getLanguage());
    totalGuests = newOne.howManyGuests();
    console.log(newOne.toString());
}
/************************* aux functions ********************************/
const AUX_FUNCTIONS = {
    // converting new date
    myFormatYear: (str) => str.toISOString().slice(0, 10),
    // pusher
    pushToArr: (num) => arrDates.push(num),
    // iterate over them all
    checkLengthFront: (arr) => arr.map((e) => e = AUX_FUNCTIONS.howManyIntegersInFront(e)),
    // check how many integers infront
    howManyIntegersInFront: (str) => str.replace(/[^\d].*/, '').length,
    // checking special symbol
    // passing throug the regex function i don't need anymore to check for special symbol
    checkSymbol: function (str) {
        let symbolToCheck = /[/]/;
        let myHelp;
        (symbolToCheck.test(str)) ? myHelp = true : myHelp = false;
        return myHelp;
    },
    //reversing dates and change symbol
    cleanAndReverseDate: (str) => str.split(/[/-]/).reverse().join('-'),
    // only change symbol
    cleanDate: (str) => str.split(/[/-]/).join('-'),
    // value from select
    getMeValueSelect: (str) => (str.options[str.selectedIndex])
};
