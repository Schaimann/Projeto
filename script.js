function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //PEGAR A TAG IMG
  const img = document.querySelector("#profile img")

  //substitiur a imagem
  if (html.classList.contains("light")) {
    // se tuver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de MaikBrito no modo Light")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Maikbrito no modo darkmode")
  }
}
