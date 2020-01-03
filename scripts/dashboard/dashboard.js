import Component from '../Component.js'
import Profile from './profile/profile.js'
import Habits from './habits/habits.js'

class Dashboard extends Component{
    constructor(rootId){
        super(rootId, false, [{name:'id', value: 'dashboard'}])
        new Profile()
        this.create()
        new Habits('dashboard')
    }
    create(){
        const container = document.createElement('div')
        container.className = 'dashboard'
        this.element = container
        this.attach()
    }
}

export default Dashboard