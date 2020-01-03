import Component from '../../Component.js'
import db from '../../db/db.js'

class Habit extends Component{
    constructor(rootId, habit, id, list){
        super(rootId)
        this.habit = habit
        this.create()
        this.id = id
        this.list = list
    }
    create(){
        const habit = document.createElement('div')
        habit.innerHTML = `
            <header>
                <h2>${this.habit.title}</h2>
                <button>Delete</button>
            </header>
            <p>${this.habit.description}</p>
        `
        habit.className = 'habit'
        habit.querySelector('button').addEventListener('click', this.deleteHabit.bind(this))
        habit.addEventListener('click', this.moreInfo.bind(this))
        this.element = habit
        this.attach()
    }   
    moreInfo(event){
        console.log(event)
    }
    deleteHabit(){
        this.list.splice(this.id, 1)
        db.collection('habits').doc(firebase.auth().currentUser.uid).update({
            habits: this.list
        })
    }
}

export default Habit