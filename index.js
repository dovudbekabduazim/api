// const api_key = "1d579a9e17mshae55ee8c6238123p10d05fjsnfb370ac54d5d";



// const url = 'https://cat-fact.herokuapp.com/facts';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'x-rapidapi-key': '1d579a9e17mshae55ee8c6238123p10d05fjsnfb370ac54d5d',
// 		'x-rapidapi-host': 'mangapi3.p.rapidapi.com',
// 		'Content-Type': 'application/x-www-form-urlencoded'
// 	},
// 	body: new URLSearchParams({to: 'FRENCH'})
// };

// setTimeout(() => {
//     fetch(url)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }, 1000);

// var cats = []





// try {
// const response = await fetch(url, options);
// const result = await response.text();
// console.log(result);
// } catch (error) {
// console.error(error);
// }


// var cats = [];

// const url = 'https://cataas.com/api/cats?limit=10&skip=0';

// // fetch so'rovini to'g'ridan-to'g'ri chaqirish
// fetch(url)
//     .then(response => response.json())  // response.json() ni chaqirib, JSON formatga o'tkazamiz
//     .then(data => {
//         cats = data;
//     })
//     .catch(err => console.error(err));
//     // console.log(cats);  // Yangi o'zgargan cats massivini bu yerda chiqaramiz
//     // console.log('Cats size:', cats.length);
//     console.log('ID:', cats.id);




var cats = [];

const url = 'https://cataas.com/api/cats?limit=10&skip=0';
fetch(url)
    .then(response => response.json())  // Ma'lumotni JSON formatiga o'tkazamiz
    .then(data => {
        cats = data;  // Ma'lumotni 'cats' ga yozamiz
    })
    .catch(err => console.error(err));  // Xatolikni qayd etamiz

    
    const bodyElement = document.getElementById('body');

setTimeout(() => {
    // console.log(cats);

    cats.map((cat) => {

        const pElement = document.createElement("img");
        pElement.src = 'https://cataas.com/cat/' + cat._id;

        
        bodyElement.appendChild(pElement);
        
    })
}, 1000);






const numbers = [1,2,3,4];

numbers.map((num) => {
    console.log(num + ' - chisi');
} )