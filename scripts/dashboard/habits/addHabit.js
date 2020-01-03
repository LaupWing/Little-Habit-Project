import Component from '../../Component.js'
import db from '../../db/db.js'
class AddHabit extends Component{
    list
    constructor(rootId){
        super(rootId)
        this.create()
        this.dataWatcher()
    }
    create(){
        const container = document.createElement('form')
        container.className = 'add-habit'
        container.innerHTML = `
            <div class="field">
                <input type="text" placeholder="Title"/>
            </div>
            <div class="field">
                <textarea></textarea>
            </div>
            <button>Add</button>
        `
        container.addEventListener('submit', this.handleSubmit.bind(this))
        this.element = container
        this.attach()
    }
    handleSubmit(event){
        event.preventDefault()
        const input = this.element.querySelector('input')
        const textarea = this.element.querySelector('textarea')
        if(input.value !== '' && textarea.value !== ''){
            this.addToDB(input.value, textarea.value)
            input.value = ''
            textarea.value = ''
        }else{
            alert('You have to fill in both fields')
        }
    }
    dataWatcher(){
        db.collection('habits').onSnapshot(async (snapshot)=>{
            snapshot.docChanges().forEach(change=>{
                if(
                    change.doc.id === firebase.auth().currentUser.uid && 
                    change.doc.data().habits.length>0
                ){
                    this.list = change.doc.data().habits
                }
            })
        })
    }
    addToDB(title, description){
        const newHabit = {
            title,
            description,
            createdAt: new Date(),
            checkedIn:[]
        }

        this.list.push(newHabit)
        db
            .collection('habits')
            .doc(firebase.auth().currentUser.uid)
            .update(
                {
                    habits: this.list
                }
            )
            .catch(e=>{
                db
                    .collection('habits')
                    .doc(firebase.auth().currentUser.uid)
                    .set(
                        {
                            habits: this.list
                        }
                    )
            })
        
    }
}

export default AddHabit