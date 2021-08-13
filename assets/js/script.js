//JS by Anders Erik Nissen
//UCN MMDA0920


// General
const
root = document.documentElement;

// Up Btn
const 
    upBtn = document.querySelector("#arrowUp"),
    content = document.querySelector("#mainContent_container"),
    contentMain = document.querySelector("#mainContent");

    upBtn.addEventListener("click", () => {
        let
        one = content.classList.contains("inchght"),
        two = content.classList.contains("dehght");

        switch(true) {
            case one:
                content.classList.remove("inchght");
                contentMain.classList.remove("fadeMain");

                content.classList.add("dehght");
                contentMain.classList.add("fadeMainOut");
                break;

                case two:
                    content.classList.remove("dehght");
                    content.classList.add("inchght");
                    contentMain.classList.add("fadeMain");
                    contentMain.classList.remove("fadeMainOut");
                    break;

                    default:
                        content.classList.add("inchght");
                        contentMain.classList.add("fadeMain");
                        contentMain.classList.remove("fadeMainOut");
        }
    })

// New List Item


// Steps
const
stepArr = document.querySelectorAll(".step"), 
introBtn = document.querySelector("#intro_btn"),
step1 = document.querySelector("#step1"),
step1btn = document.querySelector("#step1_nextBtn"),

step2 = document.querySelector("#step2"),
step2btn = document.querySelector("#step2_nextBtn"),

mainMain = document.querySelector("#mainMain");

let
//Intro > Step1
intro = "#intro",
intDisplay = "--intro-display",
stepOneDisplay = "--step-one-display",
//Step1 > Step2
stepOne = "#step1",
stepTwoDisplay = "--step-two-display",
//Step2 > MainMain
stepTwo = "#step2",
mainMainDisplay = "--mainMain-display";


function nextStep (step, var1, var2, sec_step) {
    let 
    int = document.querySelector(step);
    
    int.classList.add("fadeOut");
    
    setTimeout(()=> {
        root.style.setProperty(var1, "none")
    }, 1000)
    setTimeout(()=> {
        root.style.setProperty(var2, "flex");
    }, 1000)

    if(int.classList.contains("introNextStep")) {
        int.classList.remove("introNextStep")
    }
    sec_step.classList.add("introNextStep");
    
}

introBtn.addEventListener("click", () => {
    nextStep(intro, intDisplay, stepOneDisplay, step1);
})
step1btn.addEventListener("click", ()=> {
    nextStep(stepOne, stepOneDisplay, stepTwoDisplay, step2);

    let 
    data = document.querySelector("#step1").getAttribute("data-status"),
    dataNR = parseInt(data);

    // Changes the corners on elements depending on the attribute.
    if (dataNR === 1) {
        root.style.setProperty("--corners", "var(--theme-edge)")
    } else {
        root.style.setProperty("--corners", "0px")
    }
});
step2btn.addEventListener("click", () => {
    nextStep(stepTwo, stepTwoDisplay, mainMainDisplay, mainMain);

    // If statements for Both Themes, to set the variables for the mainMain content.
    let
    step_1 = document.querySelector("#step1").getAttribute("data-status"),
    step_1NR = parseInt(step_1),
    
    step_2 = document.querySelector("#step2").getAttribute("data-status"),
    step_2NR = parseInt(step_2);
    
    //Looks at Step 1, if === 1 have round edges, else sharp corners.
    if (step_1NR === 1) {
        root.style.setProperty("--mainMain-edge", "var(--theme-edge)")
    } else {
        root.style.setProperty("--mainMain-edge", "0")
    }

    //Changes the Pickers Colors if Pink(2) is selected otherwise nothing needs to change.
    if (step_2NR === 2) {
        root.style.setProperty("--picker-color-one", "rgb(255, 236, 249)");
        root.style.setProperty("--picker-color-two", "linear-gradient(346deg, rgba(42,224,45,1) 0%, rgba(48,190,244,1) 100%)");
        root.style.setProperty("--picker-color-bg", "#ce1e58");

        //Changes Logo IMG to match the theme.
        document.querySelector("#mainMain_content header img").src = "/assets/images/icons/pinkTree_logo_green.png";
    } else {
        document.querySelector("#mainMain_content header img").src = "/assets/images/icons/pinkTree_logo_pink.png";
    }
    root.style.setProperty("--mainMain-color-one", "var(--picker-color-one)");
    root.style.setProperty("--mainMain-color-two", "var(--picker-color-two)");
    root.style.setProperty("--mainMain-color-bg", "var(--picker-color-bg)");

    
    document.querySelector("#mainMain_welcome").classList.add("welcome");

    //Sets timings of animations.
    setTimeout(()=> {document.querySelector("#topX").style.display = "none";}, 900)
    setTimeout(()=> {
        document.querySelector("#welcomeDiv").style.display = "none";
    }, 5000)
    setTimeout(()=> {
        document.querySelector("#mainMain").style.justifyContent = "start";
        document.querySelector("#hideMainMainContent").classList.add("welcome_mainMain_content")
        document.querySelector("#mainMain_content").classList.add("welcome_mainMain");
    }, 5010)
})


// Select Theme / Color Picker
const
soft = document.querySelector("#theme1"),
edge = document.querySelector("#theme2"),
blue = document.querySelector("#dark_theme"),
pink = document.querySelector("#light_theme");

soft.addEventListener("click", () => {
    edge.classList.remove("actTheme");
    soft.classList.add("actTheme");

    step1.setAttribute("data-status", 1);
    step1btn.classList.add("showNextBtn");

    // One way to set attributes
    //step1.dataset.status = 1;

})
edge.addEventListener("click", () => {
    soft.classList.remove("actTheme");
    edge.classList.add("actTheme");

    step1.setAttribute("data-status", 2);
    step1btn.classList.add("showNextBtn");
})

blue.addEventListener("click", () => {
    let 
    h3 = document.querySelector("#dark_theme h3"),
    h3other = document.querySelector("#light_theme h3");

    step2.setAttribute("data-status", 1);
    pink.classList.remove("actTheme");
    blue.classList.add("actTheme");
    h3.style.color = "black";
    h3other.style.color = "white";
    step2btn.classList.add("showNextBtn");
})
pink.addEventListener("click", () => {
    let 
    h3 = document.querySelector("#light_theme h3"),
    h3other = document.querySelector("#dark_theme h3");

    step2.setAttribute("data-status", 2);
    pink.classList.add("actTheme");
    blue.classList.remove("actTheme");
    h3.style.color = "black";
    h3other.style.color = "white";
    step2btn.classList.add("showNextBtn");
})

// Close Container
const
xBtn = document.querySelector("#xBtn");

xBtn.addEventListener("click", (btn) => {
    content.classList.remove("inchght");
    content.classList.add("dehght");
    xBtn.classList.add("change");
    setTimeout(()=> {xBtn.classList.remove("change");}, 2000)

    contentMain.classList.add("fadeMainOut");
})




// Main Main

function makeBoxs () {
    for(let i = 0; i < 5; i++) {
        let
        box = document.createElement("section"),
        title = document.createElement("h3"),
        dateH4 = document.createElement("h4"),
        date = new Date(),
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear();

        if(day.toString().length < 2) {
            day = "0" + date.getDate();
        }
        if(month.toString().length < 2) {
            month = "0" + date.getMonth();
        }
    
        title.textContent = "Title";
        dateH4.textContent = day + "/" + month + "/" + year; 
    
        box.classList.add("noteBox");
    
        box.append(title, dateH4);
        document.querySelector("#noteList").appendChild(box);
    }
}
makeBoxs();


// Submit 
    const 
    submitBtn = document.querySelector("#submit"),

    inpTitle = document.querySelector("#inpTitle"),
    intpextArea = document.querySelector("#inpTextArea");

    //Create New Note Box
        function newNoteBox() {
            let 
            // Values of inputs
                tv = inpTitle.value,
                tav = intpextArea.value,
            // Creates Elements
                box = document.createElement("section"),
                title = document.createElement("h3"),
                area = document.createElement("p"),
            // Display None Button
                btn = document.createElement("button"),
                btnBox = document.createElement("section"),
                btnDelete = document.createElement("button"),
                btnCancel = document.createElement("button"),
            // Date     
                dateH4 = document.createElement("h4"),
                date = new Date(),
                day = date.getDate(),
                month = date.getMonth() + 1,
                year = date.getFullYear();

                if(day.toString().length < 2) {
                    day = "0" + date.getDate();
                }
                if(month.toString().length < 2) {
                    month = "0" + date.getMonth();
                }

            // Delete Buttons details
                btn.type = "button";
                btn.textContent = "Delete";
                btnBox.classList.add("deleteBox");
                btnDelete.type = "button";
                btnDelete.innerHTML = "<i>Delete</i>";
                btnDelete.classList.add("deleteBtn");
                btnCancel.type = "button";
                btnCancel.textContent = "Cancel";
                btnCancel.classList.add("cancelBtn");
            
            // The rest 
                dateH4.textContent = day + "/" + month + "/" + year; 

                title.textContent = tv;
                area.textContent = tav;
                box.classList.add("noteBox");
            
            // Append
                btnBox.append(btnCancel, btnDelete)
                box.append(title, dateH4, area, btn, btnBox);
                document.querySelector("#noteList").appendChild(box);

            //Delete function
                btn.addEventListener("click", () => { 
                    btnBox.style.display = "flex";
                });
                btnCancel.addEventListener("click", ()=> {
                    btnBox.style.display = "none";
                })
                btnDelete.addEventListener("click", ()=> {
                    box.remove();
                })

            //Reset Text Areas
                inpTitle.value = "";
                intpextArea.value = "";
        }
        submitBtn.addEventListener("click", newNoteBox)

// Change between NoteList and NoteNew
    const
    noteListBtn = document.querySelector("#noteListBtn"),
    noteNewBtn = document.querySelector("#noteNewBtn"),
    noteList = document.querySelector("#noteList"),
    noteNew = document.querySelector("#noteNew");

    noteListBtn.addEventListener("click", ()=> {
        noteList.style.display = "flex";
        noteNew.style.display = "none";
    })
    noteNewBtn.addEventListener("click", ()=> {
        noteNew.style.display = "flex";
        noteList.style.display = "none";
    })
