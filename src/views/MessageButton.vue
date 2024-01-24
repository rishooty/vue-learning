<template>
  <button @click="sendMessage">Send Message</button>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      this.$emit('message', 'Hello from MessageButton')
    }
  }
}
</script>
