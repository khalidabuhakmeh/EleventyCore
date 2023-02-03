;(function () {
    console.log("Hello there!")

    fetch('/api/current-time')
        .then((response) => response.json())
        .then((data) => {
            const el =document.getElementById('target');
            el.innerText =`the current date time is ${data.datetime}`; 
        });
})()