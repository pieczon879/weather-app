window.onload = function () {

    const temperaturePoints = document.querySelectorAll('.sliderItem__temperaturePoint');

    const pointTemperatureTab = [];
    const myLinesTemperature = [];

    temperaturePoints.forEach((point, index) => {

        if (index < temperaturePoints.length - 1) {
            let myLine = new LeaderLine(
                point,
                temperaturePoints[index + 1],
                { path: 'straight', endPlug: 'behind', size: 2, color: '#f9d348' }
            );
            myLinesTemperature.push(myLine);

        }
    })

    //bad :(
    setInterval(() => {
        myLinesTemperature.forEach(myLine => {
            myLine.position()
        })
    }, 100);


    let slider = document.querySelector('.swiper-container').swiper

    slider.on('setTranslate', function onSliderMove() {
        myLinesTemperature.forEach(myLine => {
            myLine.position()
        })
    });



};