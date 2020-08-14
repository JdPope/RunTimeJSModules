import {renderBagelType} from './bagelList.js'

function createUpdateButton(li){
    const updateButton = document.createElement('button')
    updateButton.innerText = 'update'
    li.append(updateButton)
    updateButton.addEventListener('click',() => createUpdateField(event.target.parentNode) )
}

function createUpdateField(li){
    li.innerHTML = `
        <form id='update-form'>
            <input name='update' value='${li.innerText.slice(0, -12)}'>
            <input type='submit'>
        </form>
    `
    const updateForm = document.getElementById('update-form')
    updateForm.addEventListener('submit', (event) => {
        event.preventDefault()
        captureUserUpdateInput(updateForm)
    })
}


function captureUserUpdateInput(form){
    const newFormData = new FormData(form)
    const input = newFormData.get('update')
    renderBagelType(input, form.parentNode.id)
}


export {createUpdateButton}