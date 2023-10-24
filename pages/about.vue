<!--::about-header-->
<!-- -&#45;&#45;-->
<!--title: 'Hi I am Nkem.'-->
<!--summary:-->
<!-- - "Professional Title: Software Engineer"-->
<!-- - "Location: Chicago, IL"-->
<!-- - "Experience: 2 years in software development"-->
<!-- - "Skills: Python, JavaScript, Golang, Terraform, VueJS, Docker, Kubernates, AWS Sagemaker, MongoDB, SQL, DynamoDB"-->
<!--myImage: '/img/my_image.jpg'-->
<!--publishDate: 16 Oct 2023-->
<!--publishDateTime: 2023-10-16:17:30-->
<!-- -&#45;&#45;-->
<!--::-->


<!--::about-body-->
<!--I am an aspiring and dedicated software engineer with 2 years of hands-on experience in software development. Despite my relatively short time in the industry, I have had the opportunity to work on several interesting projects that have honed my skills and problem-solving abilities.-->
<!--::-->

<!--::about-body-->
<!--I hold a BSc in Software Engineering from Loyola University Chicago, and I am enthusiastic about staying up-to-date with the latest trends in technology. Throughout my career, I've had the privilege of actively contributing to projects at CCC Intelligent Solutions and Ontoadaptive LLC. My journey has included immersive experiences in the dynamic realms of Web Development and AI Platform Development. Notably, I participated in the development of a cutting-edge AI Platform utilizing AWS SageMaker, equipping our organization with advanced machine learning capabilities. Additionally, I designed and delivered a range of Vue WebApps, each serving as a captivating showcase of our AI applications, further establishing my prowess in the field.-->
<!--::-->

<!--::about-body-->
<!--I'm committed to continuous learning and growth, regularly participating in online courses and coding projects to expand my skill set. Beyond coding, I enjoy sharing my knowledge through technical blogs, articles and videos, which you can find on my website.-->
<!--::-->

<!--::about-body-->
<!--While I'm still early in my career, I'm highly motivated to take on new challenges and explore innovative solutions. I'm always open to networking, collaboration, and new opportunities. Don't hesitate to reach out to me at nmogbo2001@gmail.com for any inquiries or potential collaborations.-->
<!--::-->
<script setup>
defineProps({
  title: {
    type: String,
    default: 'Hello World!',
  },
  summary: {
    type: Array,
    default: () => [
      'An introductory blog post',
      'List item 2',
      'List item 3',
    ],
  },
  myImage: {
    type: String,
    default: '/img/my_image.jpg',
  },
  publishDate: {
    type: String,
    default: '04 March 2023',
  },
  publishDateTime: {
    type: String,
    default: '2023-03-04:17:30',
  },
})

// const profile = new URL(myImage, import.meta.url).href
</script>
<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="6">
        <div class="image-container">
          <img
              :src="myImage"
              class="custom-img"
          />
          <!-- </img> -->
          <!-- <slot name="image" aspect-ratio="1"></slot> -->
          <!-- <ContentSlot :use="$slots.image" unwrap="img" /> -->
        </div>
      </v-col>
      <v-col cols="6">
        <v-row >
          <v-col cols="12">
            <h1>{{ title }}</h1>
          </v-col>
          <v-col cols="12">
            <div
                v-for="(item, i) in summary"
                :key="i"
                :value="item"
            >
              <p class="name">
                <v-icon icon="mdi-square-small"></v-icon>
                {{ item }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.custom-img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  object-fit: contain;
}
.name{
  font-style: normal;
  font-size: 20px;
  font-family: "Noto Sans Oriya";
  font-weight: 300;
  line-height: 1.25;
  padding-top: 10px;
  color: black;
}
.image-container {
  height: 40vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

</style>