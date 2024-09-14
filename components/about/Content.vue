<template>
  <v-row>
    <v-col cols="12">
      <h1 class="mb-6">About Me</h1>
      <p>
        My name is Nkem, I live in Chicago, IL, and I am a Software Engineer at
        a company called
        <a href="https://cccis.com">CCC Intelligent Solutions</a>. I have had
        the opportunity to work on several interesting projects that have honed
        my skills and problem-solving abilities. My journey has included
        immersive experiences in the dynamic realms of Web Development and AI
        Platform Development.I'm committed to continuous learning and growth,
        regularly participating in online courses and coding projects to expand
        my skill set. Here is some more information about me :
      </p>
    </v-col>
    <v-col cols="12">
      <h2 id="background" class="mb-6">Background</h2>
      <h3 class="mb-3 mt-3">Education</h3>
      <p>
        I hold a B.Sc. in Software Engineering from
        <a href="https://www.luc.edu">Loyola University Chicago</a> where I
        graduated in December 2021 with Honors <i>Magna Cum Laude</i>.
      </p>
      <h3 class="mb-3 mt-3">Experience</h3>
      <p>
        During my time as a student at Loyola, I received a Mulcahy Fellowship
        Grant to research the security of DNS Over HTTPS. I presented my
        findings to my mentor and the fellowship foundation. I also had an
        8-week internship at OntoAdaptive LLC, where I conducted independent
        research on adopting a modern web stack on an existing reference
        architecture. At the end of the internship, I successfully implemented a
        React TypeScript Infrastructure as a result of my research. After
        graduating from Loyola, I was hired by CCC Intelligent Solutions and
        since February 2022, I have completed a variety of projects and roles
        from web development to AI platform development. At CCC, I started as an
        AI Enablement Intern and was later promoted to a Software Engineer. Here
        I participated in the development of a cutting-edge AI Platform. I have
        also created a host of Vue Web Apps to showcase some of the company's AI
        applications. When I am not at work, I create fun new projects, many of
        which I'll talk about in my blog. I am dedicated to learning new things
        and love creative projects.
      </p>
    </v-col>
    <v-col cols="12">
      <h2 id="skills" class="mb-6">Skills</h2>
      My skill set includes:
      <ul class="mt-3">
        <strong>Programming Languages:</strong>
        JavaScript, TypeScript, Python, Golang, C++<br />
        <strong>Web Development:</strong>
        NuxtJS, Vue.js, HTML, CSS, React, Express<br />
        <strong>Tools/Frameworks:</strong>
        Docker, Kubernetes, AWS SageMaker<br />
        <strong>Databases:</strong>
        MongoDB, SQL, DynamoDB<br />
      </ul>
    </v-col>
    <v-col cols="12">
      <h2 id="facts" class="mb-6">Some Fun Facts About Me</h2>
      <ul>
        <li>
          I was a published author at the age of 12 and sold hundreds of copies
          of my book
        </li>
        <li>I am fluent in English and conversational in French and Igbo</li>
        <li>
          I am a huge reader and can read about 200 chapters a day of novels
        </li>
        <li>I like creating fun silly coding projects just for my amusement</li>
      </ul>
    </v-col>
    <v-col cols="12">
      <h2 id="contactme">Get in Touch</h2>
      <AboutContactCards />
      <v-divider></v-divider>
      <p class="mb-6">
        Thank you for taking the time to get to know me better. I look forward
        to connecting with you and exploring new possibilities together.
      </p>
    </v-col>
  </v-row>
</template>
<style>
h1 {
  font-size: 24px;
}

h2 {
  font-size: 20px;
}

p {
  font-size: 16px;
}

li {
  margin-left: 25px;
}
</style>