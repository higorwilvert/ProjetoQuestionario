const perguntas = [
    {
      pergunta: "O que é um algoritmo?",
      resposta: [
        "Um tipo de linguagem de programação.",
        "Um conjunto de instruções ordenadas para realizar uma tarefa específica.",
        "Um tipo de variável em programação.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a principal finalidade da estrutura condicional 'if'?",
      resposta: [
        "Definir uma condição e executar um bloco de código se essa condição for verdadeira.",
        "Realizar repetições de código de forma iterativa.",
        "Definir variáveis para armazenar dados.",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma variável em programação?",
      resposta: [
        "Um conjunto de instruções.",
        "Um valor fixo que não pode ser alterado.",
        "Um local para armazenar dados que podem variar durante a execução do programa.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função principal de um loop em programação?",
      resposta: [
        "Comparar valores para igualdade.",
        "Executar um bloco de código repetidamente.",
        "Definir condições para tomada de decisões.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um array?",
      resposta: [
        "Um tipo de dado primitivo.",
        "Uma estrutura de controle de fluxo.",
        "Uma coleção de elementos, cada um identificado por um índice ou uma chave.",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em programação?",
      resposta: [
        "Um conjunto de instruções ordenadas.",
        "Um bloco de código para executar uma tarefa específica, podendo ser chamado várias vezes.",
        "Um tipo de estrutura condicional.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o objetivo do conceito de escopo em programação?",
      resposta: [
        "Determinar o tempo de execução de um programa.",
        "Definir a visibilidade e acessibilidade de variáveis em diferentes partes do código.",
        "Controlar a execução de loops em um programa.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um operador lógico?",
      resposta: [
        "Um símbolo que representa um valor fixo.",
        "Um elemento que define a estrutura de um array.",
        "Um símbolo que realiza operações de comparação entre valores booleanos.",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um código fonte?",
      resposta: [
        "Um arquivo binário executável.",
        "O resultado da compilação de um programa.",
        "Um conjunto de instruções escritas em uma linguagem de programação legível por humanos.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a principal finalidade de um comentário em código?",
      resposta: [
        "Definir uma variável.",
        "Explicar o funcionamento do código para os desenvolvedores.",
        "Controlar o fluxo de execução do programa.",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const templete = document.querySelector('template')
  
  const corretas = new Set()
  const totalPergunta = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' +  totalPergunta
  
  for (const item of perguntas)
  {
    const quizItem = templete.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.resposta)
    {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => 
      {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta)
        {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' +  totalPergunta
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }