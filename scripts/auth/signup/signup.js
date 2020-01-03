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
                <input type="email" placeholder="Email"/>
            </div>
            <div>
                <input type="password" placeholder="Password"/>
            </div>
            <div>
                <input type="password" placeholder="Confirm Password"/>
            </div>
            <button>Signup</button>
        `
        this.element = container
        this.attach()
    }

}

export default Signup