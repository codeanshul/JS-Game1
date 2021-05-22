var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },400);
}
var checkdead = setInterval(() => {
    var chartop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft =  parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft>0 && blockleft<60 && chartop>=340)
    {
        block.style.animation = "none";
        // block.style.display = "none";
        alert("U Lose");
    }
},10);
