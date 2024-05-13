
const contactForm = document.querySelector('#contactForm');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span--required');
const labels = document.querySelectorAll('.label--clicked');

const navigationHeight = document.getElementById('menu').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 1 + "px");

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)){
        return true;
    }

    return false;
}

function setError(i){
    campos[i].style.borderBottom = '2px solid #E63636';
    spans[i].style.display = 'block';
}

function removeError(i){
    campos[i].style.borderBottom = '';
    spans[i].style.display = 'none';
}
function isValid(){
        if(campos[0].value.length < 3){
            setError(0);
        } 
    
        if(campos[2].value.length < 2){
            setError(2); 
        } 

        if (isEmailValid(campos[1].value)){
            
        }else if(!isEmailValid(campos[1].value)){
            setError(1);
        } 

        return !campos[0].style.borderBottom && !campos[1].style.borderBottom && !campos[2].style.borderBottom;
}

campos[0].addEventListener('click', (e) => {
    e.preventDefault();
    removeError(0);
});

campos[1].addEventListener('click', (e) => {
    e.preventDefault();
    removeError(1);
});

campos[2].addEventListener('click', (e) => {
    e.preventDefault();
    removeError(2);
});



contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(isValid() === true){
        contactForm.submit();
    }
    
});



