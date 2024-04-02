function getRandomCat() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        displayCat(data[0].url);
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('catImages').textContent = 'Failed to fetch cat image. Please try again.';
      });
  }
  
  function displayCat(url) {
    const image = document.createElement('img');
    image.src = url;
    image.classList.add('cat-image');
    document.getElementById('catImages').innerHTML = ''; // Clear existing images
    document.getElementById('catImages').appendChild(image);
  }