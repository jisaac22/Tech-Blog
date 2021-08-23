const comment = document.querySelector('.comment')

const commentHandler = () => {
   const commentEl = document.getElementById('inputArea')
   const inputEl = document.createElement("input")
   inputEl.setAttribute('type', 'text')
   commentEl.appendChild(inputEl);

}

comment.addEventListener('click', commentHandler)