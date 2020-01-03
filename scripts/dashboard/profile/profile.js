import Component from '../../Component.js'

class Profiel extends Component{
    constructor(){
        super('app')
    }
    create(){
        const container = document.createElement('div')
        container.className = 'profile'
        container.innerHTML = `
            <button>Logout</button>
        `
        container.querySelector('button').addEventListener('click', this.logout)
    }
    logout(){
        firebase.auth().signOut()
    }
}