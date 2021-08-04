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
intro = document.querySelector("#intro_btn"),
step1 = document.querySelector("#step1");

intro.addEventListener("click", () => {
    let int = document.querySelector("#intro");

    int.classList.add("intro");
    
    setTimeout(()=> {
        root.style.setProperty("--intro-display", "none")
    }, 1000)
    setTimeout(()=> {
        root.style.setProperty("--step-one-display", "flex");
    }, 1000)
    step1.classList.add("introNextStep");

})

function changeStep (btn,next) {
    btn.addEventListener("click", () => {
        next.classList.add("nextStep");
    })
}
