<template>
    <div class="admin_dashboard">
        <Navbar></Navbar>
    </div>
</template>

<script>
const Navbar = () => import("@/components/Elements/Navbar")
export default {
    name : "admin_dashboard",
    components : { Navbar }
}
</script>