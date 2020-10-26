console.log("from console.log");
//alert("dont you unless you must?")
//var name = "<h1>Lasse</h1>";

var myDemoElement = document.getElementById("demo");

//document.getElementById("demo").innerHTML = name;//rewrote the actual htmlfile

//myDemoElement.innerHTML = name;
//myDemoElement.style.color = "blue"

document.getElementById("changeMe").classList.add("maxW");//added class to id

//document.write("this is <b>.write</b>");


function createDivInsideDemo (addClassCss)
{
    var myBlock = document.createElement("div");
    myBlock.classList.add(addClassCss);
    
    myDemoElement.appendChild(myBlock);
}

createDivInsideDemo("chocblock")
createDivInsideDemo("greenblock")