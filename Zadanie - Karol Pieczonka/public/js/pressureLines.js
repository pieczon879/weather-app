window.onload = function () {

    const pressurePoints = document.querySelectorAll('.sliderItem__pressurePoint');

    const pointPressureTab = [];
    const myLinesPressure = [];

    pressurePoints.forEach((point, index) => {

        if (index < pressurePoints.length - 1) {
            let myLine = new LeaderLine(
                point,
                pressurePoints[index + 1],
                { path: 'straight', endPlug: 'behind', size: 2, color: '#000' }
            );
            myLinesPressure.push(myLine);

        }
    })

    //bad :(
    setInterval(() => {
        myLinesPressure.forEach(myLine => {
            myLine.position()
        })
    }, 100);


    let slider = document.querySelector('.swiper-container').swiper

    slider.on('setTranslate', function onSliderMove() {
        myLinesPressure.forEach(myLine => {
            myLine.position()
        })
    });






};