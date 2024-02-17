// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="profile">
    <h1>{{ username }}'s Profile</h1>
    <!-- You can add more profile information here -->
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.profile {
  /* Add styles for your profile page here */
}
</style>
