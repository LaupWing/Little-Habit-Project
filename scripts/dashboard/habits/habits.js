import Component from '../../Component.js';
import db from '../../db/db.js'
import Habit from './habit.js'

class Habits extends Component{
    exists = false
    habits = []
    constructor(rootId){
        super(rootId, false, [{name: 'id', value:'habit-list'}])
        this.create()
        this.dataWatcher()
    }
    dataWatcher(){
        db.collection('habits').onSnapshot(async (snapshot)=>{
            snapshot.docChanges().forEach(change=>{
                if(
                    change.doc.id === firebase.auth().currentUser.uid && 
                    change.doc.data().habits.length>0
                ){
                    this.exists = true
                    this.habits = change.doc.data().habits      
                    this.habitsList()
                }else if(!this.exists){
                    this.zeroState()
                }
            })
        })
    }
    zeroState(){
        this.element.innerHTML = `
            <p>Add your first habit!</p>
        `
    }
    habitsList(){
        this.element.innerHTML = ''
        this.habits.forEach((h,i)=>{
            new Habit('habit-list', h, i, this.habits)
        })
    }
    create(){
        const container = document.createElement('div')
        container.className = 'habits'
        this.element = container
        this.attach()
    }
}

export default Habits