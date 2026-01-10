window.addEventListener('load', () => {
    const tl = gsap.timeline();
    tl.to(".brand-reveal", { opacity: 1, y: 0, duration: 1 })
      .to(".capsule-wrapper", { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .to(".footer-nav", { opacity: 1, duration: 1 }, "-=0.5");

    const scanBtn = document.getElementById('scan-trigger');
    scanBtn.addEventListener('click', async () => {
        const query = document.getElementById('asset-input').value;
        if(!query) return;
        
        scanBtn.innerText = "QUERYING F.A.V.E...";
        
        // This is where your API integration lives
        setTimeout(() => {
            let obj = { val: 20 };
            gsap.to(obj, { 
                val: 94, duration: 2, 
                onUpdate: () => document.getElementById('conviction-score').innerText = Math.floor(obj.val) + "%",
                onComplete: () => scanBtn.innerText = "SCAN COMPLETE"
            });
        }, 1000);
    });

    document.addEventListener('mousemove', (e) => {
        gsap.to(".cursor-outer", { x: e.clientX, y: e.clientY, duration: 0.3 });
        gsap.to(".cursor-inner", { x: e.clientX, y: e.clientY, duration: 0.05 });
    });
});