let bars = document.getElementById("bars")
let sidebar = document.querySelector(".sidebar")
let close = document.getElementById("close")
bars.addEventListener("click",function()
{
    sidebar.style.right = "342px"
})

close.addEventListener("click",function()
{
    sidebar.style.right = "688px"
})



let more = document.getElementById("more")
let morebtn = document.getElementById("morebtn")
let lessbtn = document.getElementById("lessbtn")
let less = document.getElementById("less")


morebtn.addEventListener("click", () => {
    morebtn.style.display = "none"
    less.style.display = "block"
    }
)

lessbtn.addEventListener("click", () =>{
    less.style.display = "none"
    morebtn.style.display = "block"
})

let img1 = document.getElementById("img1")
let text1 = document.getElementById("text1")

img1.addEventListener("mouseenter",()=>
{
    text1.style.display = "block"
})


img1.addEventListener("mouseleave",()=>
    {
        text1.style.display = "none"
    })

let img2 = document.getElementById("img2")
let text2 = document.getElementById("text2")

img2.addEventListener("mouseenter",()=>
{
    text2.style.display = "block"
})

img2.addEventListener("mouseleave",()=>
    {
        text2.style.display = "none"
    })

let img3 = document.getElementById("img3")
let text3 = document.getElementById("text3")

img3.addEventListener("mouseenter",()=>
{
    text3.style.display = "block"
})
img3.addEventListener("mouseleave",()=>
    {
        text3.style.display = "none"
    })



    let view1= document.querySelector(".view1")
    let website1 = document.querySelector(".website1")
    let code1 = document.querySelector(".code1")

    view1.addEventListener("click",()=>
    {
        view1.style.display = "none"
        website1.style.display = "block"
        code1.style.display = "block"
    })

    let view2= document.querySelector(".view2")
    let website2 = document.querySelector(".website2")
    let code2 = document.querySelector(".code2")

    view2.addEventListener("click",()=>
    {
        view2.style.display = "none"
        website2.style.display = "block"
        code2.style.display = "block"
    })


    let view3= document.querySelector(".view3")
    let website3 = document.querySelector(".website3")
    let code3 = document.querySelector(".code3")

    view3.addEventListener("click",()=>
    {
        view3.style.display = "none"
        website3.style.display = "block"
        code3.style.display = "block"
    })

    let view4= document.querySelector(".view4")
    let website4 = document.querySelector(".website4")
    let code4 = document.querySelector(".code4")

    view4.addEventListener("click",()=>
    {
        view4.style.display = "none"
        website4.style.display = "block"
        code4.style.display = "block"
    })


    // Code review comment -> Use descriptive variable names
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const countrySelect = document.getElementById("country");
const subjectTextarea = document.getElementById("subject");
const submitButton = document.querySelector("input[type='submit']");

// Code review comment -> Add event listener for form submission
submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    // Code review comment -> Validate form fields
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const country = countrySelect.value;
    const subject = subjectTextarea.value.trim();

    if (!firstName || !lastName || !subject) {
        alert("Please fill out all required fields.");
        return;
    }

    // Code review comment -> Perform form submission (replace with actual logic)
    console.log("Form submitted!");
    // You can add your own logic here to handle form submission to the server
});

// Code review comment -> Style the form container
const container = document.querySelector(".container");
container.style.borderRadius = "5px";
container.style.backgroundColor = "#f2f2f2";
container.style.padding = "20px";

