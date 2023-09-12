<script>
    export default {
        data() {
            return {
                hoverFlag: false,
                photo: true,
            }
        },
        methods: {
            async mouseOverAction() {
                this.hoverFlag = true
            },
            async mouseLeaveAction() {
                this.hoverFlag = false
            },
            async photoChange(){
                this.photo=!this.photo
            },
        }
    }
</script>
<template>
    あ
    <div id="app2">
        <div class="photo2">
            <div v-if="photo">
               
            </div>
        </div>
    </div>
    <br />
    <br />
    <div id="app">
        <div class="photo">
            <p v-on:mouseover="mouseOverAction" v-on:mouseleave="mouseLeaveAction"><img src="./test/photo/face_smile_woman2.png" /></p>
            <p v-if="hoverFlag"><img src="./test/photo/face_smile_woman4.png" /></p>
        </div>
    </div>
    <br />
</template>