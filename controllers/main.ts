'use strict';
// general
let bolean: boolean = false;
let numHelper: number = 0;
let arrDates: any[] = [];
let numbersFront: any[] = [];
let myAdults: number = 0;
let myKids: number = 0;
let seenRooms: number = 0;
let totalGuests: number = 0;
// object
let newOne: Hotel;

const getLanguage = () => (navigator.languages || [])[0] || navigator.language || 'es';
console.log(getLanguage());

// get the data
// date
let checkInDate: any = (document.querySelector('#datein') as HTMLInputElement);
let checkOutDate: any = (document.querySelector('#dateout') as HTMLInputElement);

// amount
let priceRoom: any = Array.from(document.querySelectorAll('.wbkv9-Amount-integerPart') as any);

// currency
let currencyHotel: any = (document.querySelector('.wbkv9-Entity-amountCurrencyLabel').innerHTML) as unknown;

// adults
let guestsAdults: any = (document.getElementById('adults') as HTMLElement);

// kids
let guestsKids: any = (document.getElementById('kids') as HTMLElement);

// rooms checked buttons
let roomsChecked: any = Array.from(document.querySelectorAll(".wbkv9-Entity-button") as any);
roomsChecked.map((el: any, ind: number) => el.addEventListener('click', howManyRoomsChecked));

/**********************************************************************************/
// it triggers everything
let allBegins: any = document.getElementById('bookingBtn') as HTMLBodyElement;

// add actions to the captures
allBegins.addEventListener('click', getDates);
//roomsChecked.addEventListener('click', getDates);

// first the dates and convertion to yyyy-MM-dd
function getDates() {
    // clean arr
    arrDates = [];
    numbersFront = [];

    // create new date
    let d: Date = new Date();

    // empty fields | null
    (checkInDate.value == "") ? checkInDate.value = auxFunctions.myFormatYear(d) : checkInDate.value;
    (checkOutDate.value == "") ? checkOutDate.value = checkInDate.value : checkOutDate.value;

    // push them
    auxFunctions.pushToArr(checkInDate.value);
    auxFunctions.pushToArr(checkOutDate.value);

    // check how many numbers infront
    numbersFront = auxFunctions.checkLengthFront(arrDates);

    // check regex
    bolean = auxFunctions.checkSymbol(checkInDate.value);

    // check if date comes in dd-MM-yyyy
    // check both i as the arrays will be always the same length
    // to refac with map
    let i: number = 0;
    for (i; i < arrDates.length; i++) {
        if (numbersFront[i] == 2) arrDates[i] = auxFunctions.cleanAndReverseDate(arrDates[i]);
        if (auxFunctions.checkSymbol(arrDates[i]) == true) arrDates[i] = auxFunctions.cleanDate(arrDates[i]);
    }
    // iniciate guests
    kindOfGuests();

    // create the object
    createDataObject();

    return arrDates;
}

// kind of gests
function kindOfGuests(): void {
    // get me the adults
    myAdults = getMePeopleFromSelect(guestsAdults);
    // get me the kids
    myKids = getMePeopleFromSelect(guestsKids);
}
// show me the money
const showPrice = priceRoom.map((e: any) => e = e.innerText).sort((a: any, b: any) => a - b)

// "Every time I see an adult on a bicycle, I no longer despair for the future of the human race" (H.G.Wells)
function getMePeopleFromSelect(people: string): number {
    let bookedPeople: number = 0;
    let getMePeople = auxFunctions.getMeValueSelect(people);
    // making sure is a number
    bookedPeople = parseInt(getMePeople.value);
    return bookedPeople;
}

// How many rooms the user is watching
function howManyRoomsChecked(): number {
    seenRooms++;
    newOne.howManyRoomsChecked(seenRooms);
    console.log(newOne.toString());
    return seenRooms;
}

// "Adults are always asking kids what they want to be when they grow up because they are looking for ideas" (Paula Poundstone)
// create de Object
function createDataObject() {
    newOne = new Hotel(arrDates[0], arrDates[1], showPrice[0], currencyHotel, seenRooms, myAdults, myKids, getLanguage());
    totalGuests = newOne.howManyGuests();
    console.log(newOne.toString());
}

/************************* aux functions ********************************/
let auxFunctions: any = {
    // converting new date
    myFormatYear: (str: any) => str.toISOString().slice(0, 10),

    // pusher
    pushToArr: (num: number) => arrDates.push(num),

    // iterate over them all
    checkLengthFront: (arr: string[]) => arr.map((e: any) => e = auxFunctions.howManyIntegersInFront(e)),

    // check how many integers infront
    howManyIntegersInFront: (str: string) => str.replace(/[^\d].*/, '').length,

    // checking special symbol
    // passing throug the regex function i don't need anymore to check for special symbol
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



