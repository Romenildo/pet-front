# Aplicação de adoção de animais

Treinamento em React de uma aplicação real com autenticação e persistencia de dados no front

O Sistema consiste em um usuario criar uma conta e fazer o login, podendo adicionar animais para serem adotados por outras pessoas.
Então outra pessoa se conecta ao sistema e pode ver os animais cadastrados por outros usuarios e então marcar uma visita para adotar o animal.
Nesse sentido o sistema mantém todo o controle dos pets colocados para adoção, os pets adotados e disponiveis, podendo editalos, remover, criar, verificar se estão disponiveis, marcar agendamento e concluir adoção.

Projeto desenvoldido com as ferramentas de:
<p align="center">

  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![TS](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  
 </p>

Aprendizados:
- Estrutura de uma pagina web com header, footer, conteudo, navbar alternada entre usuario autenticado e não
- todo o controle de autenticação na página
- React router v6 da aplicação
- Registro e login de usuario no sistema com autenticação, token e persistencia dos dados
- Formularios em react
- hooks, UseEffect, useState, useAuth
- Usando Context do react
- Uso de flash Messages nas notificacões recebidas do back e erros
- Requisições post, get, delete, patch do pront para o back com autorizacao de token
- Divs condicionais
- Repetição de divs a partir de arrays
- todas as funções de registrar, login, logout, pegar lista, pegar por id, deletar, editar
- Preview das imagens no editar e cadastrar

 # Aplicação Final
 ## Tela de registro de novo usuário
 Tela de cadastro de um novo usuario com as informações de login, nesse ponto como usuário ainda nao tem uma conta,
 a barra de navegação so tem disponível login, registro e os pets que podem ser adotados caso ele crie uma conta.
 ![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/pet/registerUser.png)
 
  ## Tela de Login do usuário
  ![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/pet/loginUser.png)
  
  ## Tela de Pets disponiveis para agendar a adoção e pets ja adotados
  ![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/pet/petsLogin.png)

  ## Tela editar usuário
  A partir desse ponto usuario já fez o login e está autenticado no sistema, sua barra de navegação mudou, e tem a opçao de editar seu perfil
  ![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/pet/updatePerfil.png)
  
  ## Tela cadastrar um pet para adoção
  ![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/pet/registerPet.png)
  Após criar um pet pode exluir quanto editar suas informações, a lista dos pets que o usuario cadastrou, é diferente para cada usuario logado, cada um possui suas proprias informações, e só eles podem editar ou excluir seus próprios pets.
  ![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/pet/petcreated.png)
  
  ## Tela de Pets disponiveis para a adoção
  ![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/pet/availablePet.png)
  
  ## Tela de confirmação de marcar a visita para adoção
  ![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/pet/petadopter.png)
    
  ## Tela Minhas adoções
  Apos adotar um pet estará as informações para contato do usuário que cadastrou o pet no sistema
  ![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/pet/adoptedFim.png)
 
 
 ``` Obs: Os commits e comentários no código foram organizados com foco no aprendizado dos conteúdos para revisões futuras ```
