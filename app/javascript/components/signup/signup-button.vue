<template>
  <button @click="emitShowModal" class="signup-btn pa2 bg-gold b">Get started for free</button>
</template>

<script setup>
import { defineEmits } from 'vue';
  const emit = defineEmits(['show-modal']);

  const emitShowModal = () => {
    emit('show-modal');
  };
</script>
