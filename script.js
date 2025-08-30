//~ Animate progress bars
const progressBars = document.querySelectorAll('.progress-done');
progressBars.forEach(bar => {
    setTimeout(() => {
        bar.style.width = bar.getAttribute('data-done') + '%';
        bar.style.opacity = 1;
    }, 500);
});
//& Animate circular skills
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    let percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', percent);
});
//^ storing form data in localstorage
let form=document.getElementById("userform")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let subject=document.getElementById("sub").value;
    let text=document.getElementById("text").value;
    let Data={
        Name:name,
        Email:email,
        Subject:subject,
        Text:text
    }
    let object=JSON.parse(localStorage.getItem("userData")) || []
    object.push(Data)
    localStorage.setItem("userData",JSON.stringify(object))
//^ storing form data in sessionstorage
    let object1=JSON.parse(sessionStorage.getItem("userData")) || []
    object1.push(Data)
    sessionStorage.setItem("userData",JSON.stringify(object1))
    form.reset()
    alert("Your Data Is Sent Successfully...")
})

