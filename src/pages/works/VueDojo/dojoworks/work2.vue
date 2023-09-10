<script>
    import HelloWorld from '../../../../components/HelloWorld.vue'
    import { ref } from 'vue'

    export default {
        components: {
            HelloWorld,
        },
        data() {
            return {
                secretText: true,
                mojiretsu: "我はここにあり",
                suuji: "42",
                mojire2: true,
                message: ref('')
            }
        },
        methods: {
            async secret() {
                this.secretText = !this.secretText
                const message = ref('')
            },
            async mojikae() {
                this.mojire2 = !this.mojire2
                console.log("文字が変更されてますか？", this.mojire2);
            },
        }
 
    }
</script>
<template>
    習得した技術
    <br />
    MisskeyAPIをVue上で扱う
    <br />
    ①MisskeyAPIで取得した情報がコンソール上に表示される仕組みを作りました
    <br />
    ※このサイトでは使用上表示されません
    <br />
    <img alt="VueDojoReview1" class="logo" src="./mysite_vuepreview20230905.gif" width="600" height="300" />
    <br />
    <br />
    ②また、APIで取得した情報を個別で表示する仕組みを作りました
    <br/>
    <img alt="VueDojoReview1" class="logo" src="./mysite_vuepreview20230907.gif" width="450" height="400" />
    <br />
    <hr />
    今回の課題
    <br />
    1. キーで定義した文字列を持つデータを定義し、画面に表示する
    <br />
    <div>{{mojiretsu}}</div>
    <br />
    2. 1に加え、”42”を定義したデータを画面に表示する
    <br />
    <div>{{suuji}}</div>
    <br />
    3. ボタンを押すと、「我はここにあり」の文字列をを
    <br />
    「我はそこにいた」という文字列になるように画面表示する
    <br />
    <v-btn @click="mojikae">今は？</v-btn>
    <div>{{mojire2?"我はここにあり":"我はそこにいた"}}</div>
    <br />
    <v-btn @click="secret">{{secretText?"おや？":"ワァ見つかっちゃったァ！"}}</v-btn>
    <div>
        {{secretText?"":"下記入力欄にキーワードを入れると秘密のページに行けます！"}}<br />
        {{secretText?"":"キーワードはどこかにあります。"}}<br />
    </div>
        <input v-if="!this.secretText" v-model="message" style="cursor:pointer" placeholder="キーワード入力はここへ"><br />
        <div v-if="message ===''">{{secretText?"":"キーワードを入力してね"}}</div>
        <div v-if="message === 'secret1'"><router-link to="../../VueKadai/secret">>></router-link></div>
        <div v-if="message !=='' && 'secret1'"><router-link to="../../VueKadai/huseikai">></router-link></div>

    <router-link to="/works/dojo">exit</router-link>
</template>