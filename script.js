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
const calcula_eq2g = (){
    //delta = b*b - 4.a.c
    a = Number(a);
    b = Number(b);
    c = Number(c);
    if (sa != "+") a = -a;
    if (sb != "+") b = -b;
    if (sc != "+") c = -c;
    let delta = (b * b) - (4*a*c);
    document.getElementById("delta")
}

const set_sinal_a = () => {
    sa =document.getElementById(a).value;
}
const set_sinal_b = () => {
    sb =document.getElementById(b).value;
}
const set_sinal_c = () => {
    sc = document.getElementById(c).value;
}

const set_valor_a = () => {
    a = document.getElementById("valor_a").value;
    calcula_eq2g
}
const set_valor_a = () => {
    a = document.getElementById("valor_b").value;
    calcula_eq2g
}
const set_valor_a = () => {
    a = document.getElementById("valor_c").value;
    calcula_eq2g
}