window.addEventListener('load', () => {
    // 1. BOOT-UP SEQUENCE (GSAP REVEAL)
    // Ensures the terminal "materializes" smoothly on load
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.to(".brand-reveal", { opacity: 1, y: 0, duration: 1.5 })
      .to(".capsule-wrapper", { opacity: 1, duration: 1 }, "-=1")
      .to(".footer-nav", { opacity: 1, duration: 1 }, "-=0.8");

    // 2. CUSTOM CURSOR (THE APE EYE)
    // Only initializes on desktop to prevent mobile touch errors
    if (window.matchMedia("(pointer: fine)").matches) {
        const cInner = document.querySelector('.cursor-inner');
        const cOuter = document.querySelector('.cursor-outer');

        document.addEventListener('mousemove', (e) => {
            // Smooth follow for the outer ring, instant for the inner dot
            gsap.to(cOuter, { x: e.clientX, y: e.clientY, duration: 0.3 });
            gsap.to(cInner, { x: e.clientX, y: e.clientY, duration: 0.05 });
        });
    }

    // 3. F.A.V.E. SCAN LOGIC
    // Simulates the intelligence layer analyzing asset data
    const scanBtn = document.getElementById('scan-trigger');
    const scoreDisplay = document.getElementById('conviction-score');
    const inputField = document.getElementById('asset-input');

    scanBtn.addEventListener('click', () => {
        const assetValue = inputField.value.trim();

        if (!assetValue) {
            // Haptic-style shake animation if input is empty
            gsap.to(".fave-capsule", { x: 10, repeat: 5, yoyo: true, duration: 0.05 });
            return;
        }

        // Initialize scan state
        scanBtn.innerText = "ANALYZING...";
        scanBtn.style.pointerEvents = "none";
        let obj = { val: 20 };

        // Animate conviction score from 20% to 94%
        gsap.to(obj, {
            val: 94,
            duration: 3,
            ease: "power1.inOut",
            onUpdate: () => {
                scoreDisplay.innerText = Math.floor(obj.val) + "%";
            },
            onComplete: () => {
                scanBtn.innerText = "#SCAN_COMPLETE";
                setTimeout(() => {
                    alert(`F.A.V.E. Intelligence Report:\nAsset: ${assetValue}\nMarket Confidence: 94%\n\nDigital-to-Physical Materialization protocols active.`);
                    scanBtn.innerText = "#SECURE_SCAN";
                    scanBtn.style.pointerEvents = "all";
                }, 500);
            }
        });
    });
});