/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";

window.fetch(url)
.then((response) => response.json())
.then((responseJSON) => {
    const allItems = [];
    responseJSON.data.forEach((element) => {
    const imagen = document.createElement('img');
    
    const title = document.createElement('h2');
    
    const price = document.createElement('div');

    const container = document.createElement('div');
    container.append(imagen, title, price);

    // document.body.appendChild(container);
    allItems.push(container);

});
document.body.append(...allItems)

});

