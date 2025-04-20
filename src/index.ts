// //------------------------- FUNÇÕES E ESCOPO --------------------------------

// //----------FUNÇÕES-------------
// function exibirMensagem(mensagem:string){
//   console.log(mensagem);


// exibirMensagem("Olá Mundo");
// }
// function somar(a:number, b:number){
//   console.log(a + b);
// }

// const resultado = somar(3, 5);
// console.log(resultado);

// function somarNParametros(...numeros:number[]){
//   let soma = 0;
//   for(let numero of numeros){
//     soma += numero
//   }
//   return soma;
// }

// console.log(somarNParametros(1,2,3,4,5,6,7,8,9))

// function saudacao(nome: string = "Visitante"): void{
//     console.log("Olá," , nome);
// }

// saudacao();
// saudacao("João");

// //versão longa
// const multiplicar = (a:number, b:number): number =>{
//   return a*b;
// };

// const soma = (a:number, b:number): number =>{
//   return a+b;
// }

// const subtração = (a:number, b:number): number =>{
//   return a-b;
// }

// const divisao = (a:number, b:number): number | string=>{
//   if(b === 0){
//     return "seu otario coloque um número válido";
//   }
//   return a/b;
  
// }

// console.log(multiplicar(1,2));
// console.log(soma(2,3));
// console.log(subtração(5,4));
// console.log(divisao(4,2));


// //versão curta
// const dobro = (x:number): number => x*2;

// //------------------------- SCOPO DE VARIAVEIS -------------------------------------

// const funcaoVazia = (a:number, b:number) => {
//   console.log("Função sem parâmetros");
//   return

//   console.log("lalalalalalalallala");
// }

// console.log(funcaoVazia(10, 0));


// //------------------- EXERCICIO 1 -------------------------
//   let readonlineSync = require("readline-sync");

// function calculadora () {
// let opcao:number=0;
// const soma = (a:number, b:number): number =>{
//   return a+b;
//   };

// const subtração = (a:number, b:number): number =>{
//   return a-b;
//   };

// const multiplicar = (a:number, b:number): number =>{
//   return a*b;
//   };
// const divisao = (a:number, b:number): number | string=>{
// if(b === 0){
//   return("O divisor nao pode ser zero amigão!");

//   }
//   return(a/b);
// }
//   do{
//     console.log("\x1bc");
//     console.log("1. soma");
//     console.log("2. subtracao");
//     console.log("3. multipplicacao");
//     console.log("4. divisao");
//     console.log("5. Sair");

//       const opcao = readonlineSync.questionInt("Faca sua escolha ");

//     switch (opcao) {
//       case 1:
//         const soma1:number = readonlineSync.questionFloat("Digite o primeiro numero para soma ");
//         const soma2:number = readonlineSync.questionFloat("Digite o segundo numero para soma ");
//           console.log("O resultado da soma é: " , soma(soma1,soma2));
//             readonlineSync.keyInPause();

//               break;
//       case 2:
//         const sub1:number = readonlineSync.questionFloat("Digite o primeiro numero para a subtracao ");
//         const sub2:number = readonlineSync.questionFloat("Digite o segundo numero para a subtracao ");
//           console.log("O resultado da subtracao é: " , subtração(sub1,sub2));
//             readonlineSync.keyInPause();
//               break;
//       case 3:
//         const multi1:number = readonlineSync.questionFloat("Digite o primeiro numero para a multiplicacao ");
//         const multi2:number = readonlineSync.questionFloat("Digite o segundo numero para a multiplicacao ");
//           console.log("O resultado da multiplicacao é: " , multiplicar(multi1,multi2));
//             readonlineSync.keyInPause();
//               break;
//       case 4:
//         const div1:number = readonlineSync.questionFloat("Digite o primeiro numero para a divisao ");
//         const div2:number = readonlineSync.questionFloat("Digite o segundo numero para a divisao ");
//             console.log("O resultado da divisao é:" , divisao(div1, div2));
//             readonlineSync.keyInPause();
//               break;
        
          
//       case 5:
//         console.log("Saindo... Volte sempre!!");
//         readonlineSync.keyInPause();
//               break;
//       default:
//           console.log("Opção inválida!");
//             readonlineSync.keyInPause();
//               break;
//     }
//     } while (opcao !== 5)

      
//   };          
//   calculadora();
  
// //---------------------------- EXERCICIO 2 ------------------------

// let readonlineSync = require("readline-sync");

// const numero = readonlineSync.questionInt("Digite o seu numero para conversão de Celcios para Fahrenheit ")
// function celciosPFahrenheit(numero:number): number {
//   return (numero * 9/5) + 32;
// }
// console.log(celciosPFahrenheit(numero));

// const numero2 = readonlineSync.questionInt("Digite o seu numero para conversão de Fahrenheit ppara Celcios ")
// function FahrenheitPCelcios(numero:number): number {
//   return (numero - 32) * 5/9;
// }
// console.log(FahrenheitPCelcios(numero));

// //------------------------ EXERCICIO 3 -----------------

// let readonlineSync = require("readline-sync");
// const numero = readonlineSync.questionInt("Digite o numero ")

// function primos(numero:number) {
//   let restante: number = numero % 2;

//   switch(restante === 0){
//     case true:
//       return "O resultado é: Par";
//     case false:
//       return "O resultado é: Impar";
//     default:
//       return "tudo errado";
//   }
// }
// console.log(primos(numero));
// const numeros = [10, 20, 30, 40];
// for(let i = 0; i < numeros.length; i++){
//   console.log("Índice: ", i, " valor: ", numeros[i]);
// }
///---------------------------------- ESTRUTURA DE DADOS -----------------------------
// const numeros = [10, 20, 30, 40];
// for (const indice in numeros){
//   console.log("Índice: ", indice, "valor: ", numeros[indice]);
// }
// const numeros = [10, 20, 30, 40];
// for(const valor of numeros){
//   console.log("valor: ", valor);
// }
// const numbers = [1, 2, 3];  ARRAY.PROTOTYPE.MAP()
// const doubled = numbers.map((n) => n * 2);
// console.log("O array com map: ",doubled);

// const numbers = [1, 2, 3, 4];  ARRAY.PROTOTYPE.FILTER()
// const evens = numbers.filter((n) => n % 2 === 0);
// console.log(evens);

// const users = [{id: 1},{id: 2}];  ARRAY.PROTORYPE.FIND(!ACHA APENAS O SOLICITADO)
// const user = users.find((u) => u.id === 2);
// console.log(user);

// const numbers = [1, 2, 3];  Array.PPROTOTYPE.SOME()/ Array.PROTOTYPR.EVERY()
// console.log(numbers.some((n) => n < 2));
// console.log(numbers.every((n) => n < 0));

// const numbers = [1, 2, 3];   ARRAY.PROTOTYPE.REDUCE()
// const sum = numbers.reduce((acc, n) => acc + n, 0);
// console.log(sum);
//------------------------- EXERCICIO 1 ------------------
// const numeros = [ 3, 4, 1, 2];
// const ordenacao = numeros.sort();
// const numero = numeros.find((u) => u === 3);
// console.log(ordenacao);
// console.log(numero);
//------------------------- EXERCICIO 2 ------------------
// let readonlineSync = require("readline-sync");
// interface usuarios {
//   nome: string,
//   idade: number,
// };

// const usuario: Array<usuarios> = [
//   {nome: "Edson Gomes", idade: 22},
//   {nome: "Cleiton Frances", idade: 14},
//   {nome: "Maria Clara", idade: 21},
// ];

// function Add (nome: string, idade: number){
//   return usuario.push({nome, idade})
// }


// let opcao: string = "";
// do{
//   console.log("\x1bc");
//   console.log("Iniciando o cadastro do NOME e IDADE:");

//   const novoNome = readonlineSync.question("Digite o seu nome e sobrenome: ");
//   const novaIdade = readonlineSync.questionInt("Digite a sua idade: ");
  
//   Add(novoNome, novaIdade);
//   console.log("Usuario adicionado com sucesso!");
//   console.log(usuario); //mostra os usuarios cadastrados

//   opcao = readonlineSync.question("Pressione Enter para adicionar mais usuario ou digite 0 para sair: ");
// // let todos = usuario.map(function(element){
// //   return `O nome do usuário é:  ${element.nome} e a idade é:  ${element.idade}`;
// // })
// // console.log(todos);
// }while(opcao !== "0");
// console.log("Programa Finalizado.");


//----------------------------- EXERCICIO 3 ----------------------
// const salario = [1000, 2000, 3000, 4000, 5500];
// const soma = salario.reduce((acc, n) => acc + n, 0);
// console.log(`A soma de todos os salarios é: ${soma}`);
//----------------------------- DESAFIO -------------------------
// let readonlineSync = require("readline-sync");
// let opcao: number = 0;
//   const produtos = [
//     { nome: "Notebook", preco: 3000, estoque: 5 },
//     { nome: "Teclado", preco: 200, estoque: 10 },
// ];
// //-------------- FUNÇÕES ------------------------------------------------------------
// function addProdutos (novoNome:string, novoPreco:number, novoEstoque:number) {
//   const valores = {
//     nome: novoNome,
//     preco: novoPreco,
//     estoque: novoEstoque,
//   }
  
//    return produtos.push(valores); 
// }
// //
// function atualizarEstoque (attEstoque:number, attNome:string) {
//   //procurar algo, uso essa linha de códigos
//   const pesquisa = produtos.find((produto) => produto.nome.toLocaleLowerCase() === attNome.toLocaleLowerCase());

//   if(pesquisa){
//       pesquisa.estoque = attEstoque;
//         console.log(`O produto ${attNome} Foi atualizado no estoque: ${attEstoque}`);
//           } else {
//             console.log(`O produto ${attNome} não foi encontrado, tente novamente`);
//           }
// }

// function filtroProdutoPreco (fNome:string, fPreco:number){
//   const filtrar = produtos.filter((produto) => produto.nome.toLocaleLowerCase() == fNome.toLocaleLowerCase() && produto.preco <= fPreco);
//     if(filtrar.length > 0){
//       console.log("Produtos encontrados");
//       filtrar.forEach (produto => {
//         console.log(`Nome: ${produto.nome}, preco: ${produto.preco}, Estoque: ${produto.estoque} `)
//       });
//     } else {
//       console.log("Produto não localizado!!");
//     }
// }

// function calcularValorTotal (){
//   let valorTotal = 0;
//   for(const produto of produtos){
//     valorTotal += produto.preco * produto.estoque;
//   }
//   return valorTotal;
// }
// //--------- MENU --------------------------------------------------------------------
//   do{
//     console.log("\x1bc");
//       console.log("Seja bem - vindo ao menu:")
//         console.log("1. Adicionar produto");
//           console.log("2. Atualizar estoque");
//         console.log("3. Filtro");
//       console.log("4. Calcular total");
//     console.log("0. Sair");

//       const opcao = readonlineSync.questionInt("Faca sua escolha ");

//     switch (opcao) {

//       case 1:
//           const addNome:string = readonlineSync.question("Adicione o nome do produto: ");
//             const addPreco:number = readonlineSync.questionFloat("Adicione o preco do produto: ");
//               const addEstoque:number = readonlineSync.questionFloat("Adicione o estoque do produto: ");
//                 addProdutos(addNome,addPreco,addEstoque);
//                   console.log(`Produto ${addNome} adicionado com sucesso!`);
//                     console.log(produtos);
//                       readonlineSync.keyInPause();
//                         break;
//       case 2:
//         const attNome: string = readonlineSync.question("Adicione o nome do produto: ");
//           const attEstoque:number = readonlineSync.questionFloat("Adicione a quantidade de estoque: ");
//             atualizarEstoque(attEstoque, attNome);
//               console.log(produtos);
//                 readonlineSync.keyInPause();
//                   break;
//       case 3:
//         const fNome:string = readonlineSync.question("Adicione o produto para a pesquisa: ");
//           const fPreco:number = readonlineSync.questionFloat("Adicione o preco para pesquisa: ");
//             filtroProdutoPreco(fNome,fPreco);
//               console.log(produtos);
//                 readonlineSync.keyInPause();
//                   break;
//       case 4:
//         const total = calcularValorTotal();
//           console.log(`O valor total do estoque é: ${total}`);
//             readonlineSync.keyInPause();
//               break;  
//       case "0":
//         console.log("Saindo... Volte sempre!!");
//           readonlineSync.keyInPause();
//               break;
//       default:
//           console.log("Opção inválida!");
//             readonlineSync.keyInPause();
//               break;
//     }
//    } while (opcao !== 0);


