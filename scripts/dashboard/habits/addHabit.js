import Component from '../../Component.js'
import db from '../../db/db.js'
class AddHabit extends Component{
    data
    constructor(rootId){
        super(rootId)
        this.create()
        this.getData()
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
        }else{
            alert('You have to fill in both fields')
        }
    }
    getData(){
        try{
            db
                .collection('habits')
                .doc(firebase.auth().currentUser.uid)
                .get()
                .then(data=>{
                    if(data.exists){
                        this.data = data
                    }else{
                        this.data = []
                    }
                })
        }catch(e){
            console.log(e)
        }
    }
    addToDB(title, description){
        const habits =  [...this.data]
        const newHabit = {
            title,
            description,
            createdAt: new Date(),
            checkedIn:[]
        }
        habits.push(newHabit)
            db
                .collection('habits')
                .doc(firebase.auth().currentUser.uid)
                .update(
                    {
                        habits
                    }
                )
                .catch(e=>{
                    console.log(e)
                    db
                        .collection('habits')
                        .doc(firebase.auth().currentUser.uid)
                        .set(
                            {
                                habits
                            }
                        )
                })
        
    }
}

export default AddHabit