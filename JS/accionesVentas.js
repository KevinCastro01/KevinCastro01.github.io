let el, i;
let data = [{ id: "1", nombre: "Kevin", producto: "FIFA23", valor: "279.999", cantidad: "2", subTotal: "" , netoIva: "" },
{ id: "2", nombre: "Deiner", producto: "GTA-V", valor: "55.560", cantidad: "2", subTotal: "", netoIva: ""  },
{ id: "3", nombre: "Moises", producto: "RED DEAD REDEMPTION 2", valor: "100.000", cantidad: "2", subTotal: "", netoIva: ""  },
{ id: "4", nombre: "Nicolas", producto: "SLIME RANCHERS 2", valor: "49.999", cantidad: "2", subTotal: "", netoIva: ""  }
];
let panel = document.querySelector("#panel");


function clearForm() {
    document.querySelector("#id").value = "";
    document.querySelector("#nombre").value = "";
    document.querySelector("#producto").value = "";
    document.querySelector("#valor").value = "";
    document.querySelector("#cantidad").value = "";
    document.querySelector("#subTotal").value = "";
    document.querySelector("#netoIva").netoIva = "";
}

function valorTotal(){
    var c = document.getElementById('cantidad').value;
    var v = document.getElementById('valor').value;
    var res = c * v;
    document.getElementById('subTotal').value = res;
}

function neto1() {
    var c = document.getElementById('cantidad').value;
    var v = document.getElementById('valor').value;
    var res = c * v;
    var por = 0.19;
    var neto = res * por;
    document.getElementById('netoIva').value = neto;
}

function renderItem() {
    panel.textContent = "";
    data.forEach(x => {
        el = document.createElement("option");
        el.innerText = `${x.id} ${x.nombre} ${x.producto} ${x.valor} ${x.cantidad} ${x.subTotal} ${x.netoIva}`;
        panel.append(el);
    });
}

function create() {
    let id = document.querySelector("#id").value;
    let nom = document.querySelector("#nombre").value;
    let prod = document.querySelector("#producto").value;
    let val = document.querySelector("#valor").value;
    let can = document.querySelector("#cantidad").value;
    let sub = document.querySelector("#subTotal").value;
    let net = document.querySelector("#netoIva").value;
    data = [...data, { id: id, nombre: nom, producto: prod, valor: val , cantidad: can, subTotal: sub, netoIva: net}];
    clearForm();
    renderItem();
}

function panelClick() {
    i = panel.selectedIndex;
    document.querySelector("#id").value = data[i].id;
    document.querySelector("#nombre").value = data[i].nombre;
    document.querySelector('#producto').value = data[i].producto;
    document.querySelector('#valor').value = data[i].valor;
    document.querySelector('#cantidad').value = data[i].cantidad;
    document.querySelector('#subTotal').value = data[i].subTotal;
    document.querySelector('#netoIva').value = data[i].netoIva;
}

function update() {
    data[i].id = document.querySelector("#id").value;
    data[i].nombre = document.querySelector("#nombre").value;
    data[i].producto = document.querySelector("#producto").value;
    data[i].valor = document.querySelector("#valor").value;
    data[i].cantidad = document.querySelector("#cantidad").value;
    data[i].subTotal = document.querySelector("#subTotal").value;
    data[i].netoIva = document.querySelector("#netoIva").value;
    renderItem();
}

function deleteItem() {
    data.splice(i, 1);
    renderItem();
}

renderItem();