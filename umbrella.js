const logoImage = document.getElementById('umbrellaImg')
const loaderImage = document.getElementById('loaderImg')
const uploadbutton = document.getElementById('uploadImg')
const icon = document.getElementById('icon')
const label = document.getElementById('label')
const output = document.getElementById('output')

//Change Theme Function

function handleColorChange(src, color) {
    //logoImage.style.display = "none";
    logoImage.src = "./Umbrella project assets/loader_icon.svg"
    loaderImage.style.display = "none";
    setTimeout(function () {
        loaderImage.style.display = "none";
        logoImage.src = src
        uploadbutton.style.backgroundColor = color;
    }, 3000); //display loader for 3 seconds
}

//Change Theme To Yellow 
function changeYellow() {
    handleColorChange("./Umbrella project assets/Yello umbrella.png", "rgba(255, 234, 0, 0.868)");
}
//Change Theme To Blue 
function changeBlue() {
    handleColorChange("./Umbrella project assets/Blue umbrella.png", "rgba(117, 204, 239)");
}
//Change Theme To Pink 
function changePink() {
    handleColorChange("./Umbrella project assets/Pink umbrella.png", "rgba(220, 99, 170)");
}
//Logo Image Upload Code
var loadFile = function (event) {
    var image = document.getElementById('output');
    const fileSize = event.target.files[0].size / 1024 / 1024; // in MiB
    if (fileSize > 5) {
        alert('Image size exceeds 5 MiB'); //less than 5mb
    } else {
        // Proceed further
        image.style.display = "block"
        image.src = URL.createObjectURL(event.target.files[0]);
        console.log(event.target.files[0].name)
        label.innerText = event.target.files[0].name


    }
};