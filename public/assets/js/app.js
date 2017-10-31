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

        output: function () {
            console.log("output");
            return this.counter > 10 ? 'greater then 10' : 'smaller then 10';

        }

    },
    /*
        when counter change it runs
    */
    watch: {
        counter: function (value) {
            var vm = this;
            setTimeout(function () {
                vm.counter = 0;
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
        result: function () {
            console.log("result");
            return this.counter > 10 ? 'greater then 10' : 'smaller then 10';

        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function () {
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
        alertMe: function () {
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
        result: function () {
            console.log("ciao")
            return this.value > 37 ? 'done' : 'not there yet';
        }
    },
    watch: {
        value: function (value) {
            var vm = this;
            setTimeout(function () {
                vm.value = 0;
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
        isAttached: function () {
            return this.attachBlue;
        }
    }
});

//-----------------------------------_---------------------------------
// Section3

new Vue({
    el: '#exercise6',
    data: {
        show: true
    }
})

new Vue({
    el: '#exercise7',
    data: {
        ingredients: ['meat', 'fruit', 'cookies'],
        persons: [
            {name: 'luca', age: 24, color: 'red'},
            {name: 'alex', age: 23, color: 'white'}
        ]
    }
})

new Vue({
    el: '#project1',
    data: {
        started: false,
        actions: [],
        players: {
            user: {
                life: 100
            },
            monster: {
                life: 100
            }
        }
    },
    methods: {
        random: function (max, min) {
            return Math.floor(Math.random() * max) + min;
        },
        checkWinner: function () {
            if (this.players.user.life < 1) {
              alert(" You lost! ");
                this.giveUp();
            }
            else if (this.players.monster.life < 1) {
               alert(" You Won! ");
                this.giveUp();
            }
        },
        doAttack: function () {
            var damage = this.random(10, 1);
            this.attack('user', damage);
            damage = this.random(10, 1);
            this.attack('monster', damage);
            this.checkWinner();

        },
        doSpecialAttack: function () {
            var damage = this.random(16, 3);
            this.specialAttack('user', damage);
            damage = this.random(16, 3);
            this.specialAttack('monster', damage);
            this.checkWinner();
        },
        doHeal: function () {
            var heal = this.random(14, 5);
            this.heal('user', heal);
            heal = this.random(14, 5);
            this.heal('monster', heal);
        },

        attack: function (player, damage) {
            this.players[player].life -= damage;
            this.log('attack', {
                to: player,
                damage: damage
            });
        },
        specialAttack: function (player, damage) {
            this.players[player].life -= damage;
            this.log('specialAttack', {
                to: player,
                damage: damage
            });
        },
        heal: function (player, heal) {
            this.players[player].life += heal;
            this.log('heal', {
                to: player,
                heal: heal
            });
        },

        log: function (action, data) {
            if (action === 'attack') {
                this.actions.push({
                    type: 'attack',
                    to: data.to,
                    damage: data.damage
                });
            } else if (action === 'heal') {
                this.actions.push({
                    type: 'heal',
                    to: data.to,
                    heal: data.heal
                });
            }
            else if (action === 'specialAttack') {
                this.actions.push({
                    type: 'specialAttack',
                    to: data.to,
                    damage: data.damage
                });
            }
        },

        giveUp: function () {
            this.players.user.life = 100;
            this.players.monster.life = 100;
            this.actions = [];
            this.started = false;
        }
    }
})