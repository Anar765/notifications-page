let notificationNumber = document.querySelector(".number");

function MarkAll () {
    
    const unreadedMessage = document.querySelectorAll(".active");
    const dots = document.querySelectorAll(".dot");

    notificationNumber.textContent = 0;

    unreadedMessage.forEach(message => {
        message.classList.remove('active');
    });

    dots.forEach(dot => {
        dot.style.display = 'none';
    });
}

function MarkByOne(index) {
    const unreadedMessage = document.getElementsByClassName("chat").item(index);
    const dot = document.getElementsByClassName("dot").item(index);

    if(notificationNumber.textContent > 0 && unreadedMessage.classList.contains('active')) {
        notificationNumber.textContent -= 1;
    }

    console.log(unreadedMessage, notificationNumber.textContent);

    unreadedMessage.classList.remove('active');
    dot.style.display = 'none';
}