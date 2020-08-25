//get latitude and longtide

window.addEventListener('load',()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long=position.coords.longitude;
            lati=position.coords.latitude;

            const proxy= "http://cors-anywhere.herokuapp.com/";
            const api= `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=78b9977757bdaa6fc995e24326b9a17e`;

            fetch(api)
            .then(data =>{
                return data.json();
            })

            .then(data => {
                console.log(data);
            });
        });

    }
});