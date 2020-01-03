import Component from '../Component.js'
import Profile from './profile/profile.js'
import Habits from './habits/habits.js'
import AddHabit from './habits/addHabit.js'

class Dashboard extends Component{
    constructor(rootId){
        super(rootId, false, [{name:'id', value: 'dashboard'}])
        this.create()
        new Profile()
        new Habits('dashboard')
        new AddHabit('dashboard')
    }
    create(){
        const container = document.createElement('div')
        container.className = 'dashboard'
        this.element = container
        this.attach()
    }
}

export default Dashboard