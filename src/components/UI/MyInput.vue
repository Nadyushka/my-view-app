<script>

export default ({
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  }
})
</script>


<template>
  <input
      @input="updateInput"
      type="text"
      class="input"
      :value="modelValue"
  />
</template>

<style scoped>
.input {
  margin-top: 15px;
  border: 1px solid teal;
  width: 100%;
  padding: 10px 15px;
}
</style>