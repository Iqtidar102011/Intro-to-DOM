const sections = document.querySelectorAll("section");
for (const section of sections) {
    section.style.border = "2px solid red";
    section.style.marginBottom = "5px";
    section.style.borderRadius = "5px"
    section.style.paddingLeft = "30px"
    section.style.backgroundColor = "lightgray"

}
const placesContainer = document.getElementById("places_container");
placesContainer.style.backgroundColor = "skyblue"

// add css class by js
const fruitsContainer = document.getElementById("fruits_container");
fruitsContainer.classList.add("crimson_bg");
