let  url = "https://coffee.alexflipnote.dev/random.json"

 function fetchImage() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let img = data.file;
        let container = document.getElementById('container');
        container.innerHTML = '';  
        let imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.alt = "Random Coffee Image";
        imgElement.classList.add('image');
        container.appendChild(imgElement);
    }   
    ) 
}
fetchImage() ; 
setInterval(fetchImage, 3000);
 
