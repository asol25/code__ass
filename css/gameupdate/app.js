const button = document.querySelectorAll("button.btn");
const main = document.getElementById("section--content");

const APIURL = '../css/gameupdate/data.json';

// async function loadAsset() {
//     const resp = await fetch(APIURL);
//     const respData = await resp.json();

//     show(respData);
//     return respData;
// }

// loadAsset();

// function loadAsset(url, type, callback) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.responseType = type;

//     xhr.onload = function() {
//         callback(xhr.response);
//     };

//     xhr.send();
// }

fetch(APIURL).then((response) => {
    return response.json();
}).then((json) => {
    let products = json;
    console.log('Fetch connect!')
    showDisplay(products);
}).catch((err) => {
    console.log('Have problem: ' + err.message)
})

function showDisplay(respData) {
    let title = [];
    let author = [];
    let category = [];
    let image = [];
    let data = {
        title,
        author,
        category,
        image
    }
    let dataURL = respData.result.data.all.nodes[0].articles;

    dataURL.forEach(element => {
        image.push(element.banner.url);
        title.push(element.title);
        author.push(element.date);
        category.push(element.category[0].title);
    });

    console.log(data);

    main.innerHTML = '';
    for (let index = 0; index < 6; index++) {
        let para = document.createElement('div');
        para.classList.add("section--content--container")
        para.innerHTML = `
    <a href="http://" class="hover--link">
        <div class="box--img">
            <div class="box--div">
                <img src="${image[index]}"
                    alt="" id="img" class="img--information">
            </div>
        </div>
        <article class="article">
            <p>${category[index]}</p>
            <h2>${title[index]}</h2>
            <span id="spans">${author[index]}</span>
        </article>
    </a>`
        main.appendChild(para);
    }

    /* This is code I make it, use clousure */
    // for (let i = 0; i < button.length; i++) {
    //     button[i].addEventListener('click', ((j) => {
    //         return function () {
    //             button.forEach(element => {
    //                 element.classList.remove('active');
    //             });
    //             button[j].classList.add("active");
    //             main.innerHTML = '';
    //             for (let index = 6 * (j + 1) - 6; index < 6 * (j + 1); index++) {
    //                 let para = document.createElement('div');
    //                 para.classList.add("section--content--container")
    //                 para.innerHTML = `
    //         <a href="http://" class="hover--link">
    //             <div class="box--img">
    //                 <div class="box--div">
    //                     <img src="${image[index]}"
    //                         alt="" id="img" class="img--information">
    //                 </div>
    //             </div>
    //             <article class="article">
    //                 <p>${category[index]}</p>
    //                 <h2>${title[index]}</h2>
    //                 <span id="spans">${author[index]}</span>
    //             </article>
    //         </a>`
    //                 main.appendChild(para)
    //             }
    //         }
    //     })(i))
    // }

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', (e) => {
            button.forEach(element => {
                element.classList.remove('active');
            });
            e.target.classList.add("active");
            main.innerHTML = '';
            for (let index = 6 * (i + 1) - 6; index < 6 * (i + 1); index++) {
                let para = document.createElement('div');
                para.classList.add("section--content--container")
                para.innerHTML = `
        <a href="http://" class="hover--link">
            <div class="box--img">
                <div class="box--div">
                    <img src="${image[index]}"
                        alt="" id="img" class="img--information">
                </div>
            </div>
            <article class="article">
                <p>${category[index]}</p>
                <h2>${title[index]}</h2>
                <span id="spans">${author[index]}</span>
            </article>
        </a>`
                main.appendChild(para);
        }});
    }
}
// loadAsset(APIURL, 'json', showDisplay);

var creatures = [
    {name: "Shark", habitat: "Ocean"},
    {name: "Whale", habitat: "Ocean"},
    {name: "Lion", habitat: "Savanna"},
    {name: "Monkey", habitat: "Jungle"}
  ];

  var aquaticCreatures =  creatures.filter(x => x.habitat == "Ocean");
  
  console.log(aquaticCreatures);
  
