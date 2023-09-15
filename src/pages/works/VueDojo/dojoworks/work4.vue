<script>
    import MySlotTestComponent from './MySlotTestComponent.vue'
    import * as Misskey from 'misskey-js'

    export default {
        components: {
            MySlotTestComponent,
        },
        
    }
</script>

<template>

    <br />
    0913_どーじょー
    <br />
    Misskeyのタイムラインを表示することに成功
    <br />
    現在自分のNoteのみの取得ができないか試行錯誤中...
    <br />
    <v-divider :thickness="15"></v-divider>
    <br />
    0915_ど－じょー
    <br />
    slotの説明とVuetifyについて
    <br />
    下のボタンでポップアップっぽいのを作りました
    <br />
    <br />
    <MySlotTestComponent></MySlotTestComponent>

    <br />
    <v-divider :thickness="15"></v-divider>
    <router-link to="/works/dojo">exit</router-link>
</template>