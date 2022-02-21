let bar = document.getElementById("asdvs");
const button = document.querySelectorAll("li.link");
const fdss = document.getElementById("fdss");
const body = document.querySelectorAll("body");
const linkVideo = document.getElementsByClassName("hesfsfe")[0];

const APIURL = '../css/patch/patch.json';

async function loadAsset() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();

    console.log('Fetch final')
    showDisplay(respData);
    return respData;
}

loadAsset();

function showDisplay(data) {
    console.log(data);
    let image = [];
    let name = [];
    let caption = [];
    let URL = data.tittle;
    URL.forEach(element => {
        image.push(element.image);
        name.push(element.name);
        caption.push(element.caption);
    });

    $(function () {
        $("body").click(function (e) {
            if (e.target.id == "row" || $(e.target).parents("#row").length) {
                linkVideo.innerHTML = ` <iframe width="650" height="538" src="https://www.youtube.com/embed/8FVB_4HTP4g"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen id="video"></iframe>`
                linkVideo.classList.remove('scoll');
                fdss.appendChild(linkVideo);

            } else {
                linkVideo.classList.add('scoll')
                linkVideo.innerHTML = '';
            }
        });
    })

    template(image, name, caption, button);

}

function template(image, name, caption, button) {
    let count = 0;
    let counter = setInterval(timer, 2000);

    function timer() {
        count++;
        if (count == 6) {
            count = 0;
        }
        for (let index = 0; index < button.length; index++) {
            button[index].classList.remove('icon');
        }
        button[count].classList.add('icon');
        bar.innerHTML = '';
        let para = document.createElement('div');
        para.classList.add('section_two--container--image');
        para.innerHTML = ` 
        <img class="two_image"
            src="${image[count]}"
            alt="">
        <div class="image__content">
            <span class="line_show text_one">${name[count]}</span>
            <span class="line_show text_two">${caption[count]}</span>
        </div>
        <span class="dsfsaefd">

        </span>`
        bar.appendChild(para);
        console.log(count)
    }
}

