const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blog-name').value.trim();
    const blogInfo = document.querySelector('#blog-info').value.trim();
  
    if (name && blogInfo) {
      const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({ name, blogInfo }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create blog');
      }
    }
  };

  document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);