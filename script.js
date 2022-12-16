const formEl = document.querySelector("form");
const tableEl = document.querySelector("table");
const tbodyEl = document.querySelector("#print");


formEl.addEventListener("submit", onAddWebsite);
tableEl.addEventListener("click", onDeleteRow);


function onAddWebsite(e) {
    e.preventDefault();
    const age = document.getElementById("age").value;
    const nameE = document.getElementById("name").value;

    tbodyEl.innerHTML += `
        <tr>
            <td>${nameE}</td>
            <td>${age}</td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr>`;
}

function onDeleteRow(e) {
    // console.log(!e.target.classList.contains("deleteBtn"));
    if (!e.target.classList.contains("deleteBtn")) {
        return;
    } else {
        const btn = e.target;
        btn.closest("tr").remove();
    }
}











// const nameEle = document.querySelector("#name");
// const btn = document.querySelector("#submit");
// const dummy = document.querySelector("#dummy")
// const dlt = document.querySelector("#delet");


// btn.addEventListener("click", () => {

//     const tableEle = document.createElement("table");
//     const tableRow = document.createElement("tr");
//     const tableClm = document.createElement("td");

//     dummy.innerText = nameEle.value;


//     dummy.appendChild(tableEle);
//     tableEle.appendChild(tableRow);
//     tableRow.appendChild(tableClm);

// })
// dlt.addEventListener("click", () => {
// })
