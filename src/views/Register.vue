<template>
    <div class="Register">
        <Navbar></Navbar>
        <div class="content">
            <RegisterCard></RegisterCard>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Elements/Navbar.vue";
import RegisterCard from "@/components/Register/Register.vue";
export default {
    name:"Sign_in",
    components:{
        Navbar,
        RegisterCard
    }
}
</script>