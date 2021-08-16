firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      var uid = user.uid;
      // console.log(uid)
    firebase.database().ref(`user/${uid}`).once('value',(data)=>{
      console.log(data.val())
    })  

  } else {
    window.location = "index.html"
  } 
});

let logout = () => {
  firebase.auth().signOut()
    .then(() => {
      window.location = "login.html"
    })

}