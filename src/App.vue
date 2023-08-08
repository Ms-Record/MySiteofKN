<script>
    import HelloWorld from './components/HelloWorld.vue'
    import TheWelcome from './components/TheWelcome.vue'

    export default {
        components: {
            HelloWorld,
            TheWelcome,
        }
    }

</script>

<template>
    <header>
        <img alt="Vue myface" class="logo" src="./assets/Vue_myface.gif" width="125" height="125" />

        <div class="wrapper">
            <router-link to="/">
                <HelloWorld msg="Welcome!" />
            </router-link>
            <TheWelcome />
            
        </div>

    </header>

    <main>
        <RouterView />
    </main>
</template>

<style scoped>
    header {
        line-height: 1;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    @media (min-width: 1024px) {
        header {
            display: flex;
            place-items: center;
            padding-right: calc(var(--section-gap) / 2);
        }

        .logo {
            margin: 0 2rem 0 0;
        }

        header .wrapper {
            display: flex;
            place-items: flex-start;
            flex-wrap: wrap;
        }
    }
</style>
