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
            今日の知見
        </template>


    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            
        </template>
        <template #heading>
            今日の創造
        </template>

    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
           
        </template>
        <template #heading>
            今日の破壊
        </template>

    </WelcomeItem>
    <br />
</template>

