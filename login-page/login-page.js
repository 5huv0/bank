function check(){
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    if(email == 'shuvo88745@gmail.com' && pass == "123456"){
        window.location.href='/bank/index.html';
    }
    else{
        alert("Email or Password is not VALID!!!!");
    }
}
