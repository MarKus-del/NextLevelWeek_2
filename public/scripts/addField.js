document.querySelector("#add-time")
.addEventListener('click', cloneField);

function cloneField() {
    const fieldsEmpty = document.querySelectorAll(".schedule-item input")
    
    const lastField = fieldsEmpty[fieldsEmpty.length-1]
    const penultimateField = fieldsEmpty[fieldsEmpty.length-2]

    if(lastField.value=="" || penultimateField==""){
        return
    }

    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);

    const fields = newFieldContainer.querySelectorAll('input');

    fields.forEach(function(field) {
        field.value=""
    });

    document.querySelector("#schedule-items").appendChild(newFieldContainer);
}