enchant();


window.onload = function(){

    var game = new Core(1080, 1920);

    game.fps = 15;


    game.preload("img/chara1.png","img/chara2.png","img/chara3.png","img/フレーム.png","img/背景.png","img/テキストエリア.png");

 
     game.onload = function(){

        c1 = new Sprite(720, 1220);
        f1 = new Sprite(1080, 1920);
        b1 = new Sprite(1080, 1920);
        t1 = new Sprite(1080, 570);

        c1.image = game.assets["img/chara2.png"];
        f1.image = game.assets["img/フレーム.png"];
        b1.image = game.assets["img/背景.png"];
        t1.image = game.assets["img/テキストエリア.png"];



        c1.x = 100;
        c1.y = 300;

        c1.frame = 5;

        t1.y = 1220;

        game.rootScene.addChild(b1);
        game.rootScene.addChild(c1);
        game.rootScene.addChild(t1);
        game.rootScene.addChild(f1);


        var myLabel = new Label("モンスターが現れた！");
        myLabel.font = "50px Palatino";
        myLabel.x = 100;	// X座標
        myLabel.y = 1300;	// Y座標
        myLabel.color = "rgb(255, 255, 255)";
        myLabel.width = 1080;
        myLabel.height = 570;
        // ラベルを画面に表示
        game.rootScene.addChild(myLabel);




    };

    game.start();
};
