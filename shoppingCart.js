// 1. Create Buttons for All Options

color_ids=['Customization_Option_One', 'Customization_Option_Two', 'Customization_Option_Three', 'Customization_Option_Four'];
colors=["After-School Special", "Cozy Denim", "Rainy Day", "Morning Haze"];
currentColorSelection='Customization_Option_One';
currentColor="After-School Special";

function changeColor(id) {

    let button=document.getElementById(id);
    
     button.style.background= "#99cccc";

    if (document.getElementById(currentColorSelection) != button) {

        document.getElementById(currentColorSelection).style.background= "white";

    }

    currentColorSelection=id;

    for (let i=0; i<color_ids.length; i++) {
        if (color_ids[i]==id) {
            currentColor=colors[i];
        }
    }

             
}

material_ids=['Customization_Option_Five', 'Customization_Option_Six', 'Customization_Option_Seven'];
materials=["Hypoallergenic Poly Blend", "Memory Foam", "Duck Down"];
currentMaterialSelection='Customization_Option_Five';
currentMaterial="Hypoallergenic Poly Blend";

function changeMaterial(id) {

    let button=document.getElementById(id);
    
     button.style.background="#99cccc";

    if (document.getElementById(currentMaterialSelection) != button) {

        document.getElementById(currentMaterialSelection).style.background= "white";

    }

    currentMaterialSelection=id;

    for (let i=0; i<material_ids.length; i++) {
        if (material_ids[i]==id) {
            currentMaterial=materials[i];
        }
    }
             
}





