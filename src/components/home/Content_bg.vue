<template>
    <div class="bg_content">
        <div class="container">
            <card></card>
        </div>
    </div>
</template>

<script>
import card from './card'

export default {
    name:'Content_bg',
    components: {
        card
  }
}
</script>

<style scoped>
    .container{
        background-color: rgba(255, 255, 255, 0.815);
        height: 100vh;
        /* box-shadow: 2px 8px 7px 3px rgba(0, 0, 0, 0.15); */
        padding: 2rem 1.5rem;
    }
</style>

