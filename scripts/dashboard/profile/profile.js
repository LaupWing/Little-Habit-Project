import Component from '../../Component.js'

class Profile extends Component{
    constructor(){
        super('app')
        this.create()
    }
    create(){
        const container = document.createElement('div')
        container.className = 'profile'
        container.innerHTML = `
            <button>Logout</button>
        `
        container.querySelector('button').addEventListener('click', this.logout)
        this.element = container
        this.attach()
    }
    logout(){
        firebase.auth().signOut()
    }
}

export default Profile