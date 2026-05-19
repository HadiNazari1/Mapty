'use strict';


// APPLICATION ARCHITECTURE
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
    function(position){
        const latitude= position.coords.latitude;
        const lontitude= position.coords.lontitude;
        console.log(`https://www.google.pt/maps/@${latitude},${lontitude}`);

    },
    function(){
        alert(`Could not get your position`);
        
    }
)
}
