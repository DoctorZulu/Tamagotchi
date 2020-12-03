const $button1 = $("#1");
const $button2 = $("#2");
const $button3 = $("#3");





const $gotchiImg = $(".gotchi_img");


class Tamagotchi {
    constructor(name){
        // 0 is optimal range for each stat, 10 being death/unhappy
    this.alive = true;
    this.name = name;
    this.health = 5;
    this.mood = 5;
    this.age = 0;
    }
    updateAge(){
        this.age += time
    }

    
    

    
  
    changeImage(){
    const $gotchi = $(".gotchi_img");
    
    if (time <=14){
    if (this.mood>5 || this.health>5){
        $gotchi.attr("id", 'babysad')
    }else {$gotchi.attr("id", 'baby')}
    
    }else if (this.age >= 15 && time < 40 && this.mood < 5 && this.health < 5){
    if (this.mood>5 || this.health>5){
        $gotchi.attr("id", 'teenagersad')
        }else{ $gotchi.attr("id", 'teenager')
    }

    }else if (time > 40 && this.mood < 5 && this.health < 5){
        if (this.mood>5 || this.health>5){
        $gotchi.attr("id", 'adultsad')
        }else { $gotchi.attr("id", 'adult')
}
}
    }
    
        

    reduceHunger(){
        if (this.health>0){
        this.health--
        }
    }

    increaseHunger(){
        this.health++
        
    }


    reduceMood(){
        if (this.mood>0){
        this.mood--
    }
}

    increaseMood(){
        this.mood++
        
    }
        
}



let value = 1;
const $progress = $("progress");
const setTimer = function setTimer(){
    const updateTime = function updateTime() {
        //console.log("timer", time);
        time++;
        instance.age++
        $progress.val(value);
        value++
        instance.changeImage();
        
        if (time % 10 === 0){
            instance.increaseHunger()
            instance.increaseMood()
            $(".poop").show();
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

$("#tamagotchi").on("click", "#egg", function (event){
    startGame();
});

$button1.on("click", function (event){
    instance.reduceHunger();
    $(".yum").show();
    $(".yum").hide(1000);
});

$button2.on("click", function (event){
    instance.reduceMood();
    $(".hehe").show();
    $(".hehe").hide(1000);
});
$button3.on("click", function (event){
    instance.reduceMood();
    $(".huh").show();
    $(".huh").hide(2000);
    $(".poop").hide();
});
