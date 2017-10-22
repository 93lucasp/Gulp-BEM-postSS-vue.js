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
        x: 0,
        y: 0

    },
    methods: {
        increase: function (step, event) {
            return this.counter += step;
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