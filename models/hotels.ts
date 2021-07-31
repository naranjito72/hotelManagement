// "One ring to rule them all" (Lord of the Rings)

/* interface Client {
    myAdults: number;
    myKids: number;
} */
class Hotel {
    // properties
    private checkIn: string;
    private checkOut: string;
    private minimumPrice: number;
    private currencyVisitor: any;
    private howManyRooms: number;
    private adultsComing: number;
    private kidsComing: number;
    private langVisitor: string;

    // constructor
    constructor (checkIn: string, checkOut: string, minimumPrice: number,currencyVisitor: any,
                 howManyRooms: number, adultsComing: number, kidsComing: number, langVisitor: string) {

                    this.checkIn         = checkIn;
                    this.checkOut        = checkOut;
                    this.minimumPrice    = minimumPrice;
                    this.currencyVisitor = currencyVisitor;
                    this.howManyRooms    = howManyRooms;
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
    public set myHowManyRooms(howManyRooms: number) {
        this.howManyRooms = howManyRooms;
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
    public get myHowManyRooms() {
        return this.howManyRooms;
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
        num = this.howManyRooms
        return this.howManyRooms;
    }
     // public langVisitor = (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language || 'es'; 

}