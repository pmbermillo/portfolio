<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <v-footer>
    <v-card elevation="0" rounded="0" width="100%" class="bg-grey text-center">
      <v-card-text>
        <!-- <v-btn class="mw-4" icon="fas fa-comment" variant="plain" color="white">
        </v-btn>
        <v-btn class="mx-4" icon="fas fa-university" variant="plain" color="white">
        </v-btn> -->
      </v-card-text>
      <v-card-text class="text-white">
          @{{new Date().getFullYear()}}
          <strong>All Rights Reserved</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  <!-- <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Software Developer
    </h3>
    <p class="message">
      "Welcome! I'm passionate about the world of digital innovation and user-centric technology, driven by creativity and innovation. With a solid foundation in software development, I push boundaries and embrace new challenges. My journey blends diverse experiences, from experimenting with coding languages during my formative years to collaborating on intricate web projects with multidisciplinary teams. Collaborative and goal-oriented, I believe in teamwork's power to bring ideas to life. From optimizing website accessibility to creating intuitive user interfaces, I'm committed to making a positive impact in the web development field. Thanks for visiting – excited to share my creative journey!"
    </p>
  </div> -->
</template>

<style scoped>
.v-footer {
  padding: 8px 0 !important;
}
/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.message {
  font-style: italic;
  margin-top: 35px;
} */
</style>
