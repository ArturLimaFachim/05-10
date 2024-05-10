
const testFor = document.getElementById('testFor');


/*testFor.addEventListener('click', () =>{
    for (let i = 1; i <=10; i++){
     console.log(i);
    }
    
});*/

/*testFor.addEventListener('click', () =>{
    for (let i = 2; i <=10; i=i+2){
        if(i%2===0) console.log(i);
    }
    
});*/

/*testFor.addEventListener('click', () =>{
    for (let i = 2; i <=10; i=i+2){
     console.log(i);
    }
    
});*/

/*testFor.addEventListener('click', () =>{
    for (let i = 10; i > 0; i--){
        console.log(i);
    }
    console.log("boom");
    
});*/
/*testWhile.addEventListener('click', () =>{
let i = 1
while (i<=10){
    console.log(i);
    i++;
}
});*/

/*testWhile.addEventListener('click', () =>{
    let resposta ;
    while(resposta!=='N' && resposta!=='S' && resposta!=='n' && resposta!=='s'){
       resposta = window.prompt('Confirme S/N');
    }

if (resposta==='S' || resposta==='s')
console.log('Você disse sim');
else 
console.log('Você disse não');
});*/
testePrimo.addEventListener('click', () =>{
    for (let i=1; i<=100; i++){
        if(ehPrimo(i)) console.log(i);
    }
});

/*function ehPrimo(numero){
    for (let i = 2; i < numero; i++){
        if(numero % i === 0 )return false;
    }
    return true;
}*/

function ehPrimo(numero){
    for (let i = 2; i < numero / 2; i++){
        if(numero % i === 0 )return false;
    }
    return true;
}