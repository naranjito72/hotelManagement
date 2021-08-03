"use strict";
const MAIN_FUNCTIONSTWO = {
    // properties
    myBooleanTwo: false,
    numHelperTwo: 0,
    arrDatesTwo: [],
    numbersFrontTwo: [],
    myAdultsTwo: 0,
    myKidsTwo: 0,
    seenRoomsTwo: 0,
    totalGuestsTwo: 0,
    // Hotel
    newOneTwo: Hotel,
    // data
    checkInDateTwo: document.querySelector('#datein'),
    checkOutDateTwo: document.querySelector('#dateout'),
    // amount
    priceRoomTwo: [...document.querySelectorAll('.wbkv9-Amount-integerPart')],
    // currency
    currencyHotelTwo: (document.querySelector('.wbkv9-Entity-amountCurrencyLabel').innerHTML),
    // adults
    guestsAdultsTwo: document.getElementById('adults'),
    // kids
    guestsKidsTwo: document.getElementById('kids'),
    // methods
    getLanguageTwo: () => (navigator.languages || [])[0] || navigator.language || 'es',
    // dates
    getDatesTwo() {
        // clean arr
        this.arrDatesTwo = [];
        this.numbersFrontTwo = [];
        // create new date
        let d = new Date();
        // empty fields | null
        (MAIN_FUNCTIONSTWO.checkInDateTwo.value == "") ? MAIN_FUNCTIONSTWO.checkInDateTwo.value = AUX_FUNCTIONSTWO.myFormatYear(d) : MAIN_FUNCTIONSTWO.checkInDateTwo.value;
        (MAIN_FUNCTIONSTWO.checkOutDateTwo.value == "") ? MAIN_FUNCTIONSTWO.checkOutDateTwo.value = MAIN_FUNCTIONSTWO.checkInDateTwo.value : MAIN_FUNCTIONSTWO.checkOutDateTwo.value;
        // push them
        AUX_FUNCTIONSTWO.pushToArr(MAIN_FUNCTIONSTWO.checkInDateTwo.value);
        AUX_FUNCTIONSTWO.pushToArr(MAIN_FUNCTIONSTWO.checkOutDateTwo.value);
        // check how many numbers infront
        this.numbersFrontTwo = AUX_FUNCTIONSTWO.checkLengthFront(this.arrDatesTwo);
        // check regex
        this.myBoolean = AUX_FUNCTIONSTWO.checkSymbol(MAIN_FUNCTIONSTWO.checkInDateTwo.value);
        // check if date comes in dd-MM-yyyy
        // check both index as the arrays will be always the same length
        // how to refac with map?
        let i = 0;
        for (i; i < this.arrDatesTwo.length; i++) {
            if (this.numbersFrontTwo[i] == 2)
                this.arrDatesTwo[i] = AUX_FUNCTIONSTWO.cleanAndReverseDate(this.arrDatesTwo[i]);
            if (AUX_FUNCTIONSTWO.checkSymbol(this.arrDatesTwo[i]) == true)
                this.arrDatesTwo[i] = AUX_FUNCTIONSTWO.cleanDate(this.arrDatesTwo[i]);
        }
        // what kind of guest are comming
        MAIN_FUNCTIONSTWO.kindGuestsTwo();
        // create the object
        MAIN_FUNCTIONSTWO.createDataTwo();
        return this.arrDatesTwo;
    },
    // kind of guest
    kindGuestsTwo() {
        this.myAdultsTwo = this.getPeopleSelectTwo(this.guestsAdultsTwo);
        this.myKidsTwo = this.getPeopleSelectTwo(this.guestsKidsTwo);
    },
    // take values from html
    getPeopleSelectTwo(peopleTwo) {
        let bookedPeople = 0;
        let getMePeople = AUX_FUNCTIONSTWO.getMeValueSelect(peopleTwo);
        // making sure is a number
        bookedPeople = parseInt(getMePeople.value);
        return bookedPeople;
    },
    // how many rooms checked
    numberOfRoomsChecked() {
        this.seenRoomsTwo++;
        this.newOneTwo.numberRoomsChecked(this.seenRoomsTwo);
        console.log(this.newOneTwo.toString());
        return this.seenRoomsTwo;
    },
    // show me the money
    showPriceTwo: () => this.priceRoomTwo.map((e) => e = e.innerText).sort((a, b) => a - b),
    // create Object
    createDataTwo() {
        this.newOneTwo = new Hotel(this.arrDatesTwo[0], this.arrDatesTwo[1], this.showPriceTwo[0], this.currencyHotelTwo, this.seenRoomsTwo, this.myAdultsTwo, this.myKidsTwo, this.getLanguageTwo());
        // add all guests
        this.totalGuestsTwo = this.newOneTwo.howManyGuests();
        console.log(this.newOneTwo.toString());
    }
};
const AUX_FUNCTIONSTWO = {
    // converting new date
    myFormatYear: (str) => str.toISOString().slice(0, 10),
    // pusher
    pushToArr: (num) => MAIN_FUNCTIONSTWO.arrDatesTwo.push(num),
    // iterate over them all
    checkLengthFront: (arr) => arr.map((e) => e = AUX_FUNCTIONSTWO.howManyIntegersInFront(e)),
    // check how many integers infront
    howManyIntegersInFront: (str) => str.replace(/[^\d].*/, '').length,
    // checking special symbol
    checkSymbol(str) {
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
// all begins here
let allBeginsTwo = document.getElementById('bookingBtn').addEventListener('click', MAIN_FUNCTIONSTWO.getDatesTwo);
// rooms checked rooms
let roomsCheckedTwo = [...document.querySelectorAll(".wbkv9-Entity-button")]
    .map((el, ind) => el.addEventListener('click', MAIN_FUNCTIONSTWO.numberOfRoomsChecked));
