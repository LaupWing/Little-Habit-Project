import Component from '../../Component.js'

class Signup extends Component{
    constructor(rootId){
        super(rootId)
        this.create()
    }
    create(){
        const container = document.createElement('form')
        container.className = 'signup-container'
        container.innerHTML = `
            <div>
                <input class="email" type="email" placeholder="Email"/>
            </div>
            <div>
                <input class="password" type="password" placeholder="Password"/>
            </div>
            <div>
                <input class="password_confirm" type="password" placeholder="Confirm Password"/>
            </div>
            <button>Signup</button>
        `
        container.addEventListener('submit', this.handleSubmit.bind(this))
        this.element = container
        this.attach()
    }
    handleSubmit(event){
        event.preventDefault()
        const email = this.element.querySelector('input.email')
        const password = this.element.querySelector('input.password')
        const password_confirm = this.element.querySelector('input.password_confirm')
        if(
            email.value !== '' &&
            password !== '' &&
            password_confirm !==''){
            if(password_confirm.value == password.value){
                firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            }else{
                console.log
                alert('Confirm password and password has to be the same')
            }     
        }else{
            alert('Fill in all the fields')
        }
    }

}

export default Signup