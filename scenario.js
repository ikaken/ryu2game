

titlescene = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/背景.png',
  'SetChoiceScene': [" ▶︎ もう一度プレイする","sceneA001"," ▶︎ モンスターからやり直す","sceneA003"],
}


sceneA001 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/背景.png',
  'SetCharactor': 'img/主人公.png',
  'SetText': ['モンスターが現れた！','違った、主人公だったｗ','間違えんなよ！'],
  'SetNextSceneName' : 'sceneA002'
}

sceneA002 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/背景.png',
  'SetCharactor': 'img/主人公.png',
  'SetText': ['主人公が現れた','','・・・で？'],
  'SetNextSceneName' : 'sceneA003'
}

sceneA003 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/背景.png',
  'SetCharactor': 'img/chara2.png',
  'SetText': ["モンスターが現れた！","本当に現れた！？","寿限無、寿限無  五劫の擦り切れ  海砂利水魚の  水行末 雲来末 風来末  食う寝る処に住む処  藪ら柑子の藪柑子  パイポ　パイポ　パイポのシューリンガン  シューリンガンのグーリンダイ  グーリンダイのポンポコピーのポンポコナーの  長久命の長助"],
  'SetNextSceneName' : 'sceneB004'
}


sceneB004 = {
  'DeleteCharactor':"",
  'SetBackGroundImage' : 'img/背景.png',
  'SetCharactor': 'img/chara2b.png',
  'SetText': ["モンスターが現れた！","本当に現れた！？","寿限無、寿限無  五劫の擦り切れ  海砂利水魚の  水行末 雲来末 風来末  食う寝る処に住む処  藪ら柑子の藪柑子  パイポ　パイポ　パイポのシューリンガン  シューリンガンのグーリンダイ  グーリンダイのポンポコピーのポンポコナーの  長久命の長助"],
  'SetNextSceneName' : 'titlescene'
}


scene4A = {
  'AddPlayerStatusPlane' : ['nenepoint',1],
  'SetText': ['ねね','ふーん　ってあんまり興味ないの？','彼女いないくせに（笑）'],
  'SetNextSceneName':'scene5'
}


scene35B3 = {
  'AddPlayerStatusPlane' : ['nenepoint',1],
  'SetText': ["ねね","・・・・・・・・・","あんたらしいわね・・・・・"],
  'SetNextSceneName' : 'scene35B4'
}

scene32 = {
  'SelectMethod': ['nenepoint >=4','scene33A','scene33B'],
}

scene37 = {
  'SelectMethodHasTrue': ['みやがスパイの話を聞いた ==true','scene38A','scene38B'],
}

scene76A = {
    'AddPlayerStatusFlag' : ["ねねに会いたい",true],
    'SetText': ["","ねねだ！","とりあえず今日は寝るか・・・"],
    'SetNextSceneName' : 'scene80'
}
