<template>
<div>
    <Navbar class="top-0 left-0 w-full bg-white shadow-md z-50 mb-6" />
    <div class="min-h-screen bg-[#fafafa] px-4 py-6">
        <h1 class="text-xl font-semibold mb-4 text-left">User Feedbacks</h1>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/NavbarCom.vue';

export default {
    name: "UserFeedbackPage",
    components: {
        Navbar,
    },
    data() {
        return {

        }
    }
}
</script>