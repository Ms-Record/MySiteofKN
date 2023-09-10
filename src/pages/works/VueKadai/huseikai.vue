<script>
    export default {
        data() {
            return {
                hint: true

            }
        },
        methods: {
            async Hint() {
                this.hint = !this.hint
                console.log("キーワードを知りたかったら…");
                console.log("みすてむずのプロフィールを最後まで見てね");
                console.log("…はい。");
                console.log("言いたいことはわかります。");
                console.log("宣伝です。すみません。｡ﾟﾟ(*´□`*｡)°ﾟ｡");
            }
        }
    }
</script>

<template>
    ちがうよ
    <br />
    ここじゃないよ
    <br />
    <v-btn @click="Hint">ヒント</v-btn>
    <div>{{hint?"":"このボタンを押したことで何かが変化したはず…!"}}</div>
    <router-link to="/works/dojo">exit</router-link>
</template>