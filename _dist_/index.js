/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app"
const url = "https://platzi-avo.vercel.app/api/avo";

const appNode = document.querySelector('#app')

window.fetch(`${baseUrl}/api/avo`)
.then((response) => response.json())
.then((responseJSON) => {
    // console.log(responseJSON);
    const allItems = [];
    responseJSON.data.forEach((item) => {
    // console.log(element.name);

    const imagen = document.createElement('img');
    imagen.src = `${baseUrl}${item.image}`;
    
    const title = document.createElement('h2');
    title.textContent = item.name;
    
    const price = document.createElement('div');
    price.textContent = item.price;

    const container = document.createElement('div');
    container.append(imagen, title, price);

    // document.body.appendChild(container);
    allItems.push(container);

});
appNode.append(...allItems)

});

