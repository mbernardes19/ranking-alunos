const PORT = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'br836.hostgator.com.br',
    port: 3306,
    user:'instit92_matheus',
    password: 'Matheus20031997*',
    database: 'instit92_appsgames'
})

connection.connect((err)=>{
    if(err)
        console.log(err);
    else
        console.log('Conectado com BD');
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/',{extensions:['html','htm']}));

app.get('/', (req,res)=>{
    res.render('index');
})

app.get('/api/nomes', (req,res)=>{
    getNomeAlunos(connection,req,res);
})

app.get('/api/pts',(req,res)=>{
    getPtsAlunos(connection,req,res);
})

app.get('/api/projs',(req,res)=>{
    getQntProjs(connection,req,res);
})

app.get('/api/weeks',(req,res)=>{
    getQntWeeks(connection,req,res);
})

app.get('/api/medals',(req,res)=>{
    getMedals(connection,req,res);
})

app.post('/api/projeto',(req,res)=>{
    inserirProjeto(connection,req,res);
});

app.post('/api/weekly',(req,res)=>{
    inserirWeeklyChallenge(connection,req,res);
});

app.get('/api/fotos',(req,res)=>{
    getFotos(connection,req,res);
})





function getNomeAlunos(conn,req,res){
    conn.query('SELECT nome FROM Aluno;',(error,results,fields)=>{
        if(error){
            return res.json(error);
        } else {
            res.json(results);
        }
    })
};

function getPtsAlunos(conn,req,res){
    conn.query('SELECT proj1 + proj2 + proj3 + proj4 + proj5 + proj6 + proj7 + proj8 + proj9 + proj10 + proj11 + proj12 + proj13 + proj14 + proj15 + proj16 + Weekly.week1 + Weekly.week2 + Weekly.week3 + Weekly.week4 + Weekly.week5 + Weekly.week6 + Weekly.week7 + Weekly.week8 + Weekly.week9 + Weekly.week10 + Weekly.week11 + Weekly.week12 + Weekly.week13 + Weekly.week14 + Weekly.week15 + Weekly.week16 + Weekly.week17 + Medalha.p2_val + Medalha.p4_val + Medalha.p5_val + Medalha.p7_val + Medalha.p9_val + Medalha.s2_val + Medalha.s4_val + Medalha.s6_val + Medalha.s8_val + Medalha.s10_val + Medalha.c1_val + Medalha.c2_val + Medalha.c3_val + Medalha.c4_val + Medalha.c5_val AS TOTAL FROM Projeto INNER JOIN Weekly ON Projeto.id = Weekly.id INNER JOIN Medalha ON Weekly.id = Medalha.id ORDER BY TOTAL DESC;',(error,results,fields)=>{
        if(error){
            return res.json(error);
        } else {
            res.json(results);
        }
    })
};

function getQntProjs(conn,req,res){
    conn.query('SELECT projs FROM Projeto;',(error,results,fields)=>{
        if(error){
            return res.json(error);
        } else {
            res.json(results);
        }
    })
};

function getQntWeeks(conn,req,res){
    conn.query('SELECT weeklys FROM Weekly;',(error,results,fields)=>{
        if(error){
            return res.json(error);
        } else {
            res.json(results);
        }
    })
};

function getMedals(conn,req,res){
    conn.query('SELECT p2,p4,p5,p7,p9,s2,s4,s6,s8,s10,c1,c2,c3,c4,c5 FROM Medalha INNER JOIN Aluno ON Medalha.id = Aluno.id_medalha ORDER BY Aluno.pts DESC;',(error,results,fields)=>{
        if(error){
            return res.json(error);
        } else {
            res.json(results);
        }
    })
};

function inserirProjeto(conn,req,res){
    let id = req.body.nome;
    let nProj = req.body.proj;
    let pts = req.body.pts;
    conn.query(`UPDATE Projeto SET proj${nProj.toString()} = proj${nProj.toString()} + ${pts} WHERE id = ${id};`,[id,pts],(error,results,fields)=>{
        if(error){
            return res.json(error);
        } else {
            res.render('index');
        }
    })
};

function inserirWeeklyChallenge(conn,req,res){
    let id = req.body.nome;
    let nWeek = req.body.week;
    let pts = req.body.pts;
    conn.query(`UPDATE Weekly SET week${nWeek.toString()} = week${nWeek.toString()} + ${pts} WHERE id = ${id};`,[id,pts],(error,results,fields)=>{
        if(error){
            return res.json(error);
        } else {
            res.render('index');
        }
    })
};

function getFotos(conn,req,res){
    conn.query('SELECT img_ref FROM Aluno;',(error,results,fields)=>{
        if(error){
            return res.json(error);
        } else {
            res.json(results);
        }
    })
}

app.listen(PORT,()=>{console.log(`Rodando na porta ${PORT}!`)});