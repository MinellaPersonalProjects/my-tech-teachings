<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useDisplay } from "vuetify";
import { useSocialsStore } from "~/store/socials";

// for small displays and upward you can set custom values
const { mdAndUp, smAndUp } = useDisplay();

const name = ref("");
const email = ref("");
const message = ref("");

const submitForm = async () => {
  // Handle form submission logic here
  // Access name, email, and message using name.value, email.value, and message.value
  try {
    console.log("Name:", name.value);
    console.log("Email:", email.value);
    console.log("Message:", message.value);

    const { $csrfFetch } = useNuxtApp();

    // const { body } = await $csrfFetch('/api/sendemail', {
    //   method: 'post',
    //   body: { name: name.value, email:email.value, message:message.value }
    // })

    const { body } = await $csrfFetch("/.netlify/functions/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    // Handle the successful response
    const data = await body.value.json();
    console.log("Response:", data);
  } catch (error) {
    // Handle any errors
    console.error("Error sending email:", error);
  }
};

const socials = useSocialsStore();
</script>

<template>
  <v-container fluid>
    <h1 class="text-center">Contact Me</h1>
    <v-row justify="center" align="center" class="my-5">
      <v-col cols="12" md="auto">
        <v-card
          class="elevation-3 text-center"
          variant="outlined"
          style="margin-bottom: 10px"
          width="100%"
        >
          <v-card-text style="margin-top: 20px">
            <v-row>
              <v-col cols="12" sm="7" md="7" lg="7" xl="7">
                <v-form @submit="submitForm">
                  <v-text-field
                    v-model="name"
                    label="Name"
                    variant="outlined"
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    label="Email"
                    variant="outlined"
                  ></v-text-field>
                  <v-textarea
                    v-model="message"
                    label="Message"
                    variant="outlined"
                  ></v-textarea>
                  <v-card-item>
                    <template v-slot:append>
                      <v-btn type="submit" color="primary">Submit</v-btn>
                    </template>
                  </v-card-item>
                </v-form>
              </v-col>
              <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                <h4>Contact</h4>
                <p
                  :href="socials.gmail"
                  target="_blank"
                  style="font-size: 14px"
                >
                  minnoella2001@gmail.com
                </p>
                <v-spacer />
                <br />
                <v-row align="center" justify="center">
                  <v-col cols="3">
                    <Icon
                      icon="mdi:github"
                      style="font-size: 36px"
                      :href="socials.github"
                      target="_blank"
                    />
                  </v-col>
                  <v-col cols="3">
                    <Icon
                      icon="openmoji:youtube"
                      style="font-size: 36px"
                      :href="socials.youtube"
                      target="_blank"
                    />
                  </v-col>
                  <v-col cols="3">
                    <Icon
                      icon="simple-icons:x"
                      style="font-size: 30px"
                      :href="socials.twitter"
                      target="_blank"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
