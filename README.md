# Agendador

[![Build Status](http://www.lantec.ufsc.br/wp-content/themes/lantec/img/logo_lantec.png)](http://www.lantec.ufsc.br/)

Sistema que possibilita a reserva de salas.

# Entidades banco de dados
  - Salas
  - Usuarios
  - Reservas


#### Salas

        Nome
        Definição

### Usuários
        Nome
        Login
        Senha
        Ocupação
        Cor

### Reservas
        Nome
        Sala
        Start
        End
        Descrição
        Usuário



# Instalação
    $ cd agendador
    $ npm install 
    $ node app

Para rodar o projeto **node app.js**
Acessar http://localhost:8080/agenda

## Bibliotecas usadas:
FullCalendar
Bootstrap
Jquery