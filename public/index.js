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

fetch('/api/fotos')
.then((response) => response.json())
.then(data => {
    let fotos = data;
    for (i=0; i < 3; i++) {
        let moldura = document.getElementById(`${i.toString()}`+'-img');
        let foto = createNode('img');
        foto.className="img";
        foto.src = `${fotos[i].img_ref}`;
        console.log(fotos);
        console.log(foto);
        append(moldura,foto);
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
        num.innerHTML = `${numeros[i].TOTAL}`;
        append(pts,num);
    }
});

fetch('/api/projs')
.then((response) => response.json())
.then(data => {
    let projs = data;
    for (i=0; i < 3; i++) {
        let qnt = document.getElementById(`${i.toString()}`+'-proj');
        console.log(qnt);
        let proj = createNode('p');
        proj.className="projs";
        proj.innerHTML = 'Projetos entregues: '+`${projs[i].projs}`;
        append(qnt,proj);
    }
});

fetch('/api/weeks')
.then((response) => response.json())
.then(data => {
    let weeklys = data;
    for (i=0; i < 3; i++) {
        let qnt = document.getElementById(`${i.toString()}`+'-week');
        console.log(qnt);
        let week = createNode('p');
        week.className="weeks";
        week.innerHTML = 'Weekly Challenges entregues: '+`${weeklys[i].weeklys}`;
        append(qnt,week);
    }
});


fetch('/api/medals')
.then((response) => response.json())
.then(data => {
    let medals = data;
    for (i=0; i < 3; i++) {
        let mRow = document.getElementById(`${i.toString()}`+'-mrow');
        
            if(medals[i].p2===1){
                let imgP2 = createNode('img');
                imgP2.className="medal";
                imgP2.src='/p2.png';
                append(mRow,imgP2);
            }
            if(medals[i].p4===1){
                let imgP4 = createNode('img');
                imgP4.className="medal";
                imgP4.src='/p4.png';
                append(mRow,imgP4);
            }
            if(medals[i].p5===1){
                let imgP5 = createNode('img');
                imgP5.className="medal";
                imgP5.src='/p5.png';
                append(mRow,imgP5);
            }
            if(medals[i].p7===1){
                let imgP7 = createNode('img');
                imgP7.className="medal";
                imgP7.src='/p7.png';
                append(mRow,imgP7);
            }
            if(medals[i].p9===1){
                let imgP9 = createNode('img');
                imgP9.className="medal";
                imgP9.src='/p9.png';
                append(mRow,imgP9);
            }
            if(medals[i].s2===1){
                let imgS2 = createNode('img');
                imgS2.className="medal";
                imgS2.src='/s2.png';
                append(mRow,imgS2);
            }
            if(medals[i].s4===1){
                let imgS4 = createNode('img');
                imgS4.className="medal";
                imgS4.src='/s4.png';
                append(mRow,imgS4);
            }
            if(medals[i].s6===1){
                let imgS6 = createNode('img');
                imgS6.className="medal";
                imgS6.src='/s6.png';
                append(mRow,imgS6);
            }
            if(medals[i].s8===1){
                let imgS8 = createNode('img');
                imgS8.className="medal";
                imgS8.src='/s8.png';
                append(mRow,imgS8);
            }
            if(medals[i].s10===1){
                let imgS10 = createNode('img');
                imgS10.className="medal";
                imgS10.src='/s10.png';
                append(mRow,imgS10);
            }
            if(medals[i].c1===1){
                let imgC1 = createNode('img');
                imgC1.className="medal";
                imgC1.src='/c1.png';
                append(mRow,imgC1);
            }
            if(medals[i].c2===1){
                let imgC2 = createNode('img');
                imgC2.className="medal";
                imgC2.src='/c2.png';
                append(mRow,imgC2);
            }
            if(medals[i].c3===1){
                let imgC3 = createNode('img');
                imgC3.className="medal";
                imgC3.src='/c3.png';
                append(mRow,imgC3);
            }
            if(medals[i].c4===1){
                let imgC4 = createNode('img');
                imgC4.className="medal";
                imgC4.src='/c4.png';
                append(mRow,imgC4);
            }
            if(medals[i].c5===1){
                let imgC5 = createNode('img');
                imgC5.className="medal";
                imgC5.src='/c5.png';
                append(mRow,imgC5);
            }
    }
});
