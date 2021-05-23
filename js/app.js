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
        twoWayBindingMessage: "This is my message",
        counter: 0,
        showNewPersonForm: false,
        newPerson: [{name: "", city: ""}],
    },
    methods: {
        toggleCanYouSeeMe: function () {
            this.canYouSeeMe = !this.canYouSeeMe;
        },
        showPersonForm: function(showForm) {
            this.showNewPersonForm = showForm;
        },
        addNewPerson: function(person) {
            this.people.push(person)
        }
    },
});