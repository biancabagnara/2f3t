mensagem = (msg) => alert(msg);
soma = (a,b) => a+b;
sub = (a,b) => a-b;
mult = (a,b) => a*b;
div = (a,b) => a/b;
raiz = x => Math.sqrt (x);
//mensagem( soma(10,soma(8,2)));
//mensagem( soma(3, div(2,2)));
//mensagem( soma(div80,2),mult(5,3));
//mensagem( soma(sub(8,5),sub(3,70)));

let a = " ";
let b = " ";
let c = " ";
let sa = "+";
let sb = "+";
let sc = "+";
let valor = " ";
let temPonto = false;
let desligada = true;

function porcentagem(){
    if (executa == "mult"){
        b = valor;
        escrever_display(div(mult(a,b),100));
        b = "";
        valor ='';
    }

}