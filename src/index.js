/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');

const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-En', {
        style:'currency', 
        currency: "USD",
    }).format(price);

    return newPrice;
}

//Intl
// 1 - formato fechas
// 2 - formato monedas

//web api
//Conectarnos al server
//promise -> async/await
window
.fetch(`${baseUrl}/api/avo`)
//Procesar la respuesta y convertirla en JSON
.then((respuesta) => respuesta.json())
//JSON -> Data ->ar info browser
.then((responseJson) => {
const todosLosItems = [];

    responseJson.data.forEach((item) => {
        //crear imagen
        const imagen = document.createElement('img');
        imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-0";
        imagen.src = `${baseUrl}${item.image}`;
        
        //crear titulo
        const title = document.createElement('h2');
        title.textContent = item.name;
        title.className = "text-lg";
        
        //crear precio
        const price = document.createElement('div');
        price.className = "text-gray-600";
        price.textContent = formatPrice(item.price);

        // wrap price & title
        // <div class="text-center md: text-left"><price><title ></div>
        const priceAndTitle = document.createElement('div');
        priceAndTitle.className = "text-center md:text-left";
        priceAndTitle.appendChild(title);
        priceAndTitle.appendChild(price);

        const card = document.createElement('div');
        card.className = "card md:flex bg-while border-green-900 border-2 bg-yellow-100 rounded-lg p-6 hover:bg-gray-300";
        card.appendChild(imagen);
        card.appendChild(priceAndTitle);
        
        todosLosItems.push(card);
    });

    appNode.append(...todosLosItems);
    appNode.className = "mt-10 grid grid-cols-2 gap-2";
});
