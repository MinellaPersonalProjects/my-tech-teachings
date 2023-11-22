<script setup lang="ts">
import { ref } from 'vue';
import {Icon} from "@iconify/vue";
import { useDisplay } from 'vuetify'
import {useSocialsStore} from "~/store/socials";

// for small displays and upward you can set custom values
const { smAndUp } = useDisplay()

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = async () => {
  // Handle form submission logic here
  // Access name, email, and message using name.value, email.value, and message.value
  try {
    console.log('Name:', name.value);
    console.log('Email:', email.value);
    console.log('Message:', message.value);

    const { $csrfFetch } = useNuxtApp()

    const { body } = await $csrfFetch('/api/sendemail', {
      method: 'post',
      body: { name: name.value, email:email.value, message:message.value }
    })

    // Handle the successful response
    console.log('Response:', body);
  } 
  catch (error) {
    // Handle any errors
    console.error('Error sending email:', error);
  }
  
};

const socials = useSocialsStore()
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="9" lg="9" xl="9">
        <v-card
            class="elevation-3"
            style="position: relative; margin-bottom: 10px;">
          <v-col cols="12" sm="12" md="9" lg="9" xl="9">
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
      <v-col cols="12" sm="12" md="3" lg="3" xl="3">
        <v-card
            class="elevation-5 "
            color="primary"
            :style="{position: 'relative', left: smAndUp ? '-150px' : '0', width: smAndUp ? '250px' : '100', height: smAndUp ? '80%' : '250px'}"
            style="margin-top: 60px;"
        >
          <v-card-text
              class="text-center"
              :style="{marginTop: smAndUp ? '40%' : '20%'}"
          >
            <v-row align="center" justify="center">
              <h2>Contact Me</h2>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="12">
                <p :href="socials.gmail" target="_blank">nmogbo2001@gmail.com</p>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="3">
                <Icon
                    icon="mdi:github"
                    style="font-size: 36px;"
                    :href="socials.github"
                    target="_blank"
                />
              </v-col>
              <v-col cols="3">
                <Icon
                    icon="openmoji:youtube"
                    style="font-size: 36px;"
                    :href="socials.youtube"
                    target="_blank"
                />
              </v-col>
              <v-col cols="3">
                <Icon
                    icon="simple-icons:x"
                    style="font-size: 30px;"
                    :href="socials.twitter"
                    target="_blank"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
