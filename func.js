const Nav = document.getElementById('Nav');
const slideleft = document.getElementById('slideleft');
const slideright = document.getElementById('slideright');
function Slide(){
    Nav.style.transition = '0.3s';
    slideleft.style.display = 'none';
    slideright.style.display = 'block';
    Nav.style.left = '-16.5%';
    Nav.style.boxShadow = '-47px -11px 90px 33px rgba(0, 0, 0, 0.422)';
}
function Slideback(){
    Nav.style.transition = '0.3s';
    Nav.style.left = '0';
    slideleft.style.display = 'block';
    slideright.style.display = 'none';
    Nav.style.boxShadow = '-47px -11px 117px 115px rgba(0,0,0,0.3)';
}
function loadName(){
    let name = localStorage.getItem("fullname"); 
    document.getElementById('acc').innerHTML = "<i class='bi bi-person-circle'></i>" + name;
};
window.onload = function() {
    Slide();
    loadName();
};

document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll("a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("linkactive");
        }
    });
});

document.getElementById("Sub").addEventListener("click", function() {
    let inputs = document.querySelectorAll("#ins");
    let cleared = false;
    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            input.value = "";
            cleared = true;
        }
    });
    if(cleared){
        document.getElementById("check").style.marginLeft = "12%";
        document.getElementById("Sub").style.backgroundColor = "green";
    }else{
        alert("Please, complete the form!");
    }
});

