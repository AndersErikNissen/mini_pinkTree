//JS by Anders Erik Nissen
//UCN MMDA0920


// General
const
root = document.documentElement;

// Up Btn
const 
    upBtn = document.querySelector("#arrowUp"),
    content = document.querySelector("#mainContent_container");

    upBtn.addEventListener("click", () => {
        let
        one = content.classList.contains("inchght"),
        two = content.classList.contains("dehght");

        switch(true) {
            case one:
                content.classList.remove("inchght");
                content.classList.add("dehght");
                break;
            case two:
                content.classList.remove("dehght");
                content.classList.add("inchght");
                break;
            default:
                content.classList.add("inchght");
        }
    })

// New List Item


// Steps
const
stepArr = document.querySelectorAll(".step"), 
introBtn = document.querySelector("#intro_btn"),
step1 = document.querySelector("#step1");

let
intro = "#intro",
intDisplay = "--intro-display",
stepOneDisplay = "--step-one-display";


function nextStep (step, var1, var2) {
    let 
    int = document.querySelector(step);
    
    int.classList.add("fadeOut");
    
    setTimeout(()=> {
        root.style.setProperty(var1, "none")
    }, 1000)
    setTimeout(()=> {
        root.style.setProperty(var2, "flex");
    }, 1000)
    step1.classList.add("introNextStep");
    
}

introBtn.addEventListener("click", () => {
    nextStep(intro, intDisplay, stepOneDisplay);
})

// Select Theme
const
soft = document.querySelector("#theme1"),
edge = document.querySelector("#theme2");

soft.addEventListener("click", () => {
    edge.classList.remove("actTheme");
    soft.classList.add("actTheme");

    step1.setAttribute("data-status", 1)

    // One way to set attributes
    //step1.dataset.status = 1;

})
edge.addEventListener("click", () => {
    soft.classList.remove("actTheme");
    edge.classList.add("actTheme");

    step1.setAttribute("data-status", 2)
})

// Close Container
const
xBtn = document.querySelector("#xBtn");

xBtn.addEventListener("click", () => {
    content.classList.remove("inchght");
    content.classList.add("dehght");
})