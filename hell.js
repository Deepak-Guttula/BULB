function changeBulbImage() {
    var img = document.getElementById('bulbImg');
    if (img.src.match('off.png')) {
        img.src = 'on.png';
    } else {
        img.src = 'off.png';
    }
}
