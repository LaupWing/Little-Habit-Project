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
                <input type="email" placeholder="Email"/>
            </div>
            <div>
                <input type="password" placeholder="Password"/>
            </div>
            <button>Login</button>
        `
        this.element = container
        this.attach()
    }

}

export default Login