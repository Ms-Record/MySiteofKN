<script>
    import HelloWorld from '../../../../components/HelloWorld.vue'

    export default {
        components: {
            HelloWorld,
        },


    }

</script>

<template>
    <HelloWorld msg="2023_08/25_第一回HTML道場" />
    <br />
    第一回HTML道場で作成したページです
    <br />
    <img alt="HTMLDojoReview1" class="logo" src="./HTMLDojoReview1.gif" width="270" height="450" />
    <br />
    <br />
    <router-link to="./htmlDojorevues_2">2023_08/31_第二回HTML道場制作物こちら</router-link>
    <br />
    <router-link to="/works/dojo">exit</router-link>
</template>