import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("user component yüklendi")

let userService=new UserService()

let user1=new User(1,"Asu","Odabaşı","İstanbul")

let customer={id:1,firstName:"asu"}
//prototyping : sonradan deger ekleme
customer.lastName="Odabaşı"
console.log(customer.lastName)
userService.add()

