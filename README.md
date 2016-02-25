#descartes grid-system  
descartesのサンプルリポジトリ  
グリッドシステムをモジュール化し、汎用的に使用出来るようにする  
##グリッドシステムについて  
最初からgridを設計しようとすると大変なので、一旦は既存のgridを踏襲しつつ、descartesでの使い心地を確認  
後に少しずつリファクタをする  
##目指すこと  
[Flexbox Grid](http://flexboxgrid.com/)をdescartes上で扱えるようにする  
理由としては今後自分が作成するサンプルコードでCSSを書きたくないから  
またdescartes以外の依存を排除した形でモジュール化したい  
##最速で試す方法  
ローカルにクローンし以下コマンドをターミナルから入力  
```
$ sudo npm i
```  
##ディレクトリ一覧  
```
├── README.md
├── assets
│   ├── base
│   │   └── mock.css
│   ├── ejs
│   │   ├── common
│   │   │   ├── _footer.ejs
│   │   │   ├── _header.ejs
│   │   │   ├── _index.ejs
│   │   │   └── _nav.ejs
│   │   └── index.ejs
│   ├── js
│   │   ├── baseParam.js
│   │   ├── col-lg.js
│   │   ├── col-md.js
│   │   ├── col-sm.js
│   │   ├── col-xs.js
│   │   ├── col.js
│   │   ├── common.js
│   │   ├── event.js
│   │   ├── grid.js
│   │   ├── method.js
│   │   └── styles.js
│   └── style
│       ├── debug-root.css
│       └── descartes.js
├── gulp
│   ├── browserify.js
│   ├── ejs.js
│   ├── path.js
│   ├── style.js
│   └── watch.js
├── gulpfile.babel.js
├── package.json
└── template
    ├── index.html
    ├── js
    │   ├── descartes.js
    │   └── main.js
    └── style
        └── descartes.js
```  
上記古くなってる可能性があるのでリポジトリ確認、あるいはターミナルで以下コマンド入力  
```
$ npm run tree
```

##RESPECT
- [descartes](https://github.com/JonHMChan/descartes)  
- [JonHMChan](https://github.com/JonHMChan)
