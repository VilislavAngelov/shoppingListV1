const uList = document.querySelector("ul");
const inputField = document.querySelector("input");
const btn = document.querySelector("button");


btn.addEventListener ("click", () => {

    const li = document.createElement("li");
    const span = document.createElement("span");
    const btnDelete = document.createElement("button");


    li.appendChild(span);
    li.appendChild(btnDelete);

    span.textContent = inputField.value;
    btnDelete.textContent = "Delete";

    uList.appendChild(li);

    inputField.value = '';

    btnDelete.addEventListener( "click", () => {
        btnDelete.parentElement.remove();
    })

    inputField.focus();
})
