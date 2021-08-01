"use strict"

const MAIN_FUNCTIONSTWO: any = {

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
    checkInDateTwo: (document.querySelector('#datein') as HTMLInputElement),
    checkOutDateTwo: (document.querySelector('#dateout') as HTMLInputElement),

    // amount
    priceRoomTwo: [...document.querySelectorAll('.wbkv9-Amount-integerPart') as any],

    // currency
    currencyHotelTwo: (document.querySelector('.wbkv9-Entity-amountCurrencyLabel').innerHTML) as unknown,

    // adults
    guestsAdultsTwo: (document.getElementById('adults') as HTMLElement),

    // kids
    guestsKidsTwo: (document.getElementById('kids') as HTMLElement),


    // methods
    getLanguageTwo: () => (navigator.languages || [])[0] || navigator.language || 'es',

    // dates
    getDatesTwo: function () {
        // clean arr
        MAIN_FUNCTIONSTWO.arrDatesTwo = [];
        MAIN_FUNCTIONSTWO.numbersFrontTwo = [];

        // create new date
        let d: Date = new Date();

        // empty fields | null
        (MAIN_FUNCTIONSTWO.checkInDateTwo.value == "") ? MAIN_FUNCTIONSTWO.checkInDateTwo.value = AUX_FUNCTIONSTWO.myFormatYear(d) : MAIN_FUNCTIONSTWO.checkInDateTwo.value;
        (MAIN_FUNCTIONSTWO.checkOutDateTwo.value == "") ? MAIN_FUNCTIONSTWO.checkOutDateTwo.value = MAIN_FUNCTIONSTWO.checkInDateTwo.value : MAIN_FUNCTIONSTWO.checkOutDateTwo.value;

        // push them
        AUX_FUNCTIONSTWO.pushToArr(MAIN_FUNCTIONSTWO.checkInDateTwo.value);
        AUX_FUNCTIONSTWO.pushToArr(MAIN_FUNCTIONSTWO.checkOutDateTwo.value);

        // check how many numbers infront
        MAIN_FUNCTIONSTWO.numbersFrontTwo = AUX_FUNCTIONSTWO.checkLengthFront(MAIN_FUNCTIONSTWO.arrDatesTwo);

        // check regex
        MAIN_FUNCTIONSTWO.myBoolean = AUX_FUNCTIONSTWO.checkSymbol(MAIN_FUNCTIONSTWO.checkInDateTwo.value);

        // check if date comes in dd-MM-yyyy
        // check both index as the arrays will be always the same length
        // how to refac with map?
        let i: number = 0;
        for (i; i < MAIN_FUNCTIONSTWO.arrDatesTwo.length; i++) {
            if (MAIN_FUNCTIONSTWO.numbersFrontTwo[i] == 2) MAIN_FUNCTIONSTWO.arrDatesTwo[i] = AUX_FUNCTIONSTWO.cleanAndReverseDate(MAIN_FUNCTIONSTWO.arrDatesTwo[i]);
            if (AUX_FUNCTIONSTWO.checkSymbol(MAIN_FUNCTIONSTWO.arrDatesTwo[i]) == true) MAIN_FUNCTIONSTWO.arrDatesTwo[i] = AUX_FUNCTIONSTWO.cleanDate(MAIN_FUNCTIONSTWO.arrDatesTwo[i]);
        }
        // what kind of guest are comming
        MAIN_FUNCTIONSTWO.kindGuestsTwo();
        // create the object
        MAIN_FUNCTIONSTWO.createDataTwo();

    return MAIN_FUNCTIONSTWO.arrDatesTwo;
    },

    // kind of guest
    kindGuestsTwo: function () {
        MAIN_FUNCTIONSTWO.myAdultsTwo = MAIN_FUNCTIONSTWO.getPeopleSelectTwo(MAIN_FUNCTIONSTWO.guestsAdultsTwo);
        MAIN_FUNCTIONSTWO.myKidsTwo = MAIN_FUNCTIONSTWO.getPeopleSelectTwo(MAIN_FUNCTIONSTWO.guestsKidsTwo);
    },
    // take values from html
    getPeopleSelectTwo: function (peopleTwo: string): number {
        let bookedPeople: number = 0;
        let getMePeople = AUX_FUNCTIONSTWO.getMeValueSelect(peopleTwo);
        // making sure is a number
        bookedPeople = parseInt(getMePeople.value);
        return bookedPeople;
    },
    // how many rooms checked
    numberOfRoomsChecked: function (): number {
        MAIN_FUNCTIONSTWO.seenRoomsTwo++;
        MAIN_FUNCTIONSTWO.newOneTwo.numberRoomsChecked(MAIN_FUNCTIONSTWO.seenRoomsTwo);
        console.log(MAIN_FUNCTIONSTWO.newOneTwo.toString());
        return MAIN_FUNCTIONSTWO.seenRoomsTwo;
    },
    // show me the money
    showPriceTwo: () => MAIN_FUNCTIONSTWO.priceRoomTwo.map((e: any) => e = e.innerText).sort((a: any, b: any) => a - b),
    // create Object
    createDataTwo: function(): void {
        MAIN_FUNCTIONSTWO.newOneTwo = new Hotel(MAIN_FUNCTIONSTWO.arrDatesTwo[0], MAIN_FUNCTIONSTWO.arrDatesTwo[1], MAIN_FUNCTIONSTWO.showPriceTwo[0], MAIN_FUNCTIONSTWO.currencyHotelTwo, MAIN_FUNCTIONSTWO.seenRoomsTwo,
                                      MAIN_FUNCTIONSTWO.myAdultsTwo, MAIN_FUNCTIONSTWO.myKidsTwo, MAIN_FUNCTIONSTWO.getLanguageTwo());
        // add all guests
        MAIN_FUNCTIONSTWO.totalGuestsTwo = MAIN_FUNCTIONSTWO.newOneTwo.howManyGuests();
        console.log(MAIN_FUNCTIONSTWO.newOneTwo.toString());
    }
}

const AUX_FUNCTIONSTWO: any = {
    // converting new date
    myFormatYear: (str: any) => str.toISOString().slice(0, 10),

    // pusher
    pushToArr: (num: number) => MAIN_FUNCTIONSTWO.arrDatesTwo.push(num),

    // iterate over them all
    checkLengthFront: (arr: string[]) => arr.map((e: any) => e = AUX_FUNCTIONSTWO.howManyIntegersInFront(e)),

    // check how many integers infront
    howManyIntegersInFront: (str: string) => str.replace(/[^\d].*/, '').length,

    // checking special symbol
    checkSymbol: function (str: string): boolean {
        let symbolToCheck: RegExp = /[/]/
        let myHelp: boolean;
        (symbolToCheck.test(str)) ? myHelp = true : myHelp = false;
        return myHelp;
    },

    //reversing dates and change symbol
    cleanAndReverseDate: (str: string) => str.split(/[/-]/).reverse().join('-'),

    // only change symbol
    cleanDate: (str: string) => str.split(/[/-]/).join('-'),

    // value from select
    getMeValueSelect: (str: any) => (str.options[str.selectedIndex])
}

// all begins here
let allBeginsTwo: any = (document.getElementById('bookingBtn') as HTMLBodyElement).addEventListener('click', MAIN_FUNCTIONSTWO.getDatesTwo);
// rooms checked rooms
let roomsCheckedTwo: any = [...document.querySelectorAll(".wbkv9-Entity-button") as any]
                           .map((el: any, ind: number) => el.addEventListener('click', MAIN_FUNCTIONSTWO.numberOfRoomsChecked));
