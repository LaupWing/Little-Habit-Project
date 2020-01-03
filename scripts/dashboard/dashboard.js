import Component from '../Component.js'

class Dashboard extends Component{
    constructor(){
        super('app')
    }
    create(){
        const container = document.createElement('div')
        container.className = 'dashboard'
        this.element = container
        this.attach()
    }
}

export default Dashboard