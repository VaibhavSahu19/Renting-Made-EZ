let isVisible = document.querySelector('.eyeicon');
let password = document.querySelector('.password');

isVisible.addEventListener("click", () =>{
    if(password.type === 'password'){
        password.type = 'text';
        isVisible.classList.remove('fa-eye-slash');
        isVisible.classList.add('fa-eye');
    }else{
        password.type = 'password';
        isVisible.classList.add('fa-eye-slash');
        isVisible.classList.remove('fa-eye');
    }
})