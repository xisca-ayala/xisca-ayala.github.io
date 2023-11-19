function lettersAppear(){
    let aprenderWord = document.getElementById("letterTransition");
    let letters = document.getElementsByClassName("letter");
    aprenderWord.classList.add("appear");

    letters.forEach((letter, i) => {
        letter.style.transitionDelay = `${i*0.1}s`;
    });
}

function sendContact(){
    const info = {
        'name': document.getElementById('name').value,
        'email': document.getElementById('email').value,
        'phoneNumber': document.getElementById('phoneNumber').value,
        'subject': document.getElementById('subject').value
    }
    console.log(info);
    document.getElementById('contact').reset();
}