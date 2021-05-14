var database = [
    {
        username:"Srishti Ganguly",
        password:"01234"
    },
    {
        username:"Pritam",
        password:"great"
    },
    {
        username:"yahoo",
        password:"toomuch"
    }
];

var newsfeed = [
    {
        username:"Sally",
        timeline:"Excited for new job"
    },
    {
        username:"Brandon",
        timeline:"Learning JavaScript"
    }
];

function isUserValid(user, pwd){
    for(var i=0; i<database.length;i++){
        if(user === database[i].username && pwd === database[i].password){
           return true;
        }
    }
    return false;
}

function signIn(user, pwd){
    if(isUserValid(user,pwd)){
        console.log(newsfeed);
    }
    else{
        alert("Sorry! Wrong username and password");
    }
    
}

signIn(prompt("Enter username:"), prompt("Enter password: "));
