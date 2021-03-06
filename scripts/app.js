import Auth from './auth/auth.js'
import './db/db.js'
import Dashboard from './dashboard/dashboard.js'
class App{
    user

    constructor(){
        this.init()
    }
    init(){
        firebase.auth().onAuthStateChanged(user=>{
            this.user = user
            this.checkComponentToRender()
        })
    }
    checkComponentToRender(){
        document.getElementById('app').innerHTML = ''
        console.log(this.user)
        if(!this.user){
            new Auth('app')
        }else{
            new Dashboard('app')
        }
    }
}


new App()