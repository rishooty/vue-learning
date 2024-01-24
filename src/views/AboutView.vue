<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MessageButton @message="handleMessage" />
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import MessageButton from './MessageButton.vue'

export default {
  components: {
    MessageButton
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    handleMessage(message) {
      alert(message)
    },
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
