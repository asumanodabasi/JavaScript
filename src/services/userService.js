export default class UserService{
    constructor(loggerService){
        this._users = []; // private property, only accessible within the class and its descendants
        this.loggerService=loggerService
    }
    add(user){
        this._users.push(user)
        this.loggerService.log(user)
    }

    list(){
       return this._users
    }

    getById(id){
        return this._users.find(u=>u.id==id )
    }


}