import User from "./user.js";

export default class Customer extends User{

    constructor(id,firstName,lastName,city,age,creditNumber){
        super(id,firstName,lastName,city,age);
        this.creditNumber=creditNumber;
    }
}