const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function ElementSizeStartAmin() {
    let page1 = document.querySelector("#page1");
    const elemWidth = page1.clientWidth;
    if (elemWidth >= 1280 || elemWidth >= 1024) {
        function startAnim() {
            let tl = gsap.timeline();
            tl.to("#cont" , {
                y:"100vh",
                scale: 0.4,
                duration : 0
            })
            tl.to("#cont", {
                y:"-60vh",
                duration: 1.2,
                delay: 1
            })
            tl.to("#cont", {
                delay: 0.3,
                y:"0vh",
                rotate : -720,
                scale: 1,
                duration: 0.8,
            })
        }
        startAnim()
    }
}


function cardAnim() {
    let one = document.querySelector("#page8 .one");
    let two = document.querySelector("#page8 .two ");
    let three = document.querySelector("#page8 .three ");
    let four = document.querySelector("#page8 .four");
    
    let page1 = document.querySelector("#page1");
    const elemWidth = page1.clientWidth;
    if (elemWidth >= 480) {
        one.addEventListener("mouseenter", ()=> {
            gsap.to(one , {
                backgroundColor : "#b0a698"
            })
            gsap.to(four , {
                left: "-26%",
                duration:0.9
            })
            gsap.to(three , {
                left: "-13%",
                duration:0.7
            })
            gsap.to(two , {
                left: "-1%",
                duration:0.5
            })
        })
        one.addEventListener("mouseleave", ()=> {
            gsap.to(one , {
                backgroundColor: "#C4BCB3"
            })
            gsap.to(two , {
                left: "-14%",
                duration:0.9
            })
            gsap.to(three , {
                left: "-28%",
                duration:0.7
            })
            gsap.to(four , {
                left: "-42%",
                duration:0.5
            })
        })
    
        two.addEventListener("mouseenter", ()=> {
            gsap.to(two , {
                backgroundColor : "#b0a698"
            })
            gsap.to(four , {
                left: "-29%",
                duration:0.7
            })
            gsap.to(three , {
                left: "-15%",
                duration:0.5
            })
        })
        two.addEventListener("mouseleave", ()=> {
            gsap.to(two , {
                backgroundColor: "#C4BCB3"
            })
            gsap.to(three , {
                left: "-28%",
                duration:0.7
            })
            gsap.to(four , {
                left: "-42%",
                duration:0.5
            })
        })
    
        three.addEventListener("mouseenter", ()=> {
            gsap.to(three , {
                backgroundColor : "#b0a698"
            })
            gsap.to(four , {
                left: "-29%",
                duration:0.5
            })
        })
        three.addEventListener("mouseleave", ()=> {
            gsap.to(three , {
                backgroundColor: "#C4BCB3"
            })
            gsap.to(four , {
                left: "-42%",
                duration:0.5
            })
        })
        four.addEventListener("mouseenter", ()=> {
            gsap.to(four , {
                backgroundColor : "#b0a698"
            })
        })
        four.addEventListener("mouseleave", ()=> {
            gsap.to(four , {
                backgroundColor: "#C4BCB3"
            })
        })
    }
    
}

window.addEventListener("load", cardAnim);

window.addEventListener("load", ElementSizeStartAmin);





