<template>
    <div class="admin_dashboard">
        <DashboardBg></DashboardBg>
    </div>
</template>

<script>
const DashboardBg = () => import("@/components/Profile/Dashboard")
export default {
    name : "admin_dashboard",
    components : { DashboardBg }
}
</script>

<style  scoped>
.admin_dashboard{
    background-color: #ffffff;
}
</style>