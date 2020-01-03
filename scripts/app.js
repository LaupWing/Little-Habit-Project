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
        this.checkComponentToRender()   
    }
    checkComponentToRender(){
        document.getElementById('app').innerHTML = ''
        if(!this.user){
            new Auth('app')
        }else{

        }
    }
}


new App()