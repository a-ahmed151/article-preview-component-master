const shareBtn = document.querySelector("#share-btn")
const shareBox = document.querySelector("#share-options")
const mainContent = document.querySelector(".main-content")
const personDiv = document.querySelector(".person")


window.addEventListener("scroll",updatePositionShareBox());

shareBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    shareBox.classList.toggle("hidden");
    if (!shareBox.classList.contains("hidden")){
        shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)"
        shareBtn.firstChild.style.filter = 'brightness(5)'
    }else{
        shareBtn.style.backgroundColor = ""
        shareBtn.firstChild.style.filter = ''
    }
    updatePositionShareBox();
});


shareBtn.addEventListener('mouseover',()=>{
    if (shareBox.classList.contains("hidden")){
        shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)"
        shareBtn.firstChild.style.filter = 'brightness(5)'
    }else{
        shareBtn.style.backgroundColor = ""
        shareBtn.firstChild.style.filter = ''
    }
})
shareBtn.addEventListener('mouseout',()=>{
    if (!shareBox.classList.contains("hidden")){
        shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)"
        shareBtn.firstChild.style.filter = 'brightness(5)'
    }else{
        shareBtn.style.backgroundColor = ""
        shareBtn.firstChild.style.filter = ''
    }
})


document.documentElement.addEventListener("click",(e)=>{
    if (!shareBox.contains(e.target)){
        shareBox.classList.add("hidden")
        shareBtn.style.backgroundColor = ""
        shareBtn.firstChild.style.filter = ''
    }
})

function updatePositionShareBox(){
    if (document.documentElement.getBoundingClientRect().width <= 700){
        shareBox.style.top = `${personDiv.getBoundingClientRect().top + window.scrollY}px`
        shareBox.style.height = `${mainContent.getBoundingClientRect().bottom - personDiv.getBoundingClientRect().top}px`
    }else{
        shareBox.style.top = `${shareBtn.getBoundingClientRect().top - shareBox.getBoundingClientRect().height - 20}px`
        shareBox.style.left = `${shareBtn.getBoundingClientRect().left - shareBox.getBoundingClientRect().width /2}px`
    }
}

window.addEventListener("resize",()=>{location.reload(); return;});