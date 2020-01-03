import Component from '../../Component.js'

class Login extends Component{
    constructor(rootId){
        super(rootId)
        this.create()
    }
    create(){
        const container = document.createElement('form')
        container.className = 'login-container'
        container.innerHTML = `
            <div>
                <input class="email" type="email" placeholder="Email"/>
            </div>
            <div>
                <input class="password" type="password" placeholder="Password"/>
            </div>
            <button>Login</button>
        `
        container.addEventListener('submit', this.submitHandler.bind(this))
        this.element = container
        this.attach()
    }
    submitHandler(event){
        event.preventDefault()
        const inputEmail = this.element.querySelector('input.email')
        const inputPassword = this.element.querySelector('input.password')
        if(inputEmail.value !== '' && inputPassword !== ''){
            this.loginUser(inputEmail.value, inputPassword.value)
        }else{
            alert('Please fill in both fields!')
        }
    }
    async loginUser(email,password){
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
        }catch(e){
            alert(e.message)
        }
    }

}

export default Login