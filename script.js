window.addEventListener('load', () => {
    const tl = gsap.timeline();
    tl.to(".brand-reveal", { opacity: 1, y: 0, duration: 1.5 })
      .to(".capsule-wrapper", { opacity: 1, y: 0, duration: 1 }, "-=1")
      .to(".footer-nav", { opacity: 1, duration: 1 }, "-=0.5");

    const scanBtn = document.getElementById('scan-trigger');
    scanBtn.addEventListener('click', () => {
        const val = document.getElementById('asset-input').value;
        if(!val) return gsap.to(".fave-capsule", {x: 10, repeat:5, yoyo:true, duration:0.05});
        
        scanBtn.innerText = "QUERYING F.A.V.E. CORE...";
        let score = { n: 0 };
        gsap.to(score, {
            n: 94.8, duration: 4, 
            onUpdate: () => document.getElementById('conviction-score').innerText = score.n.toFixed(1) + "%",
            onComplete: () => scanBtn.innerText = "VALUATION COMPLETE"
        });
    });

    document.addEventListener('mousemove', (e) => {
        gsap.to(".cursor-outer", { x: e.clientX, y: e.clientY, duration: 0.4 });
        gsap.to(".cursor-inner", { x: e.clientX, y: e.clientY, duration: 0.1 });
    });
});