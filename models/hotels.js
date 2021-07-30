// "One ring to rule them all" (Lord of the Rings)
/**Your task is to craft a JavaScript function that detects and returns the most relevant data of the availability page. When the function is executed in that page, it should return an object with the following information:
● The check-in date in yyyy-mm-dd format
● The check-out date in yyyy-mm-dd format
● The minimum price (expressed per night) offered by the hotel
● The currency of that price (three characters ISO code)
● The number of rooms the user searched for
● The number of guests the user searched for (split adults from children) ● The total amount of guests
● The language used (two letters code)
● Optionally you may add
○ Extra data for that minimum price (for instance if it is a refundable rate, includes breakfast, etc).
○ A complete list of rates shown by the page (with their details, as capacity, etc).
You are free to choose property names for all that information, just make it as comprehensible as you can.
 */
/* interface Client {
    myAdults: number;
    myKids: number;
} */
class Hotel {
    // constructor
    constructor(checkIn, checkOut, minimumPrice, currencyVisitor, howManyRooms, adultsComing, kidsComing, langVisitor) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.minimumPrice = minimumPrice;
        this.currencyVisitor = currencyVisitor;
        this.howManyRooms = howManyRooms;
        this.adultsComing = adultsComing;
        this.kidsComing = kidsComing;
        this.langVisitor = langVisitor;
    }
    // setters
    set myCheckIn(checkIn) {
        this.checkIn = checkIn;
    }
    set myCheckOut(checkOut) {
        this.checkOut = checkOut;
    }
    set myMinimumPrice(minimumPrice) {
        this.minimumPrice = minimumPrice;
    }
    set myCurrencyVisitor(currencyVisitor) {
        this.currencyVisitor = currencyVisitor;
    }
    set myHowManyRooms(howManyRooms) {
        this.howManyRooms = howManyRooms;
    }
    set myAdultsComing(adultsComing) {
        this.adultsComing = adultsComing;
    }
    set myKidsComing(kidsComing) {
        this.kidsComing = kidsComing;
    }
    set myLangVisitors(langVisitor) {
        this.langVisitor = langVisitor;
    }
    // getters
    get myCheckIn() {
        return this.checkIn;
    }
    get myCheckOut() {
        return this.checkOut;
    }
    get myMinimumPrice() {
        return this.minimumPrice;
    }
    get myCurrencyVisitor() {
        return this.currencyVisitor;
    }
    get myHowManyRooms() {
        return this.howManyRooms;
    }
    get myAdultsComing() {
        return this.adultsComing;
    }
    get myKidsComing() {
        return this.kidsComing;
    }
    get myLangVisitors() {
        return this.langVisitor;
    }
    // metohds
    howmanyGuests() {
        let sum = this.adultsComing + this.kidsComing;
        return sum;
    }
}
