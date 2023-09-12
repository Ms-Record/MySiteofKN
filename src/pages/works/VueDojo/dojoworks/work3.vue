<script>
    import SharedCounter from './SharedCounter.vue'

    export default {
        components: {
            SharedCounter,
        },
        data() {
            return {
                counter: 0
            }
        },
        methods:{
        incrementX(add){
            this.counter = this.counter + add
            console.log("現在の数は",this.counter,"です")
        },
        },
    }
</script>

<template>
    コンポーネント作成特訓
    <br />
    課題 1
    <br />
    <SharedCounter />
    <SharedCounter />
    <SharedCounter />
    <br />
    課題 2
    <br />
    <p>{{counter}} {{counter}} {{counter}}   <v-btn @click="incrementX(1)">+1</v-btn></p>
    <br />
    <router-link to="/works/dojo">exit</router-link>
</template>