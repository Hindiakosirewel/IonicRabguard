<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button />
        </ion-buttons>
        <ion-title>History</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Patient Information Card -->
      <ion-card class="patient-card">
        <ion-card-header>
          <ion-card-title class="card-title">Patient Details</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <div class="text-info">
            <div class="patient-info">
              <div><strong>NAME:</strong> {{ fullName(patient) }}</div>
              <div><strong>AGE:</strong> {{ calculateAge(patient.birthdate) }}</div>
              <div><strong>ADDRESS:</strong> {{ patient.address }}</div>
              <div><strong>GENDER:</strong> {{ patient.sex === 'male' ? 'M' : 'F' }}</div>
              <div><strong>CONTACT:</strong> 0{{ patient.contact }}</div>
            </div>

            <!-- Exposure Information -->
            <div class="id-info">
              <div class="exposure-title"><strong>Exposure Information:</strong></div>
              <div><strong>Date of Exposure:</strong> {{ formatDate(patient.expdate) }}</div>
              <div><strong>Place of Exposure:</strong> {{ patient.expplace }}</div>
              <div><strong>Type of Exposure:</strong> {{ patient.exptype }}</div>
              <div><strong>Source of Exposure:</strong> {{ patient.expsource }}</div>
              <div><strong>Category of Exposure:</strong> {{ patient.expcateg }}</div>
              <div><strong>Site of Exposure:</strong> {{ patient.expsite }}</div>
              <div><strong>Washing of Bite Wound:</strong> {{ patient.wash === 0 ? 'NO' : 'YES' }}</div>

              <!-- Schedules -->
              <div class="schedules-title"><strong>Schedules:</strong></div>
              <div><strong>Day 0:</strong> {{ formatDate(patient.date0) }} <ion-icon name="checkmark-circle" class="check-icon"></ion-icon></div>
              <div><strong>Day 3:</strong> {{ formatDate(patient.date3) }} <template v-if="patient.day3 === 1"><ion-icon name="checkmark-circle" class="check-icon"></ion-icon></template></div>
              <div><strong>Day 7:</strong> {{ formatDate(patient.date7) }} <template v-if="patient.day7 === 1"><ion-icon name="checkmark-circle" class="check-icon"></ion-icon></template></div>
              <div><strong>Day 28:</strong> {{ formatDate(patient.date28) }} <template v-if="patient.day28 === 1"><ion-icon name="checkmark-circle" class="check-icon"></ion-icon></template></div>
            </div>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

// Define reactive patient data
const patient = ref({
  fname: 'Joseph',
  mname: 'David',
  lname: 'Linobo',
  sex: 'male',
  birthdate: '2002-04-14',
  address: 'Olongapo City',
  contact: '9325421084',
  expdate: '2023-09-15',
  expplace: 'Barretto',
  exptype: 'scratch',
  expsource: 'Dog',
  expcateg: 'Category 2',
  expsite: 'Arm',
  wash: 1,
  date0: '2023-09-15',
  date3: '2023-09-18',
  date7: '2023-09-22',
  date28: '2023-10-13',
  day3: 1,
  day7: 1,
  day28: 1,
});

// Functions to format and display data
const fullName = (patient: { fname: any; mname: any; lname: any; }) => `${patient.fname} ${patient.mname} ${patient.lname}`;
const calculateAge = (birthdate: string | number | Date) => {
  const birthDate = new Date(birthdate);
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
const formatDate = (date: string | number | Date) => new Date(date).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
</script>

<style scoped>
.patient-card {
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Shadow for depth */
}

.card-title {
  font-weight: bold; /* Bold title */
  font-size: 1.5em; /* Increased font size for title */
  color: #26619c; /* Primary color for title */
}

.text-info {
  padding: 16px;
}

.patient-info {
  margin-bottom: 20px; /* Space between patient info and exposure info */
}

.id-info {
  margin-top: 20px;
}

.id-info div {
  margin-bottom: 10px;
}

.exposure-title,
.schedules-title {
  margin-top: 20px; /* Space before exposure info and schedules */
  font-weight: bold; /* Bold text */
  font-size: 1.2em; /* Increased font size */
}

.check-icon {
  color: #4CAF50; /* Green color for check icons */
  margin-left: 5px; /* Space between text and icon */
}
</style>
