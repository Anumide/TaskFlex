<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarLogic from '@/components/sidebar/SidebarLogic.vue'
import FadeInTransition from '@/components/transitions/FadeInTransition.vue'

</script>

<template>
  <div class="flex flex-col md:flex-row">
    <SidebarLogic />
    <router-view v-slot="{ Component }">
      <FadeInTransition>
        <component :is="Component" />
      </FadeInTransition>
    </router-view>
  </div>
</template>

<style>
* {
  @apply transition-all duration-100 ease-linear;
}
</style>
