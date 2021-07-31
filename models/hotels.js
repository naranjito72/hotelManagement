"use strict";
// "One ring to rule them all" (Lord of the Rings)
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
    howManyGuests() {
        let sum = this.adultsComing + this.kidsComing;
        return sum;
    }
    howManyRoomsChecked(num) {
        this.myHowManyRooms = num;
        return this.myHowManyRooms;
    }
}
