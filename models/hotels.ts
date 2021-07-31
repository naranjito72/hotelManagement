"use strict"
// "One ring to rule them all" (Lord of the Rings)
class Hotel {
    // properties
    private checkIn: string;
    private checkOut: string;
    private minimumPrice: number;
    private currencyVisitor: any;
    private howManyRoomsVisited: number;
    private adultsComing: number;
    private kidsComing: number;
    private langVisitor: string;

    // constructor
    constructor (checkIn: string, checkOut: string, minimumPrice: number,currencyVisitor: any,
                 howManyRoomsVisited: number, adultsComing: number, kidsComing: number, langVisitor: string) {

                    this.checkIn         = checkIn;
                    this.checkOut        = checkOut;
                    this.minimumPrice    = minimumPrice;
                    this.currencyVisitor = currencyVisitor;
                    this.howManyRoomsVisited = howManyRoomsVisited;
                    this.adultsComing    = adultsComing;
                    this.kidsComing      = kidsComing;
                    this.langVisitor     = langVisitor;
    }
   
    // setters
    public set myCheckIn(checkIn: string) {
        this.checkIn = checkIn;
    }
    public set myCheckOut(checkOut: string) {
        this.checkOut = checkOut;
    }
    public set myMinimumPrice(minimumPrice: number) {
        this.minimumPrice = minimumPrice;
    }
    public set myCurrencyVisitor(currencyVisitor: string){
        this.currencyVisitor = currencyVisitor;
    }
    public set myHowManyRoomsVisited(howManyRoomsVisited: number) {
        this.howManyRoomsVisited = howManyRoomsVisited;
    }
    public set myAdultsComing(adultsComing: number) {
        this.adultsComing = adultsComing;
    }
    public set myKidsComing(kidsComing: number) {
        this.kidsComing = kidsComing;
    }
    public set myLangVisitors(langVisitor: string) {
        this.langVisitor = langVisitor;
    }

    // getters
    public get myCheckIn() {
        return this.checkIn;
    }
    public get myCheckOut() {
        return this.checkOut;
    }
    public get myMinimumPrice() {
        return this.minimumPrice;
    }
    public get myCurrencyVisitor() {
        return this.currencyVisitor;
    }
    public get myHowManyRoomsVisited() {
        return this.howManyRoomsVisited;
    }
    public get myAdultsComing() {
        return this.adultsComing;
    }
    public get myKidsComing() {
        return this.kidsComing;
    }
    public get myLangVisitors(){
        
        return this.langVisitor;
    }
    // metohds
    public howManyGuests(): number {
        let sum: number = this.adultsComing + this.kidsComing;
        return sum;
    }

    public howManyRoomsChecked(num: number): number {
        this.myHowManyRoomsVisited = num;
        return this.myHowManyRoomsVisited;
    }

    public toString(): string {
        let infoObject: string = `User's info. Check-in: ${this.myCheckIn}. Check-out: ${this.myCheckOut}.\n
                                  Minimum price shown in screen: ${this.myMinimumPrice}. Currency shown in screen at first: ${this.myCurrencyVisitor}\n 
                                  Rooms visited by user: ${this.myHowManyRoomsVisited}. Language Browser: ${this.myLangVisitors}\n
                                  Adults value: ${this.myAdultsComing}. Kids value: ${this.myKidsComing}. Total number of guests: ${this.howManyGuests}`;
        return infoObject;
    }
    
}
 