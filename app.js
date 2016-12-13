var imageBox = document.getElementById('imageContainer');

var userClicks = 0;
var imagesDisplayedOnScreen = 3;

var allProducts = [];
var displayedProducts = [];

function Product(name, src, displayed, clicked) {
    this.name = name;
    this.src = src;
    this.displayed = displayed;
    this.clicked = clicked;
    allProducts.push(this);
}

new Product("bag", './imgdir/bag.jpg', 0, 0);
new Product("banana", './imgdir/banana.jpg', 0, 0);
new Product("bathroom", './imgdir/bathroom.jpg', 0, 0);
new Product("boots", './imgdir/boots.jpg', 0, 0);
new Product("breakfast", './imgdir/breakfast.jpg', 0, 0);
new Product("bubblegum", './imgdir/bubblegum.jpg', 0, 0);
new Product("chair", './imgdir/chair.jpg', 0, 0);
new Product("cthulhu", './imgdir/cthulhu.jpg', 0, 0);
new Product("duckDog", './imgdir/dog-duck.jpg', 0, 0);
new Product("dragon", './imgdir/dragon.jpg', 0, 0);
new Product("pen", './imgdir/pen.jpg', 0, 0);
new Product("pet-sweet", './imgdir/pet-sweep.jpg', 0, 0);
new Product("scissors", './imgdir/scissors.jpg', 0, 0);
new Product("shark", './imgdir/shark.jpg', 0, 0);
new Product("tauntaun", './imgdir/tauntaun.jpg', 0, 0);
new Product("unicorn", './imgdir/unicorn.jpg', 0, 0);
new Product("water-can", './imgdir/water-can.jpg', 0, 0);
new Product("wine-glass", './imgdir/wine-glass.jpg', 0, 0);

function createRandomImages() {
    if(allProducts.length < imagesDisplayedOnScreen) {
        allProducts = allProducts.concat(displayedProducts);
        displayedProducts = [];
    }
    for(var i=0; i < imagesDisplayedOnScreen; i++) {
        var image = document.createElement('img');
        var randomIndex = Math.floor(Math.random() * allProducts.length);
        image.src = allProducts[randomIndex].src;
        image.id = allProducts[randomIndex].name;
        imageContainer.appendChild(image);
        allProducts[randomIndex].displayed += 1;
        displayedProducts.push(allProducts[randomIndex]);
        allProducts.splice(randomIndex, 1);
    }
    console.log(allProducts);
    console.log(displayedProducts);
    return;
}

createRandomImages();

function clearImages() {
    imageBox.innerHTML = '';
}

function handleRandomize(event) {
    event.preventDefault();
    for(var i=0; i < displayedProducts.length; i++) {
        if(event.target.id === displayedProducts[i].name) {
            displayedProducts[i].clicked += 1;
            clearImages();
            createRandomImages();
            break;
        }
    }
}

imageBox.addEventListener('click', handleRandomize);
