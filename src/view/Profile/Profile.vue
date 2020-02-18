<template>
    <div class="profile">
        <ProfileSetting></ProfileSetting>
    </div>
</template>

<script>
const ProfileSetting = () => import("../../components/Profile/profile_setting")
export default {
    name: "Profile",
    components: {
        ProfileSetting
    }
}
</script>

