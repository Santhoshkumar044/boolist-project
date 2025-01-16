var overlay = document.querySelector(".overlay")
var popupbox = document.querySelector(".popupbox")
var btn = document.getElementById("add-popup")

btn.addEventListener("click",function(){
    overlay.style.display = "block"
    popupbox.style.display= "block"
})

var cancelpopup = document.getElementById("cancel-book")  //JS variable name should not contain unnderscore

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display = "none"
    popupbox.style.display= "none"  
})

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdescription = document.getElementById("para")

addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `  <h2> ${booktitleinput.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdescription.value}</p>
          <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
     overlay.style.display = "none"
    popupbox.style.display= "none"
    
})

function deletebook(event){
    event.target.parentElement.remove();
}

