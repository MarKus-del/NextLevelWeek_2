# Proffy - Trilha discovery

## Sobre a NLW

Este projeto foi desenvolvido durante a segunda versão da NLW (next level week) evento online e gratuito da RocketSeat, que tem como objetivo de ensinar a como criar uma aplicação do zero para devs iniciante na trilha discovery ou apresentar novas tecnologias utilizadas no mercado para quem já tem experiencia em desenvolvimento na trilha omnistack.

## Sobre o Proffy 

Nesta Segunda versão do NLW foi desenvolvido a aplicação Proffy onde é possivel professores se cadastrarem para divulgar suas aula, horarios, materia, preço e seu numero de contato para que o aluno possa conversar com o professor

### ATENÇÃO

esse projeto não é uma plataforma ead esta mais para divulgação de aulas online por contato.
Alem do mais esse projeto é desenvolvido durante um evento criado para ensinar ou apresentar programadores ou desenvolvedores a determinadas tecnologias então não significa que este projeto esta em produção.

Mais abaixo cito algumas coisas que aprendi durante esse evento e se por causo eu criar alguma aplicação que tem algum desses conceitos visto eu deixarei anexado na parte de projeto relacionados

## o que eu aprendi

+ npm = gerenciador de pacotes do node.js
+ npm init -y = criar un novo projeto em node.js
+ npm install = instala a biblioteca express para criação de servidores em node.js
+ npm install nodemon -D = ferramenta para desenvover aplicações em servidores sem precisar desliga e liga de novo
+ npm install nunjucks = atribuindo funcionalidades de linguaguens de programação ao html
+ npm install sqlite-async = instala o banco de dados

## desafios

- [] Página de sucesso
    + Mostar página de sucesso de cadstro do proffy
    + aguardar 2s na página e redirecionar para a listagem dos proffys
    + use setTimeout para aguardar os 2s
    + location.href=""
- [X] Correção de bugs
    + adicionar uma opção de remover horario ou verificar se o campo esta nulo
    ~~~js
        const fieldsEmpty = document.querySelectorAll(".schedule-item input")
    
    const lastField = fieldsEmpty[fieldsEmpty.length-1]
    const penultimateField = fieldsEmpty[fieldsEmpty.length-2]

    if(lastField.value=="" || penultimateField==""){
        return
    }

    ~~~