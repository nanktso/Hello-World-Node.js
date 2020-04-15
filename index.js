const http=require("http");
const contador = require("./contador");
const porta = 3000;
const ip ="localhost";

const server =http.createServer((requisicao,resultado)=>{
    console.log("recebi uma requisição");

//Bloco do Post
if (requisicao.method == "POST"){
    console.log("Foi um POST");

    var body = "";

    requisicao.on("data",(data) =>{
        body=JSON.parse(data);
    });
    
    
    
    if (requisicao.url == "/soma"){
        requisicao.on("end", () =>{
            resultado.writeHead(200,{"content-Type":"aplication/json"});
            resultado.end(JSON.stringify(body));
        });
        
    }
}

//Bloco do GET
else {
    if (requisicao.method == "GET"){
        console.log("Foi um get");
    
    if (requisicao.url=="/"){
        resultado.end("<h1>Bem vindo ao servidor!</>");
    }
    if (requisicao.url=="/easteregg") {
        resultado.end("<h1>Perdi!");
    }
    else{
        resultado.end("Rota indisponível");
    }
    
}
}
    
});

server.listen(porta,ip,()=>{
    console.log("estou escutando a porta ",porta," no ip: ",ip);
});




