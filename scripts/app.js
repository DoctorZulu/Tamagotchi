class tamagatchi {
    constructor(name, health, mood, age){
    this.alive = true;
    this.name = name;
    this.health = health;
    this.mood = mood;
    this.age = age;
    this.image = imgurl;
    }
  
    changeImage(age){
    const $tamagotchi = $("#tamagotchi");
    const $screen = $(".screen");
    $screen.append($tamagotchi);
    if (age === 1)
    $tamagotchi.addClass("baby");
      
    }
    reduceHunger(){
        this.health--
    }

    increaseHunger(){
        this.health++
    }

    reduceMood(){
        this.mood--
    }

    increaseMood(){
        this.mood++
    }

}
function changeImage(age){
    const $tamagotchi = $("#tamagotchi");
    const $screen = $(".screen");
    $screen.append($tamagotchi);
    if (age === 1)
    $tamagotchi.addClass("baby");
        

}

  
  
  const setTimer = function setTimer(){
    const updateTime = function updateTime() {
        console.log("timer", time);
        $("#timer").text(`timer: ${time}s`);
        time--;
        if (time <= 0) {
            clearInterval(timer);
            age++;
            $("#round").text(`round: ${round}`);
            if (round <= 4) setUpRound();
        }
    }
    const timer = setInterval(updateTime, 1000);
};
// 10 minute timer
let time = 600

let round = 1;

const setUpGame = function setUpGame() {
    $(".squares").empty(); // removes old squares after each round
    if (round === 1) {
        createSquares(25);
        time = 600;
    
    } else {
        alert("Game Over!");
    }
    setTimer();
};