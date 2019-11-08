<template>
  <div class="index">
      <Navbar></Navbar>
    <div class="content">
      <Index></Index>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Elements/Navbar.vue";
import Index from "@/components/Index/Index.vue";
export default {
  name: "Index_page",
  components: {
    Index,Navbar
  }
};
</script>
