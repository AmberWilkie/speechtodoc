$(document).ready(function() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true; // Allows program to work before you quit speaking.

    var p = document.createElement('p.document');
    const text_field = document.querySelector('.text_field');
    text_field.appendChild(p);

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
                .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    p.textContent = transcript;
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        text_field.appendChild(p);
    }
});
    recognition.addEventListener('end', recognition.start);
    recognition.start();

});

