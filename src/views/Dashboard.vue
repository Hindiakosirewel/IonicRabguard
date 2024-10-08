<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button />
        </ion-buttons>
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="dashboard-container">
        <!-- Do's And Don'ts Section -->
        <ion-card class="dashboard-card">
          <ion-card-content>
            <div class="left-container">
              <h1>Do's And Don'ts</h1>
              <img src="@/assets/Rabies.png" alt="Animal Bite Infographic">
            </div>
          </ion-card-content>
        </ion-card>

        <!-- Announcements Section -->
        <ion-card class="dashboard-card">
          <ion-card-content>
            <div class="right-container">
              <div class="top-container">
                <h2>
                  <ion-icon :icon="chatbubblesOutline"></ion-icon>
                  Announcements
                </h2>
                <div v-if="announcements.length">
                  <ul>
                    <li v-for="(announcement, index) in announcements" :key="index">
                      {{ announcement }}
                    </li>
                  </ul>
                </div>
                <div v-else>
                  <div class="card">
                    <h3><ion-icon :icon="chatbubblesOutline" class="top-card-icon"></ion-icon></h3>
                    <p>Aw. Snap! No Announcement posted.</p>
                  </div>
                </div>
              </div>
            </div>
          </ion-card-content>
        </ion-card>

        <!-- Vaccination Record Request Section -->
        <ion-card class="dashboard-card">
          <ion-card-content>
            <div class="bottom-container">
              <h2><ion-icon :icon="medkitOutline"></ion-icon> Vaccination Record Request</h2>
              <div v-if="queue.length">
                <ul>
                  <li v-for="(item, index) in queue" :key="index">{{ item }}</li>
                </ul>
              </div>
              <div v-else>
                <div class="card">
                  <div class="status">
                    <ion-icon :icon="syncOutline" class="fa-spin"></ion-icon> Processing
                  </div>
                </div>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons } from '@ionic/vue';
import { ref } from 'vue';
import { chatbubblesOutline, medkitOutline, syncOutline } from 'ionicons/icons';

const announcements = ref<string[]>([]); // Initialize with empty array or sample data
const queue = ref<string[]>([]); // Initialize with empty array or sample data
const chatbubblesOutlineIcon = chatbubblesOutline;
const medkitOutlineIcon = medkitOutline;
const syncOutlineIcon = syncOutline;
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Space between cards */
}

.dashboard-card {
  flex: 1; /* Allows cards to grow */
}

.left-container {
  text-align: center;
  font-family: Arial, sans-serif;
}

.left-container h1 {
  color: #2c3e50;
  margin: 16px 0;
}

.left-container img {
  max-width: 100%;
  height: auto;
}

.right-container .top-container, .bottom-container {
  padding: 16px;
  background-color: #f9f9f9;
}

ion-icon {
  color: #007bff;
}

.card {
  border: 1px solid #ddd;
  padding: 16px;
  margin-top: 16px;
}

.status {
  color: #ff9800;
  font-weight: bold;
}

.fa-spin {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
