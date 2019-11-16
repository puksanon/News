<template>
    <div class="student_profile">
        <div class="nav">
            <SlideBars></SlideBars>
        </div>
    </div>
</template>

<script>

import SlideBars from './student_nav'
export default { 
    name: 'student_profile',
    components:{
        SlideBars
    },
    data () {
        return {
        }
    },
    
}
</script>

<style scoped>

</style>