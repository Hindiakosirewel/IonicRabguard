<template>
    <ion-page>
      <ion-content class="ion-padding login-content">
        <div class="login-container">
          <ion-card class="login-card">
            <div class="image-container">
                <img src="@/assets/rabguardlogo.png" alt="Your Image" />
              </div>
            <ion-card-header>
              <ion-card-title>RABGUARD</ion-card-title>
            </ion-card-header>
  
            <ion-card-content>
              <div class="input-group">
                <label for="username">Username</label>
                <ion-input v-model="username" id="username" type="text" />
              </div>
  
              <div class="input-group">
                <label for="password">Password</label>
                <ion-input v-model="password" id="password" type="password" />
              </div>
  
              <ion-button expand="block" @click="login" class="login-button">
                Log In
              </ion-button>
  
              <!-- Signup Button -->
              <ion-button expand="block" router-link="/signup" class="signup-button">
                Signup
              </ion-button>

            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // Input fields
  const username = ref('');
  const password = ref('');
  
  // Router instance to redirect on successful login
  const router = useRouter();
  
  // Login function logic
  const login = () => {
    // Store a fake authentication token in local storage, regardless of input
    localStorage.setItem('authToken', 'fakeAuthToken');
    
    // Navigate to the home page after login
    router.push('/');
  };
  </script>
  
  <style scoped>
  /* Full height page with white background */
  ion-page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f7f9fc;
  }
  
  /* Center the login card */
  .login-content {
    position: relative; /* Use relative positioning for the parent */
    height: 100%; /* Full height */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center items vertically */
    align-items: center; /* Center items horizontally */
  }
  
  /* Style the login card */
  .login-container {
    position: absolute; /* Use absolute positioning */
    top: 50%; /* Move down 50% */
    left: 50%; /* Move right 50% */
    transform: translate(-50%, -50%); /* Center the container */
    width: 100%;
    max-width: 400px;
    padding: 20px;
  }
  
  .image-container {
    margin-bottom: -20px; /* Space between image and login card */
    text-align: center; /* Center the image */
  }
  
  .image-container img {
    width: 100%; /* Responsive width */
    max-width: 200px; /* Limit max width for image */
    border-radius: 10px; /* Optional: rounded corners */
  }
  
  /* Card styling */
  .login-card {
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  ion-card-title {
    text-align: center;
    font-size: 1.5rem;
    color: black; /* Title color */
    font-family: 'Montserrat', sans-serif; /* Set font to Montserrat */
    letter-spacing: 1.5px;
  }
  
  /* Input group styling */
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    display: block;
    font-size: 0.9rem;
    color: black; /* Label color */
    margin-bottom: 5px;
    font-family: 'Montserrat', sans-serif; /* Set font to Montserrat */
    letter-spacing: 0.5px;
  }
  
  ion-input {
    width: 100%;
    --background: white;
    --padding-start: 8px;
    --padding-end: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 45px;
    font-size: 1rem;
  }
  
  /* Style the login button */
  .login-button {
    margin-top: 20px;
    background-color: #4285f4;
    color: white;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif; /* Set font to Montserrat */
  }
  
  /* Style the signup button */
  .signup-button {
    margin-top: 10px; /* Space between buttons */
    background-color: #34a853; /* Optional: change color for differentiation */
    color: white;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif; /* Set font to Montserrat */
  }
  
  /* Style the footer */
  .login-footer {
    text-align: center;
    margin-top: 15px;
    font-size: 0.9rem;
    color: #555;
  }
  
  .login-footer a {
    color: #4285f4;
    text-decoration: none;
  }
  </style>
  