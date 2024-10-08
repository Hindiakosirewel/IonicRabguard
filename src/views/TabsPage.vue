<template>
  <ion-app>
    <!-- Side Menu -->
    <ion-menu side="start" content-id="main-content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>RabGuard</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <!-- Logo Section -->
        <div class="logo-container">
          <img src="@/assets/rabguardlogo.png" alt="Rabguard Logo" class="logo" />
        </div>
        
        <!-- Profile Section -->
        <div class="profile-section">
          <ion-item button>
            <ion-avatar slot="start">
              <img src="@/assets/mac.png" alt="Profile Picture" />
            </ion-avatar>
            <ion-label>
              <h2 class="username">Mac Arthur Llanes Jr.</h2>
              <p class="location">New Cabalan</p>
            </ion-label>
          </ion-item>
        </div>

        <ion-list>
          <ion-item router-link="/tabs/Dashboard" class="menu-item" >
            <ion-icon :icon="home" slot="start" />
            <ion-label>Dashboard</ion-label>
          </ion-item>
          <ion-item router-link="/tabs/Profile" class="menu-item" >
            <ion-icon :icon="user" slot="start" />
            <ion-label>Profile</ion-label>
          </ion-item>
          <ion-item router-link="/tabs/Request" class="menu-item" >
            <ion-icon :icon="clipboardOutline" slot="start" />
            <ion-label>Request</ion-label>
          </ion-item>
          <ion-item router-link="/tabs/Record" class="menu-item" >
            <ion-icon :icon="calendarOutline" slot="start" />
            <ion-label>Record</ion-label>
          </ion-item>
          <ion-item router-link="/tabs/History" class="menu-item" >
            <ion-icon :icon="documentOutline" slot="start" />
            <ion-label>History</ion-label>
          </ion-item>
        </ion-list>

        <!-- Logout Button -->
        <div class="logout-container">
          <ion-button expand="full" color="danger" @click="logout">Logout</ion-button>
        </div>
      </ion-content>
    </ion-menu>

    <ion-page id="main-content">
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>

        <!-- Bottom Tab Bar 
        <ion-tab-bar slot="bottom" color="primary" translucent>
          <ion-tab-button tab="Dashboard" href="/tabs/Dashboard">
            <ion-icon aria-hidden="true" :icon="home" />
            <ion-label>Dashboard</ion-label>
            <ion-badge color="success" v-if="hasNotifications">1</ion-badge>
          </ion-tab-button>

          <ion-tab-button tab="Profile" href="/tabs/Profile">
            <ion-icon aria-hidden="true" :icon="user" />
            <ion-label>Profile</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="Request" href="/tabs/Request">
            <ion-icon aria-hidden="true" :icon="clipboardOutline" />
            <ion-label>Request</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="Record" href="/tabs/Record">
            <ion-icon aria-hidden="true" :icon="calendarOutline" />
            <ion-label>Record</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="History" href="/tabs/History">
            <ion-icon aria-hidden="true" :icon="documentOutline" />
            <ion-label>History</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
         -->
      </ion-tabs>
    </ion-page>
  </ion-app>
</template>

<script setup lang="ts">
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonPage, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, IonBadge, IonRouterOutlet, IonAvatar, IonButton } from '@ionic/vue';
import { calendarOutline, documentOutline, home, person as user, clipboardOutline } from 'ionicons/icons';

// Simulate whether there are notifications for the Dashboard tab
const hasNotifications = true;

// Logout function
const logout = () => {
  // Implement your logout logic here
  console.log("User logged out");
};
</script>

<style scoped>
/* Sidebar background */
ion-menu {
  --background: #f5f5f5; /* Light background for sidebar */
}

/* Logo container styles */
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0; /* Increased margin for a cleaner look */
}

.logo {
  width: 120px; /* Adjusted width for simplicity */
  height: auto;
}

/* Profile section styles */
.profile-section {
  margin: 16px 0; /* Margin for spacing */
  padding: 0 16px; /* Padding for content */
  border-bottom: 1px solid #ccc; /* Divider line */
}

.username {
  font-weight: bold; /* Bold username */
  font-size: 1.2em; /* Increased font size */
}

.location {
  color: #666; /* Lighter color for location */
  font-size: 0.9em; /* Smaller font size */
}

/* Menu item styles */
.menu-item {
  --background: transparent; /* Clear background for a clean look */
  --color: #333; /* Dark text color for better contrast */
  margin: 8px 0; /* Margin between items */
  border-radius: 8px; /* Rounded corners */
  transition: background 0.2s; /* Smooth transition */
}

.menu-item:hover {
  --background: rgba(38, 97, 156, 0.1); /* Subtle hover effect */
  --color: #26619c; /* Change text color on hover */
}

/* Logout button styles */
.logout-container {
  padding: 16px; /* Padding around the button */
}

.logout-container ion-button {
  border-radius: 20px; /* Rounded corners for the button */
}

/* Tab button styles */
ion-tab-button {
  --padding-start: 10px;
  --padding-end: 10px;
  transition: transform 0.2s;
}

ion-tab-button:active {
  transform: scale(1.1);
}

ion-tab-bar {
  background: #26619c; /* Primary color for the tab bar */
}

/* Custom color for active tab */
ion-tab-button.ion-selected {
  --color: #ffffff; /* White text for selected tab */
  --color-selected: #ffd700; /* Gold for the selected tab */
}

</style>
