let sleepCount = 1;
const sleepTimer = function sleepTimer() {
  const updateSleepTime = function updateSleepTime() {
    sleepCount++;
    if(sleepCount >= 10){
        clearInterval(timer);
      }
    /* if (sleepCount >= 10) {
        clearInterval(timer); */ 
        /* make timer stop at 10 */
        /* add something here to call a function that will print Player died in his sleep */
  };
  const timer = setInterval(updateSleepTime, 60 * 1000);  
}; 






class Tamagotchi {
    constructor(name){
        // 0 is optimal range for each stat, 10 being death/unhappy
    this.alive = true;
    this.name = name;
    this.health = 0;
    this.mood = 0;
    this.age = 1;
    }
    updateAge(){
        this.age += time
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
let value = 1;
const $progress = $("progress");
const setTimer = function setTimer(){
    const updateTime = function updateTime() {
        console.log("timer", time);
        time++;
        instance.age++
        $progress.val(value);
        value++
        if (time === 600 * 1000) {
            clearInterval(timer);
            
        }
    }
    const timer = setInterval(updateTime, 1000);
};

let time = 1




setTimer();
const instance = new Tamagotchi("Jim");


