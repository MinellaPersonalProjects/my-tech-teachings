<script setup lang="ts">
import { ref } from 'vue';
import {Icon} from "@iconify/vue";

  const name = ref('');
  const email = ref('');
  const message = ref('');

  const submitForm = () => {
    // Handle form submission logic here
    // Access name, email, and message using name.value, email.value, and message.value
    console.log('Name:', name.value);
    console.log('Email:', email.value);
    console.log('Message:', message.value);
  };
</script>

<template>
    <v-row>
      <v-col cols="12" sm="6" md="8" lg="8">
        <v-card class="elevation-10" style="position: relative;">
          <v-col cols="8">
            <v-card-text style="margin-top: 20px;">
              <v-form @submit="submitForm">
                <v-text-field v-model="name" label="Name"></v-text-field>
                <v-text-field v-model="email" label="Email"></v-text-field>
                <v-textarea v-model="message" label="Message"></v-textarea>
                <v-card-item>
                  <template v-slot:append>
                    <v-btn type="submit" color="primary">Submit</v-btn>
                  </template>
                </v-card-item>
              </v-form>
            </v-card-text>
          </v-col>
          <v-col cols="4">
            <v-sheet height="100%"></v-sheet>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <v-card class="elevation-12" height="80%" style="position: relative; left: -240px; margin-top: 60px;">
          <v-card-text class="container">
            <h2 class="row">Contact Us</h2>
            <v-row>
              <v-col cols="12">
                <p>nmogbo2001@gmail.com</p>
              </v-col>
            </v-row>
            <v-row class="row">
              <v-col cols="4">
                <Icon icon="mdi:github" />
              </v-col>
              <v-col cols="4">
                <Icon icon="openmoji:youtube" />
              </v-col>
              <v-col cols="4">
                <Icon icon="simple-icons:x" />
              </v-col>
            </v-row>
          </v-card-text>
<!--          <v-card-text>-->
<!--&lt;!&ndash;            <p><strong>Email:</strong> contact@example.com</p>&ndash;&gt;-->
<!--&lt;!&ndash;            <p><strong>Phone:</strong> +1 (123) 456-7890</p>&ndash;&gt;-->
<!--          </v-card-text>-->
        </v-card>
      </v-col>
    </v-row>
</template>

<style scoped>
.container {
  height: 100%; /* Set container to full viewport height */
  display: flex; /* Use flexbox layout */
  justify-content: center; /* Center contents horizontally */
  align-items: center; /* Center contents vertically */
}

.row {
  flex-direction: column; /* Set row direction to vertical */
}
</style>