let el, i;
let data = [
  { firstname: "Mauricio", lastname: "Sevilla", documentoPersona: '11111', celpersona: '300000000' },
  { firstname: "Jorge", lastname: "Barón", documentoPersona: '22222', celpersona: '300000000' },
  { firstname: "Andrés", lastname: "Espinoza", documentoPersona: '33333', celpersona: '300000000' },
  { firstname: "Rafael", lastname: "Pérez", documentoPersona: '44444', celpersona: '300000000' }
];
let panel = document.querySelector("#panel");


function clearForm() {
  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
  document.querySelector("#id").value = "";
  document.querySelector("#cel").value = "";
}

function renderItem() {
  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.firstname} ${x.lastname} ${x.documentoPersona} ${x.celpersona}`;
    panel.append(el);
  });
}

function create() {
  let fn = document.querySelector("#fname").value;
  let ln = document.querySelector("#lname").value;
  let id = document.querySelector("#id").value;
  let cel = document.querySelector("#cel").value;
  data = [...data, { firstname: fn, lastname: ln, documentoPersona: id, celpersona: cel }];
  clearForm();
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#fname").value = data[i].firstname;
  document.querySelector("#lname").value = data[i].lastname;
  document.querySelector('#id').value = data[i].documentoPersona;
  document.querySelector('#cel').value = data[i].celpersona;
}

function update() {
  data[i].firstname = document.querySelector("#fname").value;
  data[i].lastname = document.querySelector("#lname").value;
  data[i].documentoPersona = document.querySelector("#id").value;
  data[i].celpersona = document.querySelector("#cel").value;
  renderItem();
}

function deleteItem() {
  data.splice(i, 1);
  renderItem();
}

renderItem();