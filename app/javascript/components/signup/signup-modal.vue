<template>
  <transition name="effect">
    <div v-if="props.show" class="fixed z-1 top-0 left-0 w-100 h-100 overflow-auto bg-black-70">
      <div class="signup-modal modal-content pa4 bg-white mw6 center br2 shadow-1">
        <form @submit="submitForm" action="/welcome" method="post">
          <input type="hidden" name="authenticity_token" :value="csrfToken">
          
          <div class="close-svg" @click="closeModal">
            <svg height="30px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"></path></svg>
          </div>
          <p class="tl f3 pb4">Let's go bananas!</p>
  
          <label for="email" class="tl db mb2">Email:</label>
          <input v-model="email" type="email" id="email" name="email" class="input-border input-reset ba b--black-20 pa2 mb4 db w-100">
  
          <label for="password" class="tl db mb2">Password:</label>
          <input v-model="password" type="password" id="password" name="password" class="input-border input-reset ba b--black-20 pa2 mb4 db w-100">
  
          <button type="submit" class="signup-btn pa2 bg-gold b w-100">Create my account</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const props = defineProps({
        show: Boolean
    });

    let email = ref('');
    let password = ref('');
    let csrfToken = ref('');

    const submitForm = (event) => {
        if(email.value === '' || password.value === '') {
            event.preventDefault();
            alert('Please fill out all fields');
        }
    };

    onMounted(() => {
      csrfToken.value = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    });

    const emit = defineEmits(['close']);
    const closeModal = () => {
      emit('close');
    };   
</script>

<style scoped>
.effect-enter-active, .effect-leave-active {
  transition: opacity 0.3s ease-in-out
}

.effect-enter-from, .effect-leave-to {
  opacity: 0;
}

.effect-enter-to, .effect-leave-from {
  opacity: 1;
}
</style>