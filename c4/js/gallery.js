function tab(){
    currentImage = document.getElementsByClassName("preview");
    for (let i = 0; i < currentImage.length; i++) {
        console.log("Image"+i);
        currentImage[i].setAttribute("tabindex","0");
        }
}

function upDate(previewPic){
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
       }
   
function unDo(){
    document.getElementById("image").style.backgroundImage = "url('image/plane.jpeg')";
    document.getElementById('image').innerHTML='Hover over an image below to<br>travel around the world.'
}

