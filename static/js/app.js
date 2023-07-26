const inpGrp = document.querySelectorAll(".input-group")

let registed = [false, false, false, false]

inpGrp[0].addEventListener("input", (e)=>{
    let elem = document.getElementById("username")
    if (elem.value.length == 0){
        dispErr(inpGrp[0], "Empty username")
        registed[0] = false
    }else{
        dispErr(inpGrp[0], "")
        registed[0] = true
    }
})

inpGrp[1].addEventListener("input", (e)=>{
    let elem = document.getElementById("email")
    if (elem.value.length == 0){
        dispErr(inpGrp[1], "Empty Email")
        registed[1] = false
    }else if(!validateEmail(elem.value)){
        dispErr(inpGrp[1], "Invalid email format")
        registed[1] = false
    }else{
        dispErr(inpGrp[1], "")
        registed[1] = true
    }
})

inpGrp[2].addEventListener("input", (e)=>{
    let elem = document.getElementById("password")
    if (elem.value.length == 0){
        dispErr(inpGrp[2], "Empty password")
        registed[2] = false
    }else if (elem.value.length <5){
        dispErr(inpGrp[2], "Password too short")
        registed[2] = false
    }else{
        dispErr(inpGrp[2], "")
        registed[2] = true
    }
})

inpGrp[3].addEventListener("input", (e)=>{
    let elem = document.getElementById("cpassword")
    if (elem.value != document.getElementById("password").value){
        dispErr(inpGrp[3], "Password doesn't match")
        registed[3] = false
    }else{
        dispErr(inpGrp[3], "")
        registed[3] = true
    }
})

button = document.getElementById("form-submit")
button.addEventListener("click", (e)=>{
    e.preventDefault()
    let flag = true
    for (let i of registed){
        if (i==false){
            flag = false
            break
        }
    }
    if (!flag){
        alert("FORM NOT FILLED CORRECTLY")
        return
    }
    alert("YOU HAVE SUCCESSFULLY REGISTERED")
    form.submit()

})

function dispErr(inpGrpElem, msg){
    inpGrpElem.querySelector(".invalid").innerText = msg
}

let validateEmail = (email) =>{
    // Regular expression pattern for email validation
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return emailPattern.test(email);
}

  