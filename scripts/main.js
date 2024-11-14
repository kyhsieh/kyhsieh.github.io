function setUserName() {
    let userName = null
    while (!userName) {
        userName = prompt("input your name:")
    }
    localStorage.setItem("qqUser", userName)
    document.querySelector("h1").textContent = "Hello " + userName
}


if (!localStorage.getItem("qqUser")) {
    setUserName()
}
else {
    const userName = localStorage.getItem("qqUser")
    document.querySelector("h1").textContent = "Hello " + userName
}

const button = document.getElementById("change-name")
button.onclick = () => {
    setUserName();
}

let changeNameButton = document.getElementById("change-title")
changeNameButton.addEventListener("click", () => {
    if (document.title === "abc")
        document.title = "def"
    else
        document.title = "abc"
})

console.log("js is loaded")
