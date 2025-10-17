==
const captchaCanvas = document.getElementById('captchaCanvas');
const ctx = captchaCanvas.getContext('2d');
const captchaInput = document.getElementById('captchaInput');
const resultMessage = document.getElementById('resultMessage');

let captchaText = '';

function generateRandomText() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function drawCaptcha() {
    captchaText = generateRandomText();
    ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(captchaText, 30, captchaCanvas.height / 1.5);
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
        ctx.moveTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
        ctx.lineTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
    }
    ctx.strokeStyle = '#ddd';
    ctx.stroke();
}

document.getElementById('refreshButton').addEventListener('click', drawCaptcha);

document.getElementById('captchaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (captchaInput.value.toUpperCase() === captchaText) {
        resultMessage.style.color = 'green';
        resultMessage.textContent = 'CAPTCHA verified successfully!';
    } else {
        resultMessage.style.color = 'red';
        resultMessage.textContent = 'Incorrect CAPTCHA, please try again.';
    }
});

drawCaptcha();