import User from './user/user.js'
import Auth from './auth/auth.js'
import './db/db.js'

class App{
    constructor(){
        const user = new User()        
        this.user = user.user
        this.checkStatus()   
    }
    checkStatus(){
        if(!this.user){
            new Auth()
        }
    }
}

new App()