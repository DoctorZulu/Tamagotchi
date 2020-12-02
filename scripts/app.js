class tamagotchi {
    constructor(name, health, mood){
        // 0 is optimal range for each stat, 10 being death/unhappy
    let timer = new Timer();
    this.alive = true;
    this.name = name;
    this.health = health;
    this.mood = mood;
    this.age = timer
    this.image = imgurl;
    }
  
    changeImage(age){
    const $gotchi = $(".gotchi_img");
    switch (age) {
    case 120:
        $gotchi.addClass(".baby");
        break;
    case 240: 
        $gotchi.removeClass(".baby");
        $gotchi.addClass(".child");
        break;
    case 360:
        $gotchi.removeClass(".child");
        $gotchi.addClass(".teenager");
        break;
    case 480:
        $gotchi.removeClass(".teenager");
        $gotchi.addClass(".adult");
        break;
      
    }
}
    reduceHunger(){
        this.health--
    }

    increaseHunger(){
        let timer = new Timer();
        timer.start();
        if (timer === 10){
        this.health++
        timer.reset();
    }
}

    reduceMood(){
        this.mood--
    }

    increaseMood(){
        let timer = new Timer();
        timer.start();
        if (timer === 10){
        this.mood++
        timer.reset();
    }
        
    }

}


  
  

const instance = new tamagotchi();
const setUpGame = function setUpGame() {
    const instance = new tamagotchi();
    