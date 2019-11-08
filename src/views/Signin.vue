<template>
    <div class="Sign_in">
        <Navbar></Navbar>
        <div class="content">
            <CardSignin></CardSignin>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Elements/Navbar.vue";
import CardSignin from "@/components/Signin/CardSignin.vue";
export default {
    name:"Sign_in",
    components:{
        Navbar,
        CardSignin
    }
}
</script>