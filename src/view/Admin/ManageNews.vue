<template>
    <div class="profile">
        <ManageNews></ManageNews>
    </div>
</template>

<script>
const ManageNews = () => import("../../components/Profile/Manage_news")
export default {
    name: "Manage_news",
    components: {
        ManageNews
    }
}
</script>