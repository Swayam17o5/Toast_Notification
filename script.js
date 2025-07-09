let success = document.getElementById("showToast-success");
let toastBox = document.getElementById("toast-box");
let error = document.getElementById("showToast-error");
let invalid = document.getElementById("showToast-invalid");

function createToast(msg){
    let toast = document.createElement("div")
    toast.classList.add("toast")
    toast.innerHTML = msg
    toastBox.appendChild(toast)

    if(msg.includes("error")){
        toast.classList.add("error");
    }
    if(msg.includes("invalid")){
        toast.classList.add("invalid");
    }

    setTimeout(() => {
        toast.remove()
    }, 6000);

}
success.addEventListener("click", () => {

createToast(
  `<i class="fa-solid fa-circle-check"></i> <p class="success">Success! Your action was successful.</p>`
);
});

error.addEventListener("click", () => {
createToast(
  `<i class="fa-solid fa-circle-xmark"></i><p class="error">Error! Something went wrong.</p>`
);

})

invalid.addEventListener("click", () => {
createToast(
  `<i class="fa-solid fa-circle-exclamation"></i><p class="invalid">Invalid! Please check your input.</p>`
);
})