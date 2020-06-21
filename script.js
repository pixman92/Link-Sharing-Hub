//function for adding new user
function newUser(myEmail){
    adding('user', {myEmail: 'sam@gmail.com'}, {inbox:'', sent:''})
}

function createInbox(myEmail){
    whereMe('user', 'myEmail', myEmail, ()=>{});
}