<script>
 export default {
        data() {
            return {
                count:0
            }
        },
        methods: {
            async Counter() {
                const count = ref(0)
            },
        }
    }
</script>
<template>
    <v-btn @click="count++">
        Click
    </v-btn>
    <p>{{count}}回クリックされました</p>
</template>