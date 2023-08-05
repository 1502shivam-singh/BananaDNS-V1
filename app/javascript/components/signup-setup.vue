<template>
  <div>
    <sign-up-button @show-modal="showModal = true" />
    <sign-up-modal :show="showModal" @close="showModal = false" />
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    import SignUpButton from './signup/signup-button.vue'
    import SignUpModal from './signup/signup-modal.vue'

    let showModal = ref(false);
</script>
