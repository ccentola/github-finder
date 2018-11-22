// init github
github = new Github;

// init ui
ui = new UI;

// search input
const searchUser = document.getElementById('search-user');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    // make sure field is not blank
    if(userText !== ''){
        // make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    // show alert
                    ui.showAlert('User not found.', 'alert alert-danger');

                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);

                }
            });

    } else {
        // clear profile
        ui.clearProfile();
    }

})