// 1. Create Buttons for All Options

currentColorSelection='Customization_Option_One'

function changeColor(id) {

    let button=document.getElementById(id);
    
     button.style.background="#ff0000";

    if (document.getElementById(currentColorSelection) != button) {

        document.getElementById(currentColorSelection).style.background= "#fa8072";

    }

    currentColorSelection=id;
             
}





