import Component from '../Component.js'
import Login from './login/login.js'
import Signup from './signup/signup.js'

class Auth extends Component{
    constructor(){
        super('app')
        this.active = 'login'
        this.create()
    }
    create(){
        const container = document.createElement('div')
        container.className = 'auth-container'
        container.innerHTML =`
            <nav>
                <li id="login" class="active">Login</li>
                <li id="signup" >SignUp</li>
            </nav>
            <div id="auth"></div>
        `
        container.querySelectorAll('li').forEach(li=>{
            li.addEventListener('click', this.toggleAuth.bind(this))
        })
        this.element = container
        this.attach()
        this.attachAuth()
    }
    toggleAuth(event){
        if(this.active === event.target.id)    return
        this.active = event.target.id
        this.attachAuth()
    }
    
    attachAuth(){
        const authContainer = this.element.querySelector('#auth')
        authContainer.innerHTML = ''
        if(this.active === 'login'){
            new Login('auth')
        }else{
            new Signup('auth')
        }
    }
}

export default Auth