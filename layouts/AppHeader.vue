<template>
    <v-row>
        <v-col cols="1">
            <v-btn
                variant="text"
                class="btn positioning"
                to="/about"
            >About</v-btn>
        </v-col>
        <v-col cols="1">
            <v-btn
                variant="text"
                class="btn positioning"
                to="/blogs"
            >Blogs</v-btn>
        </v-col>
        <v-col cols="1">
            <v-btn
                variant="text"
                class="btn positioning"
                to="/contact"
            >Contact</v-btn>
        </v-col>
        <v-col cols="1" >
            <v-btn
                variant="text"
                class="btn positioning"
            >Resume</v-btn>
            <!-- <v-btn variant="text" color="#FF66CC" class="btn positioning">Resume</v-btn> -->
        </v-col>
        <v-spacer></v-spacer>
        
        <v-col cols="8">
            <v-row justify="end">
              <!-- <color-mode-switch :size="'w-8 h-8'" :spacing="'p-0'"/> -->
              <h3 class="name name_positioning" @click="router.push('/')">Nkem's Tech Teachings</h3>
            </v-row>
        </v-col>
    </v-row>

</template>
<style lang="scss">
.btn {
  text-transform: unset !important;
  font-style: normal;
  font-family: "Noto Sans Oriya",sans-serif;
  font-weight: 700;
  margin-top: 5px;
}
.name{
    font-style: normal;
    font-size: 30px;
    font-family: "Noto Sans Oriya",sans-serif;
    font-weight: 700;
    line-height: 1.25;
    padding-top: 2px;
    color: #757575;
  }
  .positioning{
    padding-top: 1px;
    margin-top: 10px
  }
  .name_positioning{
    padding-top: 10px;
    margin-top: 10px
  }
</style>
<script setup lang="ts">
  const router = useRouter()
</script>