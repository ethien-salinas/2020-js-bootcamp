const title = document.querySelector('h1')
const n1 = document.querySelector('#primer-numero')
const n2 = document.querySelector('#segundo-numero')
const sumButtom = document.querySelector('#sum-button')
const resultNode = document.querySelector('#result')

// sum operation
sumButtom.addEventListener('click', function () {
  // números transformados a enteros
  const n1Int = parseInt(n1.value)
  const n2Int = parseInt(n2.value)
  // operación
  const result = n1Int + n2Int
  console.log(result)

  //creación de nodo <span>{resultado}<span>
  const textContent = document.createTextNode(result)
  const spanElement = document.createElement('span')
  spanElement.appendChild(textContent)

  // eliminamos resultado previo
  if(resultNode.childNodes.length > 3){
    resultNode.removeChild(resultNode.childNodes[3])
  }

  resultNode.appendChild(spanElement)
  return result
})

// JS Mouse events
title.addEventListener('click', function () {
  console.log('click sobre el título')
})
