import Component from '../Component.js'
import Profile from './profile/profile.js'
class Dashboard extends Component{
    constructor(rootId){
        super(rootId)
        new Profile()
        this.create()
    }
    create(){
        const container = document.createElement('div')
        container.className = 'dashboard'
        this.element = container
        this.attach()
    }
}

export default Dashboard