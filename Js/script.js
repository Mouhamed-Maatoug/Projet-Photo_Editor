
let saturate = document.getElementById("saturate")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let greyscale = document.getElementById("greyscale")
let blure = document.getElementById("blure")
let download = document.getElementById("download")
let reset = document.getElementById("res")
let uppload = document.getElementById("uppload")
let image = document.getElementsByTagName("img")

window.onload = function(){
    download.style.display = "none";
    reset.style.display = "none";

}



uppload.onchange = function(){
    download.style.display = "block";
    reset.style.display = "block";
    let file = new FileReader() ;
    file.readAsDataURL(uppload.files[0]);
    file.onload = function(){
        image.src = file.result ;
    
    }


}
