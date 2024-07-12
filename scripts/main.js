function setUserName() {
    let userName = null
    while (!userName) {
        userName = prompt("input your name:")
    }
    localStorage.setItem("qqUser", userName)
    document.querySelector("h1").textContent = "Hello " + userName
}



let hedingText = document.querySelector("h1")
hedingText.onclick = () => {
    alert("I told you don't click on me :P")
}

if (!localStorage.getItem("qqUser")) {
    setUserName()
}
else {
    const userName = localStorage.getItem("qqUser")
    document.querySelector("h1").textContent = "Hello " + userName
}

let button = document.querySelector("button")
button.onclick = () => {
    setUserName()
}
