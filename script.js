// ==========================
// LOADER
// ==========================

window.onload = () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    },3000);

}

// ==========================
// ELEMENTS
// ==========================

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const reasonBtn = document.getElementById("reasonBtn");
const forgiveBtn = document.getElementById("forgiveBtn");

const welcome = document.getElementById("welcome");
const letter = document.getElementById("letter");
const reasons = document.getElementById("reasons");
const finalPage = document.getElementById("final");

const typing = document.getElementById("typing");

const music = document.getElementById("bgMusic");

// ==========================
// OPEN LETTER
// ==========================

startBtn.onclick = () => {

welcome.classList.add("hidden");

letter.classList.remove("hidden");

music.play().catch(()=>{});

typeLetter();

}

// ==========================
// TYPEWRITER
// ==========================

const message = `Dear Pretty Princess,

I know I tease you a lot...

Sometimes I act stubborn...

Sometimes I annoy you more than I should...

But hurting you was never my intention.

Seeing you upset hurts me too.

Please don't stay mad. 🤍

Can we start again? ❤️`;

let i = 0;

function typeLetter(){

typing.innerHTML="";

i=0;

let speed=45;

function type(){

if(i < message.length){

typing.innerHTML += message.charAt(i);

i++;

setTimeout(type,speed);

}

}

type();

}

// ==========================
// NEXT
// ==========================

nextBtn.onclick = ()=>{

letter.classList.add("hidden");

reasons.classList.remove("hidden");

showReason();

}

// ==========================
// REASONS
// ==========================

const reasonText = document.getElementById("reasonText");

const reasonList=[

"❤️ Your smile makes everything better.",

"🌸 You always make my day brighter.",

"🥹 Your little reactions are adorable.",

"✨ Because you are my safe place.",

"🤍 Because you're my favorite person.",

"👑 Because you'll always be my Pretty Princess."

];

let r=0;

function showReason(){

reasonText.innerHTML=reasonList[r];

}

reasonBtn.onclick=()=>{

r++;

if(r>=reasonList.length){

r=0;

}

showReason();

}

// ==========================
// FORGIVE
// ==========================

forgiveBtn.onclick=()=>{

reasons.classList.add("hidden");

finalPage.classList.remove("hidden");

createHearts();

}

// ==========================
// FLOATING HEARTS
// ==========================

function createHearts() {

    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";

        heart.className = "heart";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";

        heart.style.fontSize = (20 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        let pos = window.innerHeight;

        const move = setInterval(() => {

            pos -= 3;

            heart.style.top = pos + "px";

            if (pos < -100) {
                clearInterval(move);
                heart.remove();
            }

        }, 20);

    }

    confetti();
}

// ==========================
// CONFETTI
// ==========================

function confetti() {

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * window.innerWidth + "px";

        piece.style.background =
            `hsl(${Math.random() * 360},100%,60%)`;

        piece.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        document.body.appendChild(piece);

        setTimeout(() => piece.remove(), 4000);

    }

}
document.addEventListener("mousemove",(e)=>{

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=e.clientX+"px";
    s.style.top=e.clientY+"px";

    document.body.appendChild(s);

    setTimeout(()=>{
        s.remove();
    },1000);

});
const musicBtn=document.getElementById("musicBtn");

musicBtn.onclick=()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="🎵 Pause Music";

    }else{

        music.pause();

        musicBtn.innerHTML="▶️ Play Music";

    }

};
