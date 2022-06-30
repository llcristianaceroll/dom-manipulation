/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app"
// const url = "https://platzi-avo.vercel.app/api/avo";

const appNode = document.querySelector('#app')

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: "USD",
    }).format(price)
    return newPrice;
};
 

window.fetch(`${baseUrl}/api/avo`)
.then((response) => response.json())
.then((responseJSON) => {
    // console.log(responseJSON);
    const allItems = [];
    responseJSON.data.forEach((item) => {
    // console.log(element.name);

    const image = document.createElement('img');
    image.src = `${baseUrl}${item.image}`;
    image.className = 'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'
    
    const title = document.createElement('h2');
    title.textContent = item.name;
    // title.style = 'font-size: 2rem';
    // title.style.fontSize = '2rem'
    title.className = 'text-lg' // tailwind classes
    
    const price = document.createElement('div');
    price.textContent = formatPrice(item.price);
    price.className = 'text-gray-600'

    const priceAndTitle = document.createElement('div')
    priceAndTitle.className = 'text-center md:text-left'
    priceAndTitle.appendChild(title)
    priceAndTitle.appendChild(price)

    const card = document.createElement('div');
    card.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300'
    card.appendChild(image);
    card.appendChild(priceAndTitle);

    // document.body.appendChild(container);
    allItems.push(card);

});
appNode.append(...allItems)

});

