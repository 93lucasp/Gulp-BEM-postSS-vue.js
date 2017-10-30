new Vue({
    el: '#app',
    data: {
        name: "Luca",
        age: "24",
        title: "hello world",
        link: "http://google.com",
        img: "https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg",
        linkFinished: "<a href='https://facebook.com'> facebook</a>"

    },
    methods: {
        sayHello: function (event) {
            this.title = "Hello"
            return this.title;
        }
    }
});
new Vue({
    el: '#exercise',
    data: {
        name: "Luca",
        age: "24",
        img: "https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg",

    },
    methods: {
        multiply: function () {
            return Math.random();
        }
    }
});

new Vue({
    el: '#counter',
    data: {
        counter: 0,
        counter2: 0,
        x: 0,
        y: 0

    },
    computed: {

        output: function() {
            console.log("output");
            return this.counter > 10 ? 'greater then 10' : 'smaller then 10';

        }

    },  
/*
    when counter change it runs
*/
    watch: {
        counter: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.counter=0;
            }, 2000);
        }
    },
    methods: {
     /*
        increase: function () {
            this.counter++;

        },
        decrease: function () {
            this.counter--;
        },
     */
        result: function() {
            console.log("result");
            return this.counter > 10 ? 'greater then 10' : 'smaller then 10';

        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function() {
            return alert("bau");
        }
    }
});


new Vue({
    el: '#exercise2',
    data: {
        value: ""

    },
    methods: {
        alertMe: function() {
            return alert("alert");
        }
    }
});

new Vue({
    el: '#exercise3',
    data: {
        name: "luca"

    }
});

new Vue({
    el: '#exercise4',
    data: {
        value: 0,

    },
    computed: {
        result: function() {
            console.log("ciao")
            return this.value > 37 ? 'done' : 'not there yet';
        }
    },
    watch: {
        value: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.value=0;
            }, 5000);
        }
    },

});

new Vue({
    el: '#exercise5',
    data: {
        attachBlue: false,
         color: 'blue'
    },
    computed: {
        isAttached: function() {
            return this.attachBlue;
        }
    }
});