let i = 0;

function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

fetch('/api/nomes')
.then((response) => response.json())
.then(data => {
    let nomes = data;
    for (i; i < 3; i++) {
        let espaco = document.getElementById(`${i.toString()}`+'-nome');
        console.log(i.toString());
        console.log(espaco);
        let nom = createNode('p');
        nom.className="txt";
        nom.innerHTML = `${nomes[i].nome}`;
        append(espaco,nom);
    }
});

fetch('/api/pts')
.then((response) => response.json())
.then(data => {
    let numeros = data;
    for (i=0; i < 3; i++) {
        let pts = document.getElementById(`${i.toString()}`+'-num');
        console.log(pts);
        let num = createNode('p');
        num.className="numb";
        num.innerHTML = `${numeros[i].ptsTotais}`;
        append(pts,num);
    }
});


