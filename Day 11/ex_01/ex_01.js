async function display_weather_chart(longitude, latitude) {
    let img = document.createElement("img");
    img.src = `https://www.7timer.info/bin/civil.php?lon=${longitude}&lat=${latitude}`;
    document.body.appendChild(img);
}

display_weather_chart(2.333333,48.866667)