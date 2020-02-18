<template>
    <div class="manage_User_proile">
        <ManageUserBG></ManageUserBG>
    </div>
</template>

<script>
const ManageUserBG = () => import("@/components/Profile/Manage_user")
export default {
    name: "ManageUser",
    components:{
        ManageUserBG
    }
}
</script>