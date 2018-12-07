//Init Github
const github = new GitHub;
// Init UI
const ui = new UI;

// Search Input
const searhUser = document.getElementById('searchUser');

// Search Input Event Listener
searhUser.addEventListener('keyup', (e) => {
    //Get Input text
    const userText = e.target.value;
    if(userText !== '') {
      //Make http call
      github.getUser(userText)
      .then(data => {
        console.log(data);
        if(data.profile.message === 'Not Found'){
            //Show Alert
            ui.showAlert('User not found', 'alert alert-danger');
        } else {
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
        }
      })
    } else {
        //Clear profile
        ui.clearProfile();
    }
    e.preventDefault();
});