function showMenu(){
   
    document.getElementById("nav-panel").classList.toggle("show");
}


// KOZEL

function showInfoSection (section, plus, minus){
  document.getElementById(section).classList.toggle('show');
  document.getElementById(plus).classList.toggle('show');
  document.getElementById(minus).classList.toggle('show');

}

// CAROUSEL

const kozelImages = ['kozel1.jpg', 'kozel2.jpg', 'kozel3.jpg', 'kozel4.jpg', 'kozel5.jpg']

document.getElementById('chevron-right').addEventListener('click', chevronRight);
document.getElementById('chevron-left').addEventListener('click', chevronLeft);

let currentImgNo = 0;
let currentImg = document.getElementById('kozel1');

function chevronRight(){
 
  if (currentImgNo < 4){
    currentImgNo += 1;
    currentImg.src = kozelImages[currentImgNo];
  } else {
    currentImgNo = 0;
    currentImg.src = kozelImages[currentImgNo];
  }
}

function chevronLeft(){

  if (currentImgNo != 0){
    currentImgNo -= 1;
    currentImg.src = kozelImages[currentImgNo];
  } else {
    currentImgNo = 4;
    currentImg.src = kozelImages[currentImgNo];
  }
}

// SERVICE TILE HOVER BEHAVIOUR

function tileEnter(serviceTitle, serviceText, serviceImg){
    document.getElementById(serviceTitle).style.visibility = 'hidden';
    document.getElementById(serviceText).style.visibility = 'visible';
    document.getElementById(serviceImg).classList.toggle("blur");

}

function tileLeave(serviceTitle, serviceText, serviceImg){
    document.getElementById(serviceTitle).style.visibility = 'visible';
    document.getElementById(serviceText).style.visibility = 'hidden';
    document.getElementById(serviceImg).classList.toggle("blur");
}

// SERVICE MODAL


function openModal(modal) {
  document.getElementById(modal).style.display = "block";
}

function closeModal(modal) {
document.getElementById(modal).style.display = "none";
}

window.onclick = function(event) {

  let modll = document.getElementsByClassName("modal");

  for (let i = 0; i < modll.length; i++){
    if (event.target == modll[i]) {
    modll[i].style.display = "none";
  }

  } 
 
}





// PEDAL

function lightToggle(){
    document.getElementById("light").classList.toggle("redlight");

    if (getComputedStyle(light).display === "none") {
        document.getElementById("phone-display").innerHTML = "";
        document.getElementById("email-display").innerHTML = "";
        document.getElementById("insta-display").innerHTML = "";
        document.getElementById("pedal-display-container").style.backgroundImage = 'url(display-off.webp)';
    }

    if (getComputedStyle(light).display === "block") {
        pedalOperation();
        document.getElementById("pedal-display-container").style.backgroundImage = 'url(pedal-display.webp)';
    }

    
    if (getComputedStyle(document.getElementById("pedal-display-container")).visibility === "hidden") {
    document.getElementById("pedal-display-container").style.visibility = "visible";
}

}

function pedalOperation(){

    

    const light = document.getElementById("light");
    const displayStyle = window.getComputedStyle(light).display;

    const knobValue1 = document.getElementById("knob1").value;
    const knobValue2 = document.getElementById("knob2").value;
    const knobValue3 = document.getElementById("knob3").value;

    const phoneNumber = "07379357645"
    const email = "connorwyatt98@gmail.com"
    const insta = "@wyattaudiouk"

    if (displayStyle === "block"){      

        

        if (knobValue1 >= 0 && knobValue1 <= phoneNumber.length) {
        document.getElementById("phone-display").innerHTML =  phoneNumber.slice(0, knobValue1);
        } 

        if (knobValue2 >= 0 && knobValue2 <= email.length) {
        document.getElementById("email-display").innerHTML = email.slice(0, knobValue2);
        } 

        if (knobValue3 >= 0 && knobValue3 <= insta.length) {
        document.getElementById("insta-display").innerHTML =  insta.slice(0, knobValue3);
        }        
      }   
}


function closePedalDisplay(){
    document.getElementById("pedal-display-container").style.visibility = "hidden";
}

// drag

// Make the DIV element draggable:
dragElement(document.getElementById("pedal-display-container"));
dragElement(document.getElementById("pedal-container"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    document.getElementById(elmnt.id + "header").ontouchstart = dragTouchStart;
  } else {
    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchstart = dragTouchStart;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function dragTouchStart(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
    document.ontouchend = closeDragElement;
    document.ontouchmove = elementTouchDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function elementTouchDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.touches[0].clientX;
    pos2 = pos4 - e.touches[0].clientY;
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.ontouchmove = null;
  }
}

