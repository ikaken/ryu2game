enchant();


window.onload = function(){

    var game = new Core(1080, 1920);

    game.fps = 15;


    game.preload("img/chara1.png");
    game.preload("img/chara2.png");
    game.preload("img/chara3.png");
    game.preload("img/f1.png");

 
     game.onload = function(){

        bear = new Sprite(32, 32);
        c1 = new Sprite(720, 1220);
        f1 = new Sprite(1240, 1754);

        bear.image = game.assets["img/chara1.png"];
        c1.image = game.assets["img/chara2.png"];
        f1.image = game.assets["img/f1.png"];

        bear.x = 0;
        bear.y = 100;

        c1.x = 100;
        c1.y = 100;
        

        bear.frame = 5;

        game.rootScene.addChild(c1);
        game.rootScene.addChild(bear);
        game.rootScene.addChild(f1);

        var myLabel = new Label("モンスターが現れた！");
        myLabel.font = "50px Palatino";
        myLabel.x = 200;	// X座標
        myLabel.y = 1250;	// Y座標
        // ラベルを画面に表示
        game.rootScene.addChild(myLabel);


        bear.addEventListener("enterframe", function(){
            this.x += 1;

            this.frame = this.age % 2 + 6;
        });


        bear.addEventListener("touchstart", function(){
            game.rootScene.removeChild(bear);
        });
    };

    game.start();
};
