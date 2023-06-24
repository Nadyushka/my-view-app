<script>
import toggleMixin from "@/mixins/toggle-mixin";

export default {
  name: "my-dialog",
  mixins: [toggleMixin]
}
</script>

<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;

  .dialog__content {
    height: 200px;
    width: 300px;
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    margin: auto;
  }
}


</style>