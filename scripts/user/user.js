class User {
    user = null
    constructor(){
        this.checkUser()
    }
    checkUser(){
        this.user = firebase.auth().currentUser
    }
    async loginUser(email,password){
        await firebase.auth().signInWithEmailAndPassword(email,password)
        this.user = firebase.auth().currentUser
    }
}

export default User