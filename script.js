// 1. Initialize GSAP for the HUD Reveal
window.addEventListener('load', () => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.to(".brand-reveal", { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5 })
      .to(".capsule-wrapper", { opacity: 1, scale: 1, duration: 1 }, "-=0.8")
      .to(".footer-protocol", { opacity: 1, duration: 1 }, "-=0.5");
});

// 2. Custom Cursor Movement (The "Ape Eye")
const cursorInner = document.querySelector('.cursor-inner');
const cursorOuter = document.querySelector('.cursor-outer');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    
    // Smooth follow for the outer ring
    gsap.to(cursorOuter, { x: clientX - 20, y: clientY - 20, duration: 0.2 });
    // Instant follow for the lime dot
    gsap.to(cursorInner, { x: clientX - 4, y: clientY - 4, duration: 0 });
});

// 3. Scan Button Logic
const scanBtn = document.getElementById('scan-trigger');
const scoreDisplay = document.getElementById('conviction-score');
const input = document.getElementById('asset-input');

scanBtn.addEventListener('click', () => {
    if(!input.value) {
        // Shake animation if empty
        gsap.to(".fave-capsule", { x: 10, repeat: 5, yoyo: true, duration: 0.05 });
        return;
    }
    
    let obj = { value: 20 };
    scanBtn.innerText = "ANALYZING...";
    
    gsap.to(obj, {
        value: 94,
        duration: 3,
        ease: "power1.inOut",
        onUpdate: () => {
            scoreDisplay.innerText = Math.floor(obj.value) + "%";
        },
        onComplete: () => {
            scanBtn.innerText = "#SCAN_COMPLETE";
        }
    });
});
