const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
})
loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
})

const btn = document.querySelector("btn");
btn.addEventListener('click', (e)=> {
    e.target.classList.add('animate');
    setTimeout(()=> {
        e.target.classList.remove('animate');
    },4500);
});

