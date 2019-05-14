// Your code goes here


const headerIMGBus = document.querySelector(".intro img")
const navBarFunBus = document.querySelector(".main-navigation .logo-heading")
const contentIMGs = document.getElementsByClassName("img-content")
const contentSection = document.querySelectorAll(".content-section p")
const navItems = document.querySelectorAll(".nav a")


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

console.log(contentSection)