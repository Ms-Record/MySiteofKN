<script>
    export default {
        data() {
            return {
                hoverFlag: false,
            }
        },
        methods: {
            async mouseOverAction() {
                this.hoverFlag = true

            },
            async mouseLeaveAction() {
                this.hoverFlag = false

            },
        }
    }
</script>
<template>
    あ
    <br />
    <div id="app">
        <div class="photo">
            <div v-on:mouseover="mouseOverAction" v-on:mouseleave="mouseLeaveAction">
                <img src="./test/photo/face_smile_woman2.png" width="118" height="159" />
            </div>
            <div v-if="hoverFlag">
                <img src="./test/photo/face_smile_woman4.png" width="118" height="159" />
            </div>
        </div>
    </div>
    <br />
</template>

<style>
    .photo {
        width: 118px;
        height: 159px;
        position: absolute;
    }
</style>