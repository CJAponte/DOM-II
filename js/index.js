// Your code goes here


const headerIMGBus = document.querySelector(".intro img")
const navBarFunBus = document.querySelector(".main-navigation .logo-heading")
const contentIMGs = document.getElementsByClassName("img-content")
const contentSection = document.querySelectorAll(".content-section p")
const navItems = document.querySelectorAll(".nav a")
const bottomIMG = document.querySelector(".content-destination img")
const bottomButtons = document.getElementsByClassName("btn")


headerIMGBus.addEventListener("mouseenter",()=>{
    headerIMGBus.style.display = "none"
});


navBarFunBus.addEventListener("mouseleave", ()=>{
    headerIMGBus.style.display = "flex"
});

contentIMGs[0].addEventListener("dblclick", ()=>{
        contentIMGs[0].style.visibility = "hidden"
});

contentIMGs[1].addEventListener("dblclick", ()=>{
    contentIMGs[1].style.visibility = "hidden"
});

navBarFunBus.addEventListener("click", ()=>{
    contentIMGs[0].style.visibility = "visible"
    contentIMGs[1].style.visibility = "visible"
});


window.addEventListener("resize",()=>{
    navItems.forEach((el)=>{
        el.style.color = "green"
    })
})

window.addEventListener("scroll", ()=>{
    contentSection.forEach((el)=>{
        el.style.color = "blue"
    })
})

window.addEventListener("load", ()=>{
    alert("Welcome to the Fun Bus Website!")
})

contentIMGs[0].addEventListener("drag", ()=>{
    contentIMGs[0].style.opacity = ".5"
})

contentIMGs[1].addEventListener("drag", ()=>{
    contentIMGs[1].style.opacity = ".15"
})

bottomIMG.addEventListener("contextmenu", ()=>{
    contentIMGs[0].style.display = "none"
    contentIMGs[1].style.display = "none"
    headerIMGBus.style.display = "none"
    bottomIMG.style.display = "none"
    navBarFunBus.style.display = "none"
    event.preventDefault();
})


bottomButtons[0].addEventListener("mouseover", ()=>{
    bottomButtons[0].style.background = "orange"
})

bottomButtons[1].addEventListener("mouseover", ()=>{
    bottomButtons[1].style.background = "orange"
})

bottomButtons[2].addEventListener("mouseover", ()=>{

    bottomButtons[2].style.background = "orange"
})