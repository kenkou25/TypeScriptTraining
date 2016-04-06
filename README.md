# TypeScriptTraining
TypeScriptについての学習

## 開発環境
* Node.js  
* Visual Studio Code

### Node.js
↓からダウンロード  
[Node.js](https://nodejs.org/en/)
>v5.10.1 Stable

TypeScript インストール  
`npm install -g typescript`

### Visual Studio Code
↓からダウンロード  
[Visual Studio Code] (https://www.visualstudio.com/ja-jp/products/code-vs.aspx)
>Windows

#### 環境設定  
1. プロジェクトのフォルダを決める  
2. 開く  
    File > OpenFolder  
3. tsconfig.json の作成  
```json
{
    "compilerOptions": {
        "target": "ES5",
        "module": "commonjs",
        "sourceMap": true
    }
}
```
4. ビルドタスク設定  
    パレット呼び出し > ctrl + shift + p  
    "Configure Task Runner" 入力  
    "tasks.json" が自動生成される  
5. ビルド対象ファイル指定(buildフォルダに出力)  
    編集前 > "args": ["HelloWorld.ts"],  
    編集後 > "args": ["--outDir", "build", "HelloWorld.ts"],  
6. ビルド実行  
    ctrl + shift + b
