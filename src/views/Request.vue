<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button />
        </ion-buttons>
        <ion-title>Request Record</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Button to open modal -->
      <ion-button expand="block" @click="setOpen(true)">Request Vaccination Record</ion-button>

      <!-- Modal -->
      <ion-modal :is-open="isOpen" @will-dismiss="onWillDismiss">
        <ion-header>
          <ion-toolbar>
            <ion-title>Vaccination Form</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="setOpen(false)">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-grid>
            <ion-row>
              <!-- Left Column -->
              <ion-col>
                <ion-item>
                  <ion-label position="floating">Date of Exposure</ion-label>
                  <br>
                  <ion-datetime display-format="MM/DD/YYYY" :max="getCurrentDate()" v-model="newPatient.expdate"></ion-datetime>
                </ion-item>

             

              <!-- Right Column -->
              <ion-item>
                  <ion-label position="floating">Place of Exposure</ion-label>
                  <br>
                  <ion-select v-model="newPatient.expplace" interface="popover" placeholder="Select Place">
                    <ion-select-option value="Asinan">Asinan</ion-select-option>
                    <ion-select-option value="Banicain">Banicain</ion-select-option>
                    <ion-select-option value="Barretto">Barretto</ion-select-option>
                    <!-- Add other options here -->
                    <ion-select-option value="Others">Others</ion-select-option>
                  </ion-select>
                </ion-item>

                <ion-item v-if="newPatient.expplace === 'Others'">
                  <ion-input placeholder="Please Specify Place" v-model="newPatient.otherPlace"></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label position="floating">Source of Exposure</ion-label>
                  <br>
                  <ion-select v-model="newPatient.expsource" interface="popover" placeholder="Select Source">
                    <ion-select-option value="Dog">Dog</ion-select-option>
                    <ion-select-option value="Cat">Cat</ion-select-option>
                    <ion-select-option value="Rat">Rat</ion-select-option>
                    <ion-select-option value="Bat">Bat</ion-select-option>
                    <ion-select-option value="Others">Others</ion-select-option>
                  </ion-select>
                </ion-item>

                <ion-item v-if="newPatient.expsource === 'Others'">
                  <ion-input placeholder="Please Specify Source" v-model="newPatient.otherSource"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item>
                  <ion-label position="floating">Type of Exposure</ion-label>
                  <br>
                  <ion-select v-model="newPatient.exptype" interface="popover" placeholder="Select Type">
                    <ion-select-option value="scratch">Scratch</ion-select-option>
                    <ion-select-option value="bite">Bite</ion-select-option>
                    <ion-select-option value="saliva exposure">Saliva Exposure</ion-select-option>
                  </ion-select>
                </ion-item>

                <ion-item>
                  <ion-label position="floating">Site of Exposure</ion-label>
                  <br>
                  <ion-input placeholder="Enter site of exposure" v-model="newPatient.expsite"></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label position="floating">Wash</ion-label>
                  <br>
                  <ion-select v-model="newPatient.wash" interface="popover" placeholder="Was it washed?">
                    <ion-select-option value="1">Yes</ion-select-option>
                    <ion-select-option value="0">No</ion-select-option>
                  </ion-select>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>

          <!-- Button Group -->
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-button expand="block" @click="submitForm" class="submit-button" :disabled="!isFormValid">Submit</ion-button>
              </ion-col>
              <ion-col>
                <ion-button expand="block" color="danger" @click="setOpen(false)" class="cancel-button">Cancel</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonModal, IonGrid, IonRow, IonCol } from '@ionic/vue';

// Modal state
const isOpen = ref(false);

// Function to open/close modal
const setOpen = (open: boolean) => {
  isOpen.value = open;
};

// Patient form data
const newPatient = ref({
  expdate: '',
  expplace: '',
  otherPlace: '',
  expsource: '',
  otherSource: '',
  exptype: '',
  expsite: '',
  wash: ''
});

// Validation: Check if all fields are filled
const isFormValid = computed(() => {
  return newPatient.value.expdate && newPatient.value.expplace && 
         newPatient.value.expsource && newPatient.value.exptype && 
         newPatient.value.expsite && newPatient.value.wash;
});

// Form submission handler
const submitForm = () => {
  if (isFormValid.value) {
    console.log('Form submitted', newPatient.value);
    setOpen(false); // Close modal after submission
  } else {
    alert("Please fill in all fields.");
  }
};

// Function to handle modal dismissal (if needed)
const onWillDismiss = () => {
  setOpen(false);
};

// Function to get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0]; // returns YYYY-MM-DD format
};
</script>

<style scoped>
.form-columns {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.form-column {
  flex: 1;
  padding: 0 16px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
}

.submit-button, .cancel-button {
  --border-radius: 8px;
  --min-height: 44px;
}

ion-item {
  margin-bottom: 12px;
}
</style>
