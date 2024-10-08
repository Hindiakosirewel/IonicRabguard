<template>
  <ion-page>
    <ion-content class="ion-padding signup-content">
      <div class="signup-container">
        <ion-card class="signup-card">

          <!-- Image Container -->
          <div class="image-container">
            <img src="@/assets/rabguardlogo.png" alt="Logo" />
          </div>

          <ion-card-header>
            <ion-card-title>RABGUARD</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-grid>
              <ion-row>
                <!-- First Name -->
                <ion-col size="6">
                  <div class="input-group">
                    <label for="firstName">First Name</label>
                    <ion-input id="firstName" type="text" placeholder="Enter First Name" />
                  </div>
                </ion-col>

                <!-- Last Name -->
                <ion-col size="6">
                  <div class="input-group">
                    <label for="lastName">Last Name</label>
                    <ion-input id="lastName" type="text" placeholder="Enter Last Name" />
                  </div>
                </ion-col>

                <!-- Middle Name -->
                <ion-col size="6">
                  <div class="input-group">
                    <label for="middleName">Middle Name</label>
                    <ion-input id="middleName" type="text" placeholder="Enter Middle Name" />
                  </div>
                </ion-col>

                <!-- Extension -->
                <ion-col size="6">
                  <div class="input-group">
                    <label for="extension">Extension</label>
                    <ion-input id="extension" type="text" placeholder="Jr, Sr, III" />
                  </div>
                </ion-col>

                <!-- Gender -->
                <ion-col size="6">
                  <div class="input-group">
                    <label for="gender">Gender</label>
                    <ion-select id="gender" placeholder="Select Gender">
                      <ion-select-option value="male">Male</ion-select-option>
                      <ion-select-option value="female">Female</ion-select-option>
                      <ion-select-option value="other">Other</ion-select-option>
                    </ion-select>
                  </div>
                </ion-col>

                <!-- Contact Number -->
                <ion-col size="6">
                  <div class="input-group">
                    <label for="contactNumber">Contact Number</label>
                    <ion-input id="contactNumber" type="tel" placeholder="Enter Contact Number" />
                  </div>
                </ion-col>

                <!-- Address -->
                <ion-col size="6">
                  <div class="input-group">
                    <label for="address">Address</label>
                    <ion-input id="address" type="text" placeholder="Enter Address" />
                  </div>
                </ion-col>

                <!-- Birthdate (Formatted as dd/mm/yyyy) -->
                <ion-col size="6">
                  <div class="input-group">
                    <label for="birthdate">Birthdate</label>
                    <ion-input 
                      id="birthdate" 
                      type="text" 
                      placeholder="DD/MM/YYYY" 
                      v-model="birthdate"
                      @blur="validateDateFormat"
                    />
                  </div>
                </ion-col>

                <!-- Email -->
                <ion-col size="6">
                  <div class="input-group">
                    <label for="email">Email</label>
                    <ion-input id="email" type="email" placeholder="Enter Email" />
                  </div>
                </ion-col>

                <!-- Password -->
                <ion-col size="6">
                  <div class="input-group">
                    <label for="password">Password</label>
                    <ion-input id="password" type="password" placeholder="Enter Password" />
                  </div>
                </ion-col>
              </ion-row>
            </ion-grid>

            <!-- Sign-Up Button -->
            <ion-button expand="block" @click="signup" class="signup-button">Sign-Up</ion-button>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const birthdate = ref('');
const router = useRouter();

// Function to validate and format the birthdate input as dd/mm/yyyy
const validateDateFormat = () => {
  const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  
  if (!datePattern.test(birthdate.value)) {
    alert("Please enter a valid date in DD/MM/YYYY format");
    birthdate.value = '';
  }
};

const signup = () => {
    // Navigate to the home page after login
    router.push('/login');
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

/* Center the signup card */
.signup-content {
  position: relative; /* Parent container for absolute positioning */
  height: 100%; /* Full height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center items vertically */
  align-items: center; /* Center items horizontally */
}

/* Container for signup form */
.signup-container {
  position: absolute; /* Center the container */
  top: 50%; /* Move the container down 50% from the top */
  left: 50%; /* Move the container right 50% from the left */
  transform: translate(-50%, -35%); /* Center the container fully */
  width: 100%;
  max-width: 600px; /* Adjusted width for larger signup form */
  padding: 20px;
}

/* Image container */
.image-container {
  margin-bottom: -20px; /* Space between image and card */
  text-align: center; /* Center the image */
}

.image-container img {
  width: 100%;
  max-width: 200px; /* Limit the image size */
  border-radius: 10px;
}

/* Card styling */
.signup-card {
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
}

/* Title styling */
ion-card-title {
  text-align: center;
  font-size: 1.8rem;
  color: black;
  font-family: 'Montserrat', sans-serif; 
  letter-spacing: 1.5px;
  margin-bottom: 20px;
}

/* Input group styling */
.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  font-size: 0.9rem;
  color: black;
  margin-bottom: 5px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
}

/* Styling for inputs, selects, and datetime picker */
ion-input,
ion-select,
ion-datetime {
  width: 100%;
  --background: white;
  --padding-start: 8px;
  --padding-end: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 45px;
  font-size: 1rem;
}

/* Signup button styling */
.signup-button {
  margin-top: 20px;
  background-color: #34a853; /* Different color for signup */
  color: white;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
}

/* Responsive layout adjustments */
@media (max-width: 768px) {
  .signup-container {
    max-width: 100%; /* Full width for smaller screens */
    padding: 10px;
  }
}
</style>
