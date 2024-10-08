<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button />
        </ion-buttons>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Profile Card -->
      <ion-card class="profile-card">
        <ion-card-header>
          <ion-card-title>Profile Information</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked">First Name</ion-label>
                  <ion-input readonly :value="patient.fname"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Middle Name</ion-label>
                  <ion-input readonly :value="patient.mname"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Last Name</ion-label>
                  <ion-input readonly :value="patient.lname"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Sex At Birth</ion-label>
                  <ion-input readonly :value="patient.sex"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Birthdate</ion-label>
                  <ion-input readonly :value="patient.birthdate"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Address</ion-label>
                  <ion-input readonly :value="patient.address"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Contact Number</ion-label>
                  <ion-input readonly :value="patient.contact"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Email</ion-label>
                  <ion-input readonly :value="patient.email"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Password</ion-label>
                  <ion-input readonly :type="showPassword ? 'text' : 'password'" :value="patient.password">
                    <ion-button slot="end" @click="togglePasswordVisibility" fill="clear">
                      <ion-icon :name="showPassword ? 'eye-off' : 'eye'"></ion-icon>
                    </ion-button>
                  </ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

      <!-- Edit Button -->
      <ion-button expand="block" @click="setOpen(true)" class="edit-button" color="secondary">
        Edit Profile
      </ion-button>

      <!-- Inline Edit Modal -->
      <ion-modal :is-open="isOpen" class="modal-container">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Edit Profile</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="setOpen(false)" color="light">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked">First Name</ion-label>
                  <ion-input v-model="patient.fname" placeholder="Enter first name"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Middle Name</ion-label>
                  <ion-input v-model="patient.mname" placeholder="Enter middle name"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Last Name</ion-label>
                  <ion-input v-model="patient.lname" placeholder="Enter last name"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Address</ion-label>
                  <ion-input v-model="patient.address" placeholder="Enter address"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Contact Number</ion-label>
                  <ion-input v-model="patient.contact" placeholder="Enter contact number"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Password</ion-label>
                  <ion-input v-model="patient.password" :type="showPassword ? 'text' : 'password'" placeholder="Enter password">
                    <ion-button slot="end" @click="togglePasswordVisibility" fill="clear">
                      <ion-icon :name="showPassword ? 'eye-off' : 'eye'"></ion-icon>
                    </ion-button>
                  </ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-button expand="block" @click="saveProfile" color="success" class="save-button">Save Changes</ion-button>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonModal, IonButtons, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonIcon } from '@ionic/vue';

const isOpen = ref(false); // Modal state
const showPassword = ref(false); // Password visibility toggle

const setOpen = (open: boolean) => {
  isOpen.value = open; // Toggle modal visibility
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value; // Toggle password visibility
};

// Patient object with default values
const patient = ref({
  fname: 'Joseph',
  mname: 'David',
  lname: 'Linobo',
  sex: 'M',
  birthdate: '2002-04-14',
  address: 'Olongapo City',
  contact: '09325421084',
  email: 'joseph@gmail.com',
  password: '*******',
});

// Function to save profile changes
const saveProfile = () => {
  console.log('Profile saved', patient.value); // Log the updated patient profile
  setOpen(false); // Close the modal after saving
};
</script>

<style scoped>
.profile-card {
  margin-top: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
}

ion-card-header {
  text-align: center;
  padding-bottom: 0;
}

ion-card-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #3b3b3b;
}

ion-item {
  margin-bottom: 16px;
}

.edit-button {
  margin-top: 24px;
}

.modal-container {
  --background: rgba(255, 255, 255, 0.9); /* Semi-transparent background */
  --border-radius: 12px;
  --box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Increased shadow for depth */
}

ion-title {
  color: white;
}

ion-button {
  --border-radius: 10px;
  font-weight: bold;
}

.save-button {
  margin-top: 20px; /* Add some space above the save button */
}

ion-icon {
  cursor: pointer;
  margin-right: 8px;
  color: #333;
}

@media (max-width: 768px) {
  .modal-container {
    --background: rgba(255, 255, 255, 0.95); /* Slightly different opacity for smaller screens */
  }
}
</style>
