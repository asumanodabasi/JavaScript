import { BaseLogger, ElasticLogger } from "../crossCutingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("user component yüklendi")

let log=new ElasticLogger()
let userService=new UserService(log)



let user1=new User(1,"Asu","Odabaşı","İstanbul")
let user2=new User(1,"Melike","Odabaşı","İstanbul")


let customer={id:1,firstName:"asu"}
//prototyping : sonradan deger ekleme
customer.lastName="Odabaşı"
console.log(customer.lastName)

userService.add(user1)
userService.add(user2)
userService.list()
console.log(userService.list())
console.log(userService.getById(2))



