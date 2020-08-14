import {renderBagelType} from './BagelList/bagelList.js'
import {getUserInput} from './CreateBagel/CreateBagel.js'

const base_url = 'http://bagel-api-fis.herokuapp.com/bagels'
fetch(base_url)
    .then(response => response.json())
    .then(response => handleData(response))

function handleData(data){
   return data.forEach(el => renderBagelType(el.type, el.id))
}

const likeButton = document.getElementById('like-button')
likeButton.addEventListener('click', ()=> updateLikes())

const likes = document.getElementById('likes')

function updateLikes(){
    likes.innerHTML++
}









