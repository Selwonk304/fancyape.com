window.addEventListener('load', () => {
    // Reveal Sequence
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.to(".brand-reveal", { opacity: 1, y: 0, duration: 1.5 })
      .to(".capsule-wrapper", { opacity: 1, duration: 1 }, "-=1")
      .to(".footer-nav", { opacity: 1, duration: 1 }, "-=0.8");

    // Custom Cursor logic
    if (window.matchMedia("(pointer: fine)").matches) {
        const cInner = document.querySelector('.cursor-inner');
        const cOuter = document.querySelector('.cursor-outer');
        document.addEventListener('mousemove', (e) => {
            gsap.to(cOuter, { x: e.clientX, y: e.clientY, duration: 0.3 });
            gsap.to(cInner, { x: e.clientX, y: e.clientY, duration: 0.05 });
        });
    }

    // Valuation Logic
    const scanBtn = document.getElementById('scan-trigger');
    const score = document.getElementById('conviction-score');
    scanBtn.addEventListener('click', () => {
        if(!document.getElementById('asset-input').value) {
            gsap.to(".fave-capsule", { x: 10, repeat: 5, yoyo: true, duration: 0.05 });
            return;
        }
        scanBtn.innerText = "ANALYZING...";
        let obj = { val: 20 };
        gsap.to(obj, { 
            val: 94, 
            duration: 3, 
            onUpdate: () => score.innerText = Math.floor(obj.val) + "%",
            onComplete: () => { scanBtn.innerText = "#SCAN_COMPLETE"; }
        });
    });
});