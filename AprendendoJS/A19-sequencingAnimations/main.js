const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

function animateElement(element, animation, timing) {
    return new Promise((resolve) => {
        const animationPlayer = element.animate(animation, timing);
        animationPlayer.onfinish = resolve; 
    });
}

async function animateSequence() {
    await animateElement(alice1, aliceTumbling, aliceTiming);
    await animateElement(alice2, aliceTumbling, aliceTiming);
    await animateElement(alice3, aliceTumbling, aliceTiming);
}

animateSequence();