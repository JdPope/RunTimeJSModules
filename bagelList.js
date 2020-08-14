import {createDeleteButton} from './delete.js'
import {createUpdateButton} from './updateBagel.js'

const bagelUl = document.getElementById('bagel-ul')

function renderBagelType(bagel, id){
    const li = document.createElement('li')
    li.innerText = bagel
    li.id = id
    bagelUl.appendChild(li)
    createDeleteButton(li)
    createUpdateButton(li)
}

export {renderBagelType}