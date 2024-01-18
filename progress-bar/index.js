const progress = document.getElementById('progress')
const circles = document.querySelectorAll(".circle")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

let currentActive=0;
const updateStyle = ()=>{
    circles.forEach((circles,index)=>{
        if(index<currentActive){
            circles.classList.add("active")
        }else{
            circles.classList.remove("active")
        }
    });
    const actives = document.querySelectorAll(".active")
    progress.style.width = ((actives.length-1)/(circles.length-1))*100+'%';
    if(currentActive===0) prev.disabled = true;
    else if(currentActive===circles.length) next.disabled = true;
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}
prev.addEventListener("click",()=>{
    if(currentActive>1) currentActive--;
    console.log(currentActive)
    updateStyle()
})

next.addEventListener("click",()=>{
    if(currentActive<circles.length)    currentActive++;
    console.log(currentActive)
    updateStyle()
})