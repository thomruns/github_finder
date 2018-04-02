// initialize GitHub class
const github = new Github;

// initialize UI class
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) =>  {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
    // make HTTP call
    github.getUser(userText)
    .then(data  => {
      if(data.profile.message === 'Not Found') {
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        ui.showProfile(data.profile);
      }
    });
  } else {
    ui.clearProfile();
  }
});