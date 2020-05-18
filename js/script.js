console.log ('Hello There Friends!');

var doCoolStuff = function(){
    document.getElementById('cool').className = 'cool red'; 
}

var sayMyName = function (name) {
    alert('Mi nonmbre es: '+ name);
}

var car = {
    make: 'VW',
    type: 'Polo',
    color: 'Blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: ['seat1','seat2','seat3','seat4',],
            
    turnOn: function () {
        this.isTurnedOn = true;
    },

    fly: function () {
        alert('fly');
    },

    jump: function (){

    },

    switchCar: function (isON) {
        console.log ('Switch Car is ' +isON);
        if (isON == true) {
            this.isTurnedOn = true;
            } else {
                this.isTurnedOn = false;
            }
        }
        };
