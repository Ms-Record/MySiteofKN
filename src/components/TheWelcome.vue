<script setup>
import WelcomeItem from './WelcomeItem.vue'
import AboutIcon from './icons/IconAbout.vue'
import SNSicon from './icons/IconSNS.vue'
import building from './icons/IconBuilding.vue'

    //ピクトグラムはこちらのサイトから拝借してます：https://pictogrammers.com/
</script>

<template>
    <WelcomeItem>
        <template #icon>
            <AboutIcon />
        </template>
        <template #heading>
            <router-link to="/about">About</router-link>
        </template>
        当サイトについて

    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <SNSicon />
        </template>
        <template #heading>
            <router-link to="/link">Link</router-link>
        </template>
        各SNSリンク先


    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <building />
        </template>
        <template #heading>
            <router-link to="/works">Works</router-link>
        </template>
        Vue道場他、作品など
    </WelcomeItem>
   

</template>
