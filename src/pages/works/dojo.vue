<script setup>
    import WelcomeItem from '../../components/WelcomeItem.vue'
    import AboutIcon from '../../components/icons/IconAbout.vue'
    import SNSicon from '../../components/icons/IconSNS.vue'
    import building from '../../components/icons/IconBuilding.vue'
</script>
<template>
    建設中…
    <br />
    <TheWelcome />


    <WelcomeItem>
        <template #icon>

        </template>
        <template #heading>
            今日の創造
        </template>
        <a href="./html/index.html">第一回HTML道場</a><br />
        <router-link to="./VueDojo/dojoworks/work1">Vue道場 2023_0829</router-link>

    </WelcomeItem>

    <WelcomeItem>
        <template #icon>

        </template>
        <template #heading>
            今日の破壊
        </template>

    </WelcomeItem>
    <br />
    <router-link to="/works">exit</router-link>


</template>

