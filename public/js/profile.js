 const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blog');
      }
    }
  };
  

  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);


const comment = document.querySelector('.comment')

const commentHandler = () => {
   const commentEl = document.getElementById('inputArea')
   const inputEl = document.createElement("input")
   inputEl.setAttribute('type', 'text')
   commentEl.appendChild(inputEl);

}

comment.addEventListener('click', commentHandler)