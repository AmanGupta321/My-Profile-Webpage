const typedTextSpan = document.querySelector('.typed-text');
// const heart = `${'&#x2665;'}`
const textArray = [ 'Hello Friends','Welcome to My Portfolio','Programming is MY Passion','MY Hobby', `Its an Art which I love to learn`];
const typingDelay = 200;
const erasingDelay = 80;
const newTextDelay = 900;
let textArrayIndex = 0;
let charIndex = 0;
// console.log(heart);
function type() {
    if (charIndex < textArray[ textArrayIndex ].length)
    {
        typedTextSpan.textContent += textArray[ textArrayIndex ].charAt(charIndex);
        charIndex++
        setTimeout(type,typingDelay);
    }
    else
    {
        setTimeout(erase,newTextDelay);
    }
}

function erase() {
    if (charIndex > 0)
    {
        typedTextSpan.textContent = textArray[ textArrayIndex ].substring(0,charIndex - 1)
        charIndex--;
        // console.log(charIndex);
        setTimeout(erase,erasingDelay)
    }
    else
    {
        // console.log(textArrayIndex);
        textArrayIndex++;
        // console.log(textArrayIndex);
        if (textArrayIndex >= textArray.length) 
        {
            textArrayIndex = 0;
        }
        setTimeout(type,typingDelay + 100)
    }
}








// ABOUT ME
const about_me_typedTextSpan = document.querySelector('.about-me-typed-text');

const about_me_textArray = [`Hey It's me Aman Gupta, a passionate web developer.
 I am a hard-working, motivated & an amiable personality.
 I love structure and order and I also stand for quality.
 I like working in team, which enthusiast me to learn more. 
 CSS & JavaScript is being my core of every superity, 
 I don't limit within it.
 Study and Research update me with latest technologies.
 Being a student of Bachelor level, 
 I want to spread the awareness of external 
 research and practise..`];
const about_me_typingDelay = 20;
const about_me_newTextDelay = 120;
let about_me_textArrayIndex = 0;
let about_me_charIndex = 0;

function about_me_type() {
    if (about_me_charIndex < about_me_textArray[ about_me_textArrayIndex ].length)
    {
        about_me_typedTextSpan.textContent += about_me_textArray[ about_me_textArrayIndex ].charAt(about_me_charIndex);
        about_me_charIndex++
        setTimeout(about_me_type,about_me_typingDelay);
    }
}




document.addEventListener('DOMContentLoaded',() => {
    setTimeout(type,newTextDelay);
    setTimeout(about_me_type,about_me_newTextDelay);
})
