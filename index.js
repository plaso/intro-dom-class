document.title = 'DOM intro'


// document.getElement by ID - para localizar nodos usando su id

const nowPlaying = document.getElementById('now-playing')

// console.log(nowPlaying)
// console.log(nowPlaying.textContent)

nowPlaying.textContent = 'Sonando: Billie Jean'
nowPlaying.innerHTML = 'Sonando: <strong>Hey Jude</strong>'

const title = document.getElementById('playlist-title')
title.textContent = 'IH Playlist'

// mixed selectors

const songs = document.getElementsByClassName('song')

// console.log(songs)
// console.log(songs.length)
// console.log(songs[0].textContent)

const favoriteSongs = document.getElementsByClassName('song favorite')
//console.log(favoriteSongs)

const liElements = document.getElementsByTagName('li')
//console.log(liElements)

for (let song of songs) {
  //console.log(song.textContent)
}

const titles = Array.from(songs).map(song => song.textContent)
//console.log(titles)

// querySelector y querySelectorAll

// console.log(document.querySelector('#playlist-title'))
// console.log(document.querySelector('.song'))
// console.log(document.querySelector('.song.favorite'))
// console.log(document.querySelector('#song-list li:last-child'))

const songsWithQuerySelectorAll = document.querySelectorAll('#song-list .song')

// songsWithQuerySelectorAll.forEach(song => song.textContent = song.textContent.toUpperCase())

// Style y classNames/classList

title.style.backgroundColor = 'black'
title.style.color = 'white'
title.style.padding = '8px'
title.style.borderRadius = '4px'

const firstSong = document.querySelector('.song')

// console.log('parent node', firstSong.parentNode)

firstSong.classList.add('playing')
//console.log(firstSong.classList.contains('playing'))
firstSong.classList.remove('playing')
firstSong.classList.toggle('playing')
firstSong.classList.toggle('playing')
firstSong.classList.toggle('playing')
firstSong.classList.toggle('playing')
firstSong.classList.toggle('playing')

firstSong.className = 'song'

const list = document.getElementById('song-list')

// QUE DEVUELVE
// console.log('--------------------------')
// console.log(document.getElementById('song-list').children.length)
// console.log(document.querySelector('.song').textContent)
// console.log(document.querySelectorAll('.favorite').length)
// console.log(document.getElementById('#now-playing'))



// ATRIBUTOS

const link = document.getElementById('artist-link')

console.log(link.getAttribute('href'))
link.setAttribute('href', 'https://en.wikipedia.org/wiki/Queen_(band)')
link.setAttribute('target', '_blank')
console.log(link.hasAttribute('target'))
link.removeAttribute('target')
console.log(link.getAttribute('target'))

const songInput = document.getElementById('new-song')

songInput.placeholder = 'Escribe un título'
songInput.disabled = true
songInput.disabled = false

// Crear elementos

const songList = document.getElementById('song-list') // Parent

// const newSong = document.createElement('li')
// newSong.textContent = 'Imagine'
// newSong.classList.add('song')

// console.log(newSong)
// songList.appendChild(newSong)

// const newSong2 = document.createElement('li')
// newSong2.textContent = 'New song'
// newSong2.classList.add('song')

// songList.insertBefore(newSong2, songList.children[1])
// songList.prepend(newSong2)
function deleteSong() {
  this.parentNode.remove()
}

function addSong(title) {
  const newSong = document.createElement('li')
  newSong.textContent = title
  newSong.classList.add('song')
  songList.appendChild(newSong)

  const newSongDeleteBtn = document.createElement('button')
  newSongDeleteBtn.textContent = 'Borrar'
  newSongDeleteBtn.onclick = deleteSong

  newSong.append(newSongDeleteBtn)
  return newSong
}

const titleToAdd = ['Imagine', 'Yesterday', 'Title 3']

titleToAdd.forEach(title => addSong(title))

// Borrar

songList.lastElementChild.remove()
// document.querySelector('.song.favorite').remove()

// createElement -> appendChild al padre | Borrar = remove() del node de HTML

// CREAR EVENTOS - AddEventListener

// Añadir el comportamiento de que si clickas una cancion se convierta en favorita

function toggleFavorite(event) {
  const node = event.currentTarget


  if (node.classList.contains('favorite')) {
    // if (node.textContent.includes('❤️')) {
    node.innerHTML = node.innerHTML.replace('❤️', '')
  } else {
    node.innerHTML = node.innerHTML + '❤️'
  }
  node.classList.toggle('favorite')
}

const songsToHandle = document.querySelectorAll('.song')

songsToHandle.forEach(song => {
  // song.style.cursor = 'pointer'
  song.addEventListener('click', toggleFavorite) // Esta function va a recibir una cosa que se llama Event
})

const addBtn = document.getElementById('add-song-btn')

// node.addEventListener()

// Añadir con formulario

const newSongInput = document.getElementById('new-song')

addBtn.addEventListener('click', function (event) {
  if (newSongInput.value) {
    const newSongNode = addSong(newSongInput.value) // addSong me devuelve el nodo, lo cual me sirve para darle el evento
    newSongNode.addEventListener('click', toggleFavorite) // reutilizo la function para darle el listener
    newSongInput.value = ''
  } else {
    alert('Tienes que añadir el titulo de la cancion')
  }
})

// addBtn.onclick = function () {
//   console.log('click')
// }
// addBtn.onclick = function (event) {
//   console.log(this)
//   console.log('click2', event)
// }

// DELETE
// La function deleteSong esta en linea 116

const deleteSongBtns = document.querySelectorAll('.song button')

deleteSongBtns.forEach(btn => {
  btn.addEventListener('click', deleteSong)
})