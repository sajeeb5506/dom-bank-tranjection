document.getElementById('login-button').addEventListener('click',function(){
    // get email 
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;
    // get pass
     const passFild = document.getElementById('user-password');
     const userPassword = passFild.value;
    // validity-cheak
    if(userEmail == 'sajeeb@gamil.com' && userPassword == 'sajeeb' ){
        window.location.href = 'banking.html';
      
    }
})