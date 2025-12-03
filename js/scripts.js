function createStars() {
    const starsContainer = document.createElement("div");
    starsContainer.style.position = 'fixed';
    starsContainer.style.top = '0';
    starsContainer.style.left = '0';
    starsContainer.style.width = '100%';
    starsContainer.style.height = '100%';
    starsContainer.style.pointerEvents = 'none';

    for (let i=0; i<200; i++) {
        const star = document.createElement("div");
        star.style.position = 'absolute';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random();
        star.style.animation = `twinkle ${Math.random() * 3 + 2 }s infinite`;
        starsContainer.appendChild(star);
                              }
    const style = document.createElement('style');
    style.textContent = `
         @keyframes twinkle {
             0%, 100% { opacity: 0.3; }
             50%      { opacity: 1;   }
                            }
                        `; 
    document.head.appendChild(style);                    

    document.body.insertBefore(starsContainer, document.body.firstChild);


                       }
createStars();                       