import { BaseLogger, ElasticLogger } from "../crossCutingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"
import Customer from "../models/customer.js"

//js de nesnellik cok kisitli.nesnellik icin prototyping kullaniriz
console.log("user component yüklendi")

let log=new ElasticLogger()
let userService=new UserService(log)



let user1=new User(1,"Asu","Odabaşı","İstanbul")
let user2=new User(2,"Melike","Odabaşı","İstanbul")
user1.city="Bursa"

let customer={id:1,firstName:"asu"}
//prototyping : sonradan deger ekleme
customer.lastName="Odabaşı"
console.log(customer.lastName)

let customerToAdd=new Customer(1,"Ela","Yilmaz","Ankara","kakfscv");
customerToAdd.type="customer"
userService.add(customerToAdd)

userService.add(user1)
userService.add(user2)
userService.listCustomers


console.log("---------------------")
userService.load()

console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())