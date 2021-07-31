"use strict";
class Hotel {
    // constructor
    constructor(checkIn, checkOut, minimumPrice, currencyVisitor, howManyRoomsVisited, adultsComing, kidsComing, langVisitor) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.minimumPrice = minimumPrice;
        this.currencyVisitor = currencyVisitor;
        this.howManyRoomsVisited = howManyRoomsVisited;
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
    set myHowManyRoomsVisited(howManyRoomsVisited) {
        this.howManyRoomsVisited = howManyRoomsVisited;
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
    get myHowManyRoomsVisited() {
        return this.howManyRoomsVisited;
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
        this.myHowManyRoomsVisited = num;
        return this.myHowManyRoomsVisited;
    }
    toString() {
        let infoObject = `User's info. Check-in: ${this.myCheckIn}. Check-out: ${this.myCheckOut}.\n
                                  Minimum price shown in screen: ${this.myMinimumPrice}. Currency shown in screen at first: ${this.myCurrencyVisitor}\n 
                                  Rooms visited by user: ${this.myHowManyRoomsVisited}. Language Browser: ${this.myLangVisitors}\n
                                  Adults value: ${this.myAdultsComing}. Kids value: ${this.myKidsComing}. Total number of guests: ${this.howManyGuests}`;
        return infoObject;
    }
}
