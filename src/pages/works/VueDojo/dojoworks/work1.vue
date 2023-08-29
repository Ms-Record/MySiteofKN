<script>
    import HelloWorld from '../../../../components/HelloWorld.vue'

    export default {
        components: {
            HelloWorld,
        },
        data() {
            return {
                dog: undefined
            }
            
        },
        methods: {
            async getDog() {
                this.dog = await (await fetch("https://dog.ceo/api/breeds/image/random ")).json()
            },
        },
    }
</script>

<template>
    ボタンを押すとかわいいワンちゃんが…🐶
    <br />
    <v-card-actions>
        <v-btn @click="getDog">CLICK HERE</v-btn>
        <br />
    </v-card-actions>

    <br />
    <img v-if="dog" :src="dog.message">
    <br />
    <br />
    <router-link to="/works/dojo">exit</router-link>
</template>
