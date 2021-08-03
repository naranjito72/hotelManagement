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
    getDatesTwo(): any[] {
        // clean arr
        this.arrDatesTwo = [];
        this.numbersFrontTwo = [];

        // create new date
        let d: Date = new Date();

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
        let i: number = 0;
        for (i; i < this.arrDatesTwo.length; i++) {
            if (this.numbersFrontTwo[i] == 2) this.arrDatesTwo[i] = AUX_FUNCTIONSTWO.cleanAndReverseDate(this.arrDatesTwo[i]);
            if (AUX_FUNCTIONSTWO.checkSymbol(this.arrDatesTwo[i]) == true) this.arrDatesTwo[i] = AUX_FUNCTIONSTWO.cleanDate(this.arrDatesTwo[i]);
        }
        // what kind of guest are comming
        MAIN_FUNCTIONSTWO.kindGuestsTwo();
        // create the object
        MAIN_FUNCTIONSTWO.createDataTwo();

    return this.arrDatesTwo;
    },

    // kind of guest
    kindGuestsTwo () {
        this.myAdultsTwo = this.getPeopleSelectTwo(this.guestsAdultsTwo);
        this.myKidsTwo = this.getPeopleSelectTwo(this.guestsKidsTwo);
    },
    // take values from html
    getPeopleSelectTwo (peopleTwo: string): number {
        let bookedPeople: number = 0;
        let getMePeople = AUX_FUNCTIONSTWO.getMeValueSelect(peopleTwo);
        // making sure is a number
        bookedPeople = parseInt(getMePeople.value);
        return bookedPeople;
    },
    // how many rooms checked
    numberOfRoomsChecked(): number {
        this.seenRoomsTwo++;
        this.newOneTwo.numberRoomsChecked(this.seenRoomsTwo);
        console.log(this.newOneTwo.toString());
        return this.seenRoomsTwo;
    },
    // show me the money
    showPriceTwo: () => this.priceRoomTwo.map((e: any) => e = e.innerText).sort((a: any, b: any) => a - b),
    // create Object
    createDataTwo(): void {
        this.newOneTwo = new Hotel(this.arrDatesTwo[0], this.arrDatesTwo[1], this.showPriceTwo[0], this.currencyHotelTwo, this.seenRoomsTwo,
                                      this.myAdultsTwo, this.myKidsTwo, this.getLanguageTwo());
        // add all guests
        this.totalGuestsTwo = this.newOneTwo.howManyGuests();
        console.log(this.newOneTwo.toString());
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
    checkSymbol(str: string): boolean {
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
