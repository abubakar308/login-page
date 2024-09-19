

document.getElementById('login-button').addEventListener('click',function(event){
    event.preventDefault();
   const phoneNumber = document.getElementById('input-number').value;
   const pinNumber = document.getElementById('input-pin').value;

    if(phoneNumber === '5' && pinNumber === '1234'){
        window.location.href = "../homepage.html";
    }
    else{
        alert('wrong number or pin');
    }
})