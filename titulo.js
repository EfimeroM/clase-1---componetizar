const titulo = (div, bool) => {
  
  const titulo = document.createElement('h1')
  titulo.innerText = "Bienvenidos a su curso de React"

  const subTitulo = document.createElement('p')
  subTitulo.innerText = "Comisión 49930"

  div.append(titulo)
  div.append(subTitulo)
}

export default titulo