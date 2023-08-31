<script>
    import HelloWorld from '../../../../components/HelloWorld.vue'

    export default {
        components: {
            HelloWorld,
        },


    }

</script>

<template>
    <HelloWorld msg="2023_08/31_第二回HTML道場" />
    <br />
    第二回HTML道場で作成したページです
    <br />
    セレクトボタン、テキストエリア、送信ボタンの追加をしました
    <br />
    <img alt="HTMLDojoReview2" class="logo" src="./HTMLDojoReview2/HTMLDojoReview2-1.png" />
    <br />
    ・セレクトボタン選択時
    <br />
    <img alt="HTMLDojoReview2" class="logo" src="./HTMLDojoReview2/HTMLDojoReview2-1-1.png" />
    <br />
    ・テキストエリア入力時
    <img alt="HTMLDojoReview2" class="logo" src="./HTMLDojoReview2/HTMLDojoReview2-1-2.png" />
    <br />
    また、各入力フォームの送信後の値が設定したValueの値になるような要素を追加しました。
    <br />
    <img alt="HTMLDojoReview2" class="logo" src="./HTMLDojoReview2/HTMLDojoReview2-2.png" />
    <br />
    <router-link to="./htmlDojorevues">2023_08/25_第一回HTML道場制作物はこちら</router-link>
    <br />
    <router-link to="/works/dojo">exit</router-link>
</template>