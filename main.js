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

        frameLayer = new Group();
        core.rootScene.addChild(frameLayer);
        
        textLayer = new Group();
        core.rootScene.addChild(textLayer);


        //テキストエリアとフレームをセットする
        _ss.SetTextAreaImage();
        _ss.SetFrameImage();


        _ss.SetBackGroundImage("img/背景.png");
        _ss.SetCharactor("img/主人公.png");
        //_ss.SetCharactor("img/chara2.png");





        _ss.SetText(['モンスターが現れた！','違った、主人公だったｗ','間違えんなよ！']);
        


    };

    core.start();
};
