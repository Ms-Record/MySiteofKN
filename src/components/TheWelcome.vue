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
            About
        </template>
        まずはこのサイトの足を運んでいただき<br />
        ありがとうございます。<br />
        拙いサイトですが、 <br />
        ゆっくりしていってね！！！
        <br />
        <br />


    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
            <SNSicon />
        </template>
        <template #heading>
            Link
        </template>
        SNS <br />
        <a href="https://twitter.com/KanareN_iteng" target="_blank" rel="noopener">X(Twitter)</a><br />
        Fediverse <br />
        <a href="https://misskey.io/@Kanare_N" target="_blank" rel="noopener">Misskey.io</a>,
        <a href="https://misskey.systems/@Kanare_iteng" target="_blank" rel="noopener">みすてむず</a>
        Other <br />
        <a href="https://github.com/Ms-Record/MySiteofKN" target="_blank" rel="noopener">Github</a>

    </WelcomeItem>

    <WelcomeItem>
        <template #icon>
           <building /> 
        </template>
        <template #heading>
         Works
        </template>
        建設中...<br />

    </WelcomeItem>


</template>
