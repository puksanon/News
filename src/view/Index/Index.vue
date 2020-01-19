<template>
    <div class="index">
        <IndexPage></IndexPage>
    </div>
</template>

<script>
const IndexPage = () => import('@/components/Index_comp/index')

export default {
    name: 'Index',
    components: {
        IndexPage
    }
}
</script>