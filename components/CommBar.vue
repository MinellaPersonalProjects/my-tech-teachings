<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const route = useRoute();

const expand = ref(false);
const path = route?.path;

const props = defineProps({ atBottom: Boolean });
const isAtBottom = ref(false);

watch(
  () => props.atBottom,
  (value) => {
    isAtBottom.value = value;
  }
);

const website = "https://nkems-tech-teachings.com/";
const items = [
  {
    icon: "mdi-link-variant",
    text: "Permalink",
    link: `${website}/${path}`,
  },
  {
    icon: "mdi-facebook",
    text: "Facebook",

    link: `https://www.facebook.com/sharer/sharer.php?u=${website}/${path}`,
  },
  {
    icon: "mdi-twitter",
    text: "Twitter",
    link: `https://twitter.com/intent/tweet?text=Check%20this%20out!&url=${website}/${path}`,
  },
  {
    icon: "mdi-linkedin",
    text: "LinkedIn",
    link: `https://www.linkedin.com/sharing/share-offsite/?url=${website}/${path}`,
  },
  {
    icon: "mdi-whatsapp",
    text: "WhatsApp",
    link: `https://api.whatsapp.com/send?text=Check%20this%20out!%20${website}/${path}`,
  },
];
</script>
<template>
  <div>
    <v-btn-toggle
      :variant="!isAtBottom ? 'elevated' : 'outlined'"
      divided
      rounded="pill"
      :elevation="!isAtBottom ? 10 : 1"
      class="sticky-btn mb-3"
      :class="{
        freeze: isAtBottom,
        active: !isAtBottom,
        animation: true,
      }"
    >
      <v-btn
        ><v-icon>mdi-comment-outline</v-icon
        ><v-tooltip activator="parent" location="top">
          Comment
        </v-tooltip></v-btn
      >
      <v-btn @click="expand = !expand">
        <v-icon>mdi-export-variant</v-icon>
        <v-tooltip activator="parent" location="top"> Share Post </v-tooltip>
        <v-menu activator="parent">
          <v-card width="200" variant="outlined">
            <v-list density="compact">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :value="item"
                :href="item.link"
                target="_blank"
                color="primary"
              >
                <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>

                {{ item.text }}
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>
