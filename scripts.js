let page = 1;
const messages = [
    "Having you in my life is my greatest blessing.",
    "You make my world brighter and my heart happier.",
    "Every moment with you is a treasure.",
    "Your beauty and your smile light up my world.",
    "Will you be my Valentine? ❤️"
];

const images = [
    "image1.jpg", 
    "image2.jpg", 
    "image3.jpg", 
    "image4.jpg"
];

function openCard() {
    document.getElementById('card').classList.add('open');
}

function nextPage() {
    if (page < 4) {
        page++;
        document.getElementById('message').innerText = messages[page - 1];
        document.querySelector('.image').src = images[page - 1];
    } else {
        finalPage();
    }
}

function finalPage() {
    document.getElementById('back').innerHTML = `<h1>${messages[4]}</h1>
    <div class="valentine-options">
        <button onclick="yesClicked()" style="background-color: green; color: white;">Yes</button>
        <button onclick="noClicked()" style="background-color: red; color: white;">No</button>
    </div>`;
}

function yesClicked() {
    document.getElementById('back').innerHTML = `<h1>YEY! HEHE I LOVE YOU! 😉🥰</h1>
    <img id="message-image" src="pou netflix and chill.gif" alt="pou netflix and chill.gif" width="100%">`;
}

function noClicked() {
    setTimeout(() => {
        alert("Error!!! Try again! 😠");
    }, 100);
}
