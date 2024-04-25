var images = ['/image/tamim1.jpeg', '/image/tamim2.jpg', '/image/tamim3.jpg', '/image/tamim4.jpg', '/image/tamim5.jpg', '/image/tamim6.jpg', '/image/tamim7.jpg', '/image/tamim8.jpg', '/image/tamim9.jpg', '/image/tamim10.jpg', '/image/tamim11.jpg', '/image/tamim12.jpg', '/image/tamim13.jpg', '/image/tamim14.jpg', '/image/tamim15.jpg', '/image/tamim16.jpg', '/image/tamim17.jpg', '/image/tamim18.jpg', '/image/tamim19.jpg', '/image/tamim20.jpg', '/image/tamim21.jpg', '/image/tamim22.jpg', '/image/tamim23.jpg', '/image/tamim24.jpg'];
var imgTag = document.querySelector('img');

var count = 0;
function next() {
    count++;
    if (count >= images.length) {
        count = 0;
        imgTag.src = images[count];
    }
    else {
        imgTag.src = images[count];
    }
};

function prev() {
    count--;
    if (count < 0) {
        count = images.length - 1;
        imgTag.src = images[count];
    }
    else {
        imgTag.src = images[count];
    }
}