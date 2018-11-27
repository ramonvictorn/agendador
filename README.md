
# Agendador

  

[![Build Status](http://www.lantec.ufsc.br/wp-content/themes/lantec/img/logo_lantec.png)](http://www.lantec.ufsc.br/)

  

Sistema desenvolvido para reserva de salas para o Laboratório de Novas tecnologia - Ufsc

  

# Database entities


### Usuários

name 
email 
password
role

 

### event
agenda
title
start
end
finalidade
user

  

# Instalation and start

$ cd agendador

$ npm install

$ for run in **development mode**:  npm run start-dev

	
	$ for run in production: it's necessary run grunt and after
	  npm run start-prod

 

Acess http://localhost:8080/ for see

  

## Bibliotecas usadas:

FullCalendar

Bootstrap

Jquery

## Requirements

Nodejs - version 8.10 recommended
MongoDb