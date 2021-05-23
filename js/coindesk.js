var coindeskapp = new Vue({
    el: "#coindesk",
    data: {
        info: null,
    },
    created:
        function(){
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (this.info = response.data.bpi))
        },
    
});