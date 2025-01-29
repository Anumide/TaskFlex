<template>
<TransitionGroup 
  tag="ul" 
  name="drop-fade"
  appear
  mode="out-in"
  @enter="onEnter"
>
  <slot />
</TransitionGroup>
</template>
 
<script setup lang="ts">
function onEnter(el: Element) {
  el.style['transition-delay'] = el.dataset.index * 0.2 + 's'
}
</script>
 
<style>
.drop-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.drop-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.drop-fade-enter-to,
.drop-fade-leave-from{
  opacity: 1;
  transform: translateY(0);
}
.drop-fade-enter-active,
.drop-fade-leave-active{
  transition: all 0.55s ease;
}
</style>