 
<script setup lang="ts">
import SidebarView from '@/components/sidebar/SidebarView.vue'
import SlideInTransition from '@/components/transitions/SlideInTransition.vue';
import CancelIcon from '@/components/icons/CancelIcon.vue'
import { useMainStore } from '@/stores/index'
import { computed } from 'vue';

const mainStore = useMainStore()
const showMenu = computed(() => mainStore.showMenu)
</script>

<template>
  <div v-if="showMenu" class="fixed inset-0 bg-slate-600">
    <CancelIcon class="absolute cursor-pointer top-4 right-4 w-6 h-6 text-white" @click="mainStore.toggleShowMenu()" />
    <SlideInTransition>
      <SidebarView />
    </SlideInTransition>
  </div>
</template>
 
<style scoped>
 
</style>