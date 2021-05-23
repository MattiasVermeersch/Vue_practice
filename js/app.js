var app = new Vue({
    el: "#app",
    data: {
        pageTitle: "Hello Vue from Aartrijke",
        hoverText: "Page loaded on " + new Date().toLocaleDateString(),
        canYouSeeMe: true,
        people: [
            {name: "Xander", city: "Aalst"},
            {name: "William", city: "Brugge"},
            {name: "Els", city: "Roeselare"},
        ],
    },
})