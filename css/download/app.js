document.querySelector('video').playbackRate = 0.85;

function download() {
    let url = 'https://dl.lol.cdn.garenanow.com/games/lol/installer/GarenaLoL_Install_20220201_se8uyg7b.zip';
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    document.getElementById('download').appendChild(a);
    a.click();
    document.getElementById('download').removeChild(a);
    console.log('dowload connect')
}
