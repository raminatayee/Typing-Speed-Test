const typingText = document.querySelector(".typingText");

function randomParagraph(){
    let randTndex = Math.floor(Math.random() * paragraphs.length);
    paragraphs[randTndex].split("").forEach(span => {
        let spanTag =  `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
}
randomParagraph();