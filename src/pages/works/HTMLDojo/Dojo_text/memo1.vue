<template>
    HTML：文章を装飾する言語
    <br />
    HyperText＝リンクを使ってページをたどる文章
    <br />
    <br />
    タグ：＜＞ではじまり＜/＞で終わる記号で、別のものを入れることができる
    <br />
    ┗html ：中身がHTML
    <br />
    ┗head：画面に見えない情報＝メタ情報を持つタグ
    <br />
    ┗title：タイトルバーの名前を反映
    <br />
    ┗meta：OGPに対応
    <br />
    ※OGP＝SNSなど遷移先のURLのプレビュー表示をしたりする
    <br />
    ┗body：HTMLタグ直下に１つだけ置くことができるタグ、画面に表示する部分を示す
    <br />
    このタグ外にbody用のタグなどを入れると、botなど誤作動の原因になる！
    <br />
    ┗h1：見出し・h6まである
    <br />
    ┗p：文章を入れる
    <br />
    ┗img：src="（画像のリンク・URL）"を使って画像の表示をする
    <br />
    ┗a：アンカー、タグで囲んだhref属性で指定したリンクを貼ることができる
    <br />
    ┗hr：ページ内に区切り（水平線）を入れる
    <br />
    ┗table：タグ内が表である宣言、table borderで罫線付の表
    <br />
    ┗tr：行
    <br />
    ┗td：セル
    <br />
    ┗input：テキスト一行の入力、半角スペースで属性を分ける
    <br />
    ┗ =input type="text"
    <br />
    ┗input type="radio：ラジオボタン
    <br />
    ※name属性が同じ場合は１つ選択可能
    <br />
    ┗input type="checkbox"：チェックボックス、複数選択可能
    <br />
    <br />
    属性（プロパティ）：タグ内部に入れる設定
    <br />
    ┗href：アンカータグ内のリンク・URLをハイパーリンクにする
    <br />
    ┗src：指定するタグのアイテムの所在をパス・URLで指定
    <br />
    ┗name：要素の名前を指定
    <br />
    <br />
    リンクに遷移するパス指定の書き方
    <br />

    
    <br />
    <router-link to="/works/dojo">exit</router-link>


</template>