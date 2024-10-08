<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button />
        </ion-buttons>
        <ion-title>Vaccination Record</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <!-- Patient Information Card -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Vaccination Record</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <div class="text-info">
            <!-- Personal Information -->
            <div class="section-title">Patient Information</div>
            <div class="personal-info">
              <div><strong>NAME:</strong> {{ fullName(patient) }}</div>
              <div><strong>AGE:</strong> {{ calculateAge(patient.birthdate) }}</div>
              <div><strong>ADDRESS:</strong> {{ patient.address }}</div>
              <div><strong>GENDER:</strong> {{ patient.sex === 'male' ? 'M' : 'F' }}</div>
              <div><strong>CONTACT:</strong> 0{{ patient.contact }}</div>
            </div>

            <!-- Exposure Information -->
            <div class="section-title">Exposure Information</div>
            <div class="id-info">
              <div><strong>Date of Exposure:</strong> {{ formatDate(patient.expdate) }}</div>
              <div><strong>Place of Exposure:</strong> {{ patient.expplace }}</div>
              <div><strong>Type of Exposure:</strong> {{ patient.exptype }}</div>
              <div><strong>Source of Exposure:</strong> {{ patient.expsource }}</div>
              <div><strong>Category of Exposure:</strong> {{ patient.expcateg }}</div>
              <div><strong>Site of Exposure:</strong> {{ patient.expsite }}</div>
              <div><strong>Washing of Bite Wound:</strong> {{ patient.wash === 0 ? 'NO' : 'YES' }}</div>
            </div>

            <!-- Vaccination Schedule -->
            <div class="section-title">Vaccination Schedule</div>
            <div class="schedules">
              <div><strong>Day 0:</strong> {{ formatDate(patient.date0) }} <ion-icon :name="patient.day0 ? 'checkmark-circle' : ''"></ion-icon></div>
              <div><strong>Day 3:</strong> {{ formatDate(patient.date3) }} <ion-icon :name="patient.day3 ? 'checkmark-circle' : ''"></ion-icon></div>
              <div><strong>Day 7:</strong> {{ formatDate(patient.date7) }} <ion-icon :name="patient.day7 ? 'checkmark-circle' : ''"></ion-icon></div>
              <div><strong>Day 28:</strong> {{ formatDate(patient.date28) }} <ion-icon :name="patient.day28 ? 'checkmark-circle' : ''"></ion-icon></div>
            </div>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/vue';

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
  day0: 1,
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
.text-info {
  padding: 16px;
}

.personal-info, .id-info, .schedules {
  margin-bottom: 20px;
}

.section-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--ion-color-primary);
}

.id-info div, .personal-info div, .schedules div {
  margin-bottom: 8px;
  font-size: 0.95rem;
}

ion-icon {
  margin-left: 8px;
  color: var(--ion-color-success);
}
</style>
