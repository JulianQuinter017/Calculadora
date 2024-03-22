
const displaySuperior = document.querySelector("#displaySuperior");
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(item => {
     
    item.onclick = () => {

        if(item.id == "clear"){

            display.innerText = "";
            displaySuperior.innerText = "";
        }
        else if(item.id == "backspace"){

            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length-1);
        }
        else if(item.id == "equal" && display.innerText != ""){

            let numero2 = display.innerText;
            let operacion = displaySuperior.innerText + display.innerText;
            display.innerText = eval(operacion);
            displaySuperior.innerText += numero2 + "=";
        }
        else if(item.id == "equal" && display.innerText == ""){

            display.innerText = "Null"
            setTimeout(() => (display.innerText = ""), 2000);
        }
        else if(item.id == "+"){

            displaySuperior.innerText = display.innerText + "+";
            display.innerText = "";
        }
        else if(item.id == "-"){

            displaySuperior.innerText = display.innerText + "-";
            display.innerText = "";
        }
        else if(item.id == "*"){

            displaySuperior.innerText = display.innerText + "*";
            display.innerText = "";
        }
        else if(item.id == "/"){

            displaySuperior.innerText = display.innerText + "/";
            display.innerText = "";
        }
        else{

            if(display.innerText.length < 12){

                display.innerText += item.id;
            }
            else{
                
            }
        }
        
    };
});