enchant();


window.onload = function(){

var core = new Core(1080, 1920);

// シーンを生成する
var _ss = new StoryScene(core);


    core.fps = 15;


    core.preload("img/chara1.png","img/chara2.png","img/chara3.png","img/フレーム.png","img/背景.png","img/テキストエリア.png","img/主人公.png");


    core.onload = function(){




        //レイヤーで管理する
        bgLayer = new Group();
        core.rootScene.addChild(bgLayer);
        
        imageLayer = new Group();
        core.rootScene.addChild(imageLayer);

        taLayer = new Group();
        core.rootScene.addChild(taLayer);

        textLayer = new Group();
        core.rootScene.addChild(textLayer);

        frameLayer = new Group();
        core.rootScene.addChild(frameLayer);


        _ss.SetBackGroundImage("img/背景.png");

        //_ss.SetCharactor("img/主人公.png");
        _ss.SetCharactor("img/chara2.png");


        _ss.SetTextAreaImage();


  

        var myLabel = new Label("モンスターが現れた！");
        myLabel.font = "50px Palatino";
        myLabel.x = 100;	// X座標
        myLabel.y = 1300;	// Y座標
        myLabel.color = "rgb(255, 255, 255)";
        myLabel.width = 1080;
        myLabel.height = 570;
        // ラベルを画面に表示
        core.rootScene.addChild(myLabel);

        _ss.SetFrameImage();
        
        


    };

    core.start();
};
