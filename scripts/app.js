import Auth from './auth/auth.js'
import './db/db.js'

class App{
    user

    constructor(){
        this.init()
    }
    init(){
        firebase.auth().onAuthStateChanged(user=>{
            this.user = user
        })
        this.checkStatus()   
    }
    checkStatus(){
        if(!this.user){
            new Auth('app')
        }
    }
}


new App()