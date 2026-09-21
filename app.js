const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.render('index',{
    });
});

app.get('/login', (req, res)=>{
    res.render('login',{
    });
});

app.get('/cadastro', (req, res)=>{
    res.render('cadastro',{
    });
});

app.use((req, res) => {
    res.status(404);
    res.render('404');
});

app.use((err, req, res, next)=>{
    console.error(err.message);
    res.status(500);
    res.render('500');
});

app.listen(PORT, ()=>{
    console.log(`O servidor está rodando na porta ${PORT}`);
})



