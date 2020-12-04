const $button1 = $("#1");
const $button2 = $("#2");
const $button3 = $("#3");
const $submitButton = $(".submitButton")




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
    if (this.health >=10){
        this.alive = false
        $gotchi.attr("id", 'dead');
    } 
    else if (this.age <=39){
        if (this.mood>5 || this.health>5){
        $gotchi.attr("id", 'babysad')
        }else { $gotchi.attr("id", 'baby')
    }
    
    }else if (this.age >= 40 && this.age< 80){
        if (this.mood>5 || this.health>5){
        $gotchi.attr("id", 'teenagersad')
        }else{ $gotchi.attr("id", 'teenager')
    }

    }else if (this.age > 79 && this.age < 119){
        if (this.mood>5 || this.health>5){
        $gotchi.attr("id", 'adultsad')
        }else { $gotchi.attr("id", 'adult')
    }
    }else if (this.age >= 119){
        $gotchi.attr("id", 'winner')
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
        console.log("timer", time);
        const $gotchi = $(".gotchi_img");
        time++;
        instance.age++
        $progress.val(value);
        value++
        instance.changeImage();
        if (instance.alive === false) {
            clearInterval(timer);
            $(".game").show();
            $(".game").append(` ${instance.name} </br> is dead...`)
        
        
        }else if (time === 120) {
            clearInterval(timer);
            $(".game").show();
            $(".game").append(` ${instance.name} </br> lived a long and happy life!`)
        
        
        }else if (time % 10 === 0){
            instance.increaseHunger()
            instance.increaseHunger()
            instance.increaseMood()
            $(".poop").show();
        }}
    const timer = setInterval(updateTime, 1000);
};

let time = 1







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

let $playerName;
$submitButton.on("click", function logPlayerName(){
    $playerName = document.getElementById('tamaname').value;
    instance = new Tamagotchi($playerName)
    $submitButton.hide()
$("input").hide()})

$(".submitButton").on("click", function() {
    let song = document.getElementById("music");
    song.play();
});

