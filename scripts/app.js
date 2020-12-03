const $button1 = $("#1");
const $button2 = $("#2");
const $button3 = $("#5");





const $gotchiImg = $(".gotchi_img");


class Tamagotchi {
    constructor(name){
        // 0 is optimal range for each stat, 10 being death/unhappy
    this.alive = true;
    this.name = name;
    this.health = 7;
    this.mood = 7;
    this.age = 0;
    }
    updateAge(){
        this.age += time
    }

    
    

    
  
    changeImage(){
    const $gotchi = $(".gotchi_img");
    
    if (time <=49){
    $gotchi.attr("id", 'baby')
    
    }if (time === 50 && this.mood < 5 && this.health < 5){
        $gotchi.attr("id", 'teenager')
    }
    else if (time === 60 && this.mood < 5 && this.health < 5){
        $gotchi.attr("id", 'adult')
    }
}
      
    
   



   changeImageMood(){
    const $gotchi = $(".gotchi_img");
        if (this.mood>5 || this.health>5){
            $gotchi.attr("mood", 'sad')
        } else {
            $gotchi.attr("mood", '')
            

        } 

        }
        

    reduceHunger(){
        if (health>0){
        this.health--
        }else{}
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



let value = 1;
const $progress = $("progress");
const setTimer = function setTimer(){
    const updateTime = function updateTime() {
        console.log("timer", time);
        time++;
        instance.age++
        $progress.val(value);
        value++
        instance.changeImage();
        instance.changeImageMood();
        if (time % 10 === 0){
            instance.increaseHunger()
            instance.increaseMood()
        }else if (time === 600 * 1000) {
            clearInterval(timer);
            
        }
    }
    const timer = setInterval(updateTime, 1000);
};

let time = 1





const instance = new Tamagotchi("Jim");


$("#tamagotchi").on("click", "#egg", function (event){
    const $target = $(event.target);
    if ($target.hasClass("clicked") === false) {
        console.log("poked the egg", $target);
        $target.addClass("clicked")
        
}
});
const startGame = function startGame(){
    if ($gotchiImg.hasClass("gotchi_img clicked") === true){  
        setTimer();
         }};
const domStart = function domStart(event){
    event.stopPropagation();
    startGame();
}

$("#tamagotchi").on("click", "#egg", function (event){
    startGame();
});
