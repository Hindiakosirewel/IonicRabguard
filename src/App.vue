<template>
  <ion-app>
    <div v-if="isLoggedIn">
      <ion-router-outlet />
    </div>
    <div class="login" v-else>
      <Login @loggedIn="checkAuth" />
    </div>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { ref, watchEffect } from 'vue';
import Login from './views/Login.vue';



// Reactive state to track if the user is logged in
const isLoggedIn = ref(false);

// Function to check if the user is authenticated
const checkAuth = () => {
  isLoggedIn.value = !!localStorage.getItem('authToken');
};

// Watch for changes in local storage and automatically update login state
watchEffect(() => {
  checkAuth(); // Call checkAuth whenever the component is rendered
});

</script>
