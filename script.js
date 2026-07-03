const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value.trim() === ""){
        alert("You must write something");
    }
    else{
        let list = document.createElement("li");
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        list.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        
    }
    
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        
    }
    saveData()
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

const toggleBtn = document.getElementById("toggle");
const image = document.querySelector(".darkMode")
toggleBtn.addEventListener('click', function(event){
    document.body.classList.toggle("darkMode");
    if(document.body.classList.contains("darkMode")){
        image.src = "images/icons8-light-mode-78.png"
    }
    else{
        image.src = "images/icons8-dark-mode-50.png"
        
    }
    saveMode()
}
)
function saveMode(){
    if(document.body.classList.contains("darkMode")){
       localStorage.setItem("mode", "dark")
    }
    else{
        localStorage.setItem("mode", "light")
    }  
}
const savedMode = localStorage.getItem("mode");
if(savedMode === "dark") {
    document.body.classList.add("darkMode");
    image.src = "images/icons8-light-mode-78.png"   
}
else{
    image.src = "images/icons8-dark-mode-50.png"  
}
