$(document).ready(function() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true; // Allows program to work before you quit speaking.

    var p = document.createElement('p.document');
    // var text;
    const text_field = document.querySelector('.text_field');

    const text_area = document.querySelector('#doc_text_area');

    // const text_field_hidden = documents.querySelector('.text_field_hidden');
    // text_field.appendChild(p);
    // text_field_hidden.appendChild(p);

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
                .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    // p.textContent = transcript;
    // text_area.value += transcript;
    // text = transcript;
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        // text_field_hidden.appendChild(p);
        // text_field.appendChild(p);
        text_area.value += "\n" + transcript;

        // gon.global.document_text = text_field.innerHTML;
        // console.dir(gon.global.document_text);
    }
});
    recognition.addEventListener('end', recognition.start);
    recognition.start();

    function grabText() {
        console.log(gon.global.document_text);
        // const text = text_field.innerHTML;
        // gon.document_text = text;
        // console.log(gon.document_text);
    }
    document.querySelector('#document_save').addEventListener('click', grabText);

});

