//------------------ VARIAVEIS GLOBAIS -----------------------------------------------------------
let readonlineSync = require("readline-sync");
let opcao = 0;



//----------- FUNÇÕES -------------------------
// GERA UM NUMERO INTEIRO ALEATORIO 
function GerarNumeros(min:number, max:number){
    return Math.floor(Math.random() * (max - min + 1) + min); 
}



//-------------- MENU -----------------------------------------------------------------------------


// Para criar um menu, usei um do - while como loop
do{

    console.log("\x1bc"); //Nesta linha apaga tudo do terminal assim que inicia o loop
        console.log("Seja bem - vindo ao menu:"); //Nas linhas seguintes vai mostrar no terminal as opções de niveis que o jogador vai poder escolher
            console.log("1. Nivel facil");
                console.log("2. Nivel medio");
            console.log("3. Nivel Dificil");
        console.log("0. Sair");



            const jogador = readonlineSync.questionInt("Faca sua escolha "); //Variavel que recebe a escolha do jogador


        //Neste bloco de código uso um switch - case para controle de fluxo que pega a escolha do jogador (armazenada em 'jogador') e direciona para o case correspondente.
        switch (jogador) {

            // ------------------- NIVEL FÁCIL ---------------------------------------------------------------------------------------
            case 1:

                //Neste bloco esta algumas variaveis que ajudam no case 1
                let tentativaAtualNF = 1; //Tentativa inicia no 1
                const maxTentativasNF = 5; //Max de tentativas são 5
                let acertouNF = false; //Ajuda na verificação se o jogador acertou ou não (inicia com false para sinalizar que ele não acertou!!)
                const numeroSecretoNF = GerarNumeros(1,5); //Cria uma variavel para armazenar a função, ajuda a não ficar chamando a função


                    do{ //loop de como vai funcionar a verificação de todo o case 1

                        const escolha = readonlineSync.questionInt("Insira um numero inteiro entre 1 e 5 para a adivinhacao: "); //Cria uma variavel que pega o numero sujerido pelo jogador
                            readonlineSync.keyInPause(); //Pausa para o jogador ver sua escolha e em seguida

                                if (escolha == numeroSecretoNF){ //Faz verificação se escolha é igual ao numeroSecretoNF, se for imprime este bloco de código
                                    console.log(`Parabens voce acertou! O numero secreto era: ${numeroSecretoNF}`);
                                    console.log(`Tentativas: ${tentativaAtualNF}/${maxTentativasNF}`);
                                        acertouNF = true;
                                        break; // SAIR DO LOOP APÓS ACERTAR
                                }


                                if (escolha > numeroSecretoNF) { //Verifica se escolha é maior que o numeroSecretoNF, se for, imprime o bloco de codigo
                                    console.log("Tente novamente com menor numero");

                                } else  { //Se for menor, imprime o bloco de código
                                    console.log("Tente novamente com maior numero");
                                }

                                    console.log(`Tentativas: ${tentativaAtualNF}/${maxTentativasNF}`); //Mostra as tentativas e o max de tentativas uma do lado da outra
                                        
                                    tentativaAtualNF++; //Adiciona +1 na variavel a cada loop, tanto no acerto, como no erro


                    } while (tentativaAtualNF <= maxTentativasNF && !acertouNF); //Do - while finaliza se a variavel tentativaAtualNF for menor igual ao maximo e se o acertouNF for diferente de true
            
                                    if(acertouNF) { // Verifica se o jogador acertou
                                        let mudarNivel = readonlineSync.question("Deseja mudar de nivel? (sim/nao): "); //Cria uma variavel que recebe a resposta do jogador se quer mudar de nivel
                                            
                                            if (mudarNivel.toLowerCase() == "sim"){ //Se a resposta for sim, o jogador e direcionado para o menu, se não, finaliza o jogo
                                                console.log("Redirecionando para o menu!");
                                                    readonlineSync.keyInPause();
                                                        opcao = -1;

                                            } else {
                                                console.log("Voltando ao menu.");
                                                    readonlineSync.keyInPause();
                                                        opcao = -1;
                                            }

                                    } else { // Se o loop terminou por falta de tentativas
                                        console.log(`Suas tentativas acabaram! O numero secreto era: ${numeroSecretoNF}`);
                                        console.log("Direcionando para o menu, para nova tentativa!");
                                            readonlineSync.keyInPause();
                                                opcao = -1;
                                    }

                break;


        // ------------------- NIVEL MÉDIO ---------------------------------------------------------------------------------------
            case 2:

                //Neste bloco esta algumas variaveis que ajudam no case 2
                let tentativaAtualNM = 1; //Tentativa inicia no 1
                const maxTentativasNM = 3; //Max de tentativas são 3
                let acertouNM = false; //Ajuda na verificação se o jogador acertou ou não (inicia com false para sinalizar que ele não acertou!!)
                const numeroSecretoNM = GerarNumeros(1,10); //Cria uma variavel para armazenar a função, ajuda a não ficar chamando a função
                    
                    do{ //loop de como vai funcionar a verificação de todo o case 2

                        const escolha = readonlineSync.questionInt("Insira um numero inteiro entre 1 e 10 para a adivinhacao: "); //Cria uma variavel que pega o numero sujerido pelo jogador
                            readonlineSync.keyInPause(); //Pausa para o jogador ver sua escolha e em seguida

                                if (escolha == numeroSecretoNM){ //Faz verificação se escolha é igual ao numeroSecretoNM, se for imprime este bloco de código
                                    console.log(`Parabens voce acertou! O numero secreto era: ${numeroSecretoNM}`);
                                    console.log(`Tentativas: ${tentativaAtualNM}/${maxTentativasNM}`);
                                        acertouNM = true;
                                        break; //SAIR DO LOOP APÓS ACERTAR
                                }


                                if (escolha > numeroSecretoNM) { //Verifica se escolha é maior que o numeroSecretoNM, se for, imprime o bloco de codigo
                                    console.log("Tente novamente com menor numero");

                                } else { //Se for menor, imprime o bloco de código
                                    console.log("Tente novamente com maior numero");
                                }

                                    console.log(`Tentativas: ${tentativaAtualNM}/${maxTentativasNM}`); //Mostra as tentativas e o max de tentativas uma do lado da outra
                                        
                                    tentativaAtualNM++; //Adiciona +1 na variavel a cada loop, tanto no acerto, como no erro


                    } while (tentativaAtualNM <= maxTentativasNM && !acertouNM); //Do - while finaliza se a variavel tentativaAtualNM for menor igual ao maximo e se o acertouNM for diferente de true

                                if (acertouNM) { // Verifica se o jogador acertou APÓS o loop
                                    let mudarNivel = readonlineSync.question("Deseja mudar de nivel? (sim/nao): "); //Cria uma variavel que recebe a resposta do jogador se quer mudar de nivel
                                        
                                        if (mudarNivel.toLowerCase() == "sim"){ //Se a resposta for sim, o jogador e direcionado para o menu, se não, finaliza o jogo
                                            console.log("Redirecionando para o menu!");
                                                readonlineSync.keyInPause();
                                                    opcao = -1;

                                        } else {
                                            console.log("Voltando ao menu.");
                                                readonlineSync.keyInPause();
                                                    opcao = -1;
                                        }

                                } else { // Se o loop terminou por falta de tentativas
                                    console.log(`Suas tentativas acabaram! O numero secreto era: ${numeroSecretoNM}`);
                                    console.log("Direcionando para o menu, para nova tentativa!");
                                        readonlineSync.keyInPause();
                                            opcao = -1;
                                }

                        break;


        // ------------------- NIVEL DIFICIL ---------------------------------------------------------------------------------------
            case 3:

                //Neste bloco esta algumas variaveis que ajudam no case 3
                let tentativaAtualND = 1; //Tentativa inicia no 1
                const maxTentativasND = 3; //Max de tentativas são 
                let acertouND = false; //Ajuda na verificação se o jogador acertou ou não (inicia com false para sinalizar que ele não acertou!!)
                const numeroSecretoND = GerarNumeros(1,50); //Cria uma variavel para armazenar a função, ajuda a não ficar chamando a função
                    
                    do{ //loop de como vai funcionar a verificação de todo o case 3

                        const escolha = readonlineSync.questionInt("Insira um numero inteiro entre 1 e 50 para a adivinhacao: "); //Cria uma variavel que pega o numero sujerido pelo jogador
                            readonlineSync.keyInPause(); //Pausa para o jogador ver sua escolha e em seguida

                                if (escolha == numeroSecretoND){ //Faz verificação se escolha é igual ao numeroSecretoND, se for imprime este bloco de código
                                    console.log(`Parabens voce acertou! O numero secreto era: ${numeroSecretoND}`);
                                    console.log(`Tentativas: ${tentativaAtualND}/${maxTentativasND}`);
                                        acertouND = true;
                                        break; //SAIR DO LOOP APÓS ACERTAR
                                }


                                if (escolha > numeroSecretoND) { //Verifica se escolha é maior que o numeroSecretoND, se for, imprime o bloco de codigo
                                    console.log("Tente novamente com menor numero");
                                    
                                } else { //Se for menor, imprime o bloco de código
                                    console.log("Tente novamente com maior numero");
                                }

                                    console.log(`Tentativas: ${tentativaAtualND}/${maxTentativasND}`); //Mostra as tentativas e o max de tentativas uma do lado da outra
                                        
                                    tentativaAtualND++; //Adiciona +1 na variavel a cada loop, tanto no acerto, como no erro

                    } while (tentativaAtualND <= maxTentativasND && !acertouND); //Do - while finaliza se a variavel tentativaAtualND for menor igual ao maximo e se o acertouND for diferente de true

                            if(acertouND) { // Verifica se o jogador acertou APÓS o loop
                                let mudarNivel = readonlineSync.question("Deseja mudar de nivel? (sim/nao): "); //Cria uma variavel que recebe a resposta do jogador se quer mudar de nivel
                                    
                                    if (mudarNivel.toLowerCase() == "sim"){ //Se a resposta for sim, o jogador e direcionado para o menu, se não, finaliza o jogo
                                        console.log("Redirecionando para o menu!");
                                            readonlineSync.keyInPause();
                                                opcao = -1;
                                        
                                    } else {
                                        console.log("Voltando ao menu.");
                                            readonlineSync.keyInPause();
                                                opcao = -1;
                                    }
                                
                            } else { // Se o loop terminou por falta de tentativas
                                console.log(`Suas tentativas acabaram! O numero secreto era: ${numeroSecretoND}`);
                                console.log("Direcionando para o menu, para nova tentativa!");
                                    readonlineSync.keyInPause();
                                        opcao = -1;
                            }
                break;

 //--------------------------- SAIR -------------------------------------------------------------               
        case 0:

            //case 0, ao ser escolhido impprime o "Volte sempre" e finaliza o jogo!
            console.log("Volte sempre!!");
                opcao = 0;
                    break;
                
                        }

} while (opcao !== 0); //Condição final do - while que finaliza após o jogador clicar em 0 para sair
