<template>
  <Transition name="slide-in" mode="out-in" appear>
    <slot />
  </Transition>
  </template>
   
  <script setup lang="ts">
  
  </script>
   
  <style>
  .slide-in-enter-active,
  .slide-in-leave-active {
    transition: transform 0.5s ease;
  }
  .slide-in-enter-from,
  .slide-in-leave-to {
    transform: translateX(-100%);
  }
  </style>