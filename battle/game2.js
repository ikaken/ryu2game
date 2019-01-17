enchant();




window.onload = function() {

  // 使用する画像を格納する配列
  images = Array();
  
  // 使用する背景画像を配列にプッシュ
  for (var key in 背景画像) {
    images.push(背景画像[key]);
  }
  // 使用する人物画像を配列にプッシュ
  for (var key in 登場人物) {
    images.push(登場人物[key]);
  }

  // 「interpreter」オブジェクトを生成する
  interpreter = new interpreter();

  coer = new Core(320, 320);
  coer.fps = 16;
  coer.preload(images);

  // ブラウザのLocalStorageにデータを保存するデバック機能を有効にする
  // 9leapのデータベースに保存する場合は、「false」
  enchant.nineleap.memory.LocalStorage.DEBUG_MODE = true;

  // ゲームIDを設定する
  // ゲームID はシナリオ「scenario.js」の冒頭で指定する
  enchant.nineleap.memory.LocalStorage.GAME_ID = GAME_ID;

  // 自分のデータを読み込む
  coer.memory.player.preload();

  coer.onload = function() {

    // メモリの初期化
    var save = coer.memory.player.data;
    if (save.scene == null) save.scene = 'start';
    if (save.variables == null) save.variables = [];
    
    // データ復元
    for (var i in save.variables) {
      interpreter.variables[save.variables[i][0]] = save.variables[i][1] 
    }

    // 画像表示用のグループを作成する    
    imageLayer = new Group();
    coer.rootScene.addChild(imageLayer);

    // テキスト表示用のグループを作成する
    textLayer = new Group();
    coer.rootScene.addChild(textLayer);
    
    // セーブしたシーン(最初は「start」)からを実行する
    exec(eval(save.scene));
 
    // セーブラベルを作成する
    var savelabel = new MutableText(16, -100);
    savelabel.text = 'SAVE'
    // セーブラベルの「touchstart」イベントリスナ
    savelabel.addEventListener('touchstart', function(e) {
      this.backgroundColor = '#F0F0F0';
    });
    // セーブラベルの「touchend」イベントリスナ
    savelabel.addEventListener('touchend', function(e) {
      this.backgroundColor = '';
      var save = coer.memory.player.data;
      // シーン名をメモリに書き込む
      save.scene = interpreter.scene;
      // シナリオ中で定義した変数やフラグをメモリに書き込む
      var count =0;
      for (var i in interpreter.variables) {
        save.variables[count] = [i,interpreter.variables[i]];
        count++;
      }
      // 保存を実行する
      coer.memory.update();
    });
    savelabel.addEventListener('enterframe', function(e) {
      this.y =  0; // セーブラベルを見える位置へ
    });
    coer.rootScene.addChild(savelabel);
 
  }

  coer.start();

}