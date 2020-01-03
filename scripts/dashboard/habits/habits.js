import Component from '../../Component.js';
import db from '../../db/db.js'

class Habits extends Component{
    constructor(rootId){
        super(rootId)
        this.create()
        this.dataWatcher()
    }
    dataWatcher(){
        db.collection('habits').onSnapshot(async (snapshot)=>{
            snapshot.docChanges().forEach(change=>{
                if(change.doc.id === firebase.auth().currentUser.uid){
                    console.log('render via data')
                }else{
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
    create(){
        const container = document.createElement('div')
        container.className = 'habits'
        this.element = container
        this.attach()
    }
}

export default Habits