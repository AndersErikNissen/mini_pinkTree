//JS by Anders Erik Nissen
//UCN MMDA0920

// Up Btn
const 
upBtn = document.querySelector("#arrowUp"),
content = document.querySelector("#mainContent");

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
