(function () {
    document.querySelector('body').insertAdjacentHTML('afterbegin', '<div id="flower-container"></div>');
    const flowerContainer = document.querySelector('#flower-container');
    const flowers = [
        '/Users/sevvalkutlu/Documents/GitHub/ShowerOfFlowers/flowers/cherry-blossom.png',
        '/Users/sevvalkutlu/Documents/GitHub/ShowerOfFlowers/flowers/flower.png',
        '/Users/sevvalkutlu/Documents/GitHub/ShowerOfFlowers/flowers/flower2.png',
        '/Users/sevvalkutlu/Documents/GitHub/ShowerOfFlowers/flowers/morning-glory.png',
        '/Users/sevvalkutlu/Documents/GitHub/ShowerOfFlowers/flowers/pink-cosmos.png',
        '/Users/sevvalkutlu/Documents/GitHub/ShowerOfFlowers/flowers/rose.png',
        '/Users/sevvalkutlu/Documents/GitHub/ShowerOfFlowers/flowers/sunflower.png'
    ];

    const createFlower = () => {
        const flower = document.createElement('div');
        flower.className = 'flower';
        const randomImage = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.backgroundImage = `url(${randomImage})`;
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${5 + Math.random() * 5}s`;
        flower.style.animationDelay = `${Math.random() * 5}s`;
        flowerContainer.appendChild(flower);

        flower.addEventListener('animationend', () => {
            flowerContainer.removeChild(flower);
        });
    };

    setInterval(createFlower, 500);
})();

