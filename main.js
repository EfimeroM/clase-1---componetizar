import titulo from "./titulo.js"
//import footer from "./footer.js"

import { footer } from "./footer.js"

const app = () => {
  const div = document.getElementById('root')

  titulo(div)
  footer(div)
}

app()