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
    getPtsProjs(connection,req,res);
})

function getNomeAlunos(conn,req,res){
    conn.query('SELECT nome FROM Aluno WHERE Nome IS NOT NULL;',(error,results,fields)=>{
        if(error){
            return res.json(error);
        } else {
            res.json(results);
        }
    })
};

function getPtsAlunos(conn,req,res){
    conn.query('SELECT Aluno.pts + Medalha.p2_val + Medalha.p4_val + Medalha.p5_val + Medalha.p7_val + Medalha.p9_val + Medalha.s2_val + Medalha.s4_val + Medalha.s6_val + Medalha.s8_val + Medalha.s10_val + Medalha.c1_val + Medalha.c2_val + Medalha.c3_val + Medalha.c4_val + Medalha.c5_val AS ptsTotais FROM Aluno INNER JOIN Medalha ON Aluno.id_medalha = Medalha.id;',(error,results,fields)=>{
        if(error){
            return res.json(error);
        } else {
            res.json(results);
        }
    })
};

function getPtsProjs(conn,req,res){
    conn.query('SELECT proj FROM Aluno WHERE proj IS NOT NULL;',(error,results,fields)=>{
        if(error){
            return res.json(error);
        } else {
            res.json(results);
        }
    })
};

app.listen(PORT,()=>{console.log(`Rodando na porta ${PORT}!`)});