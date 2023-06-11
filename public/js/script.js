const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
     };
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#myForm');
    form.addEventListener('submit', handleFormSubmit);
    
  });
  