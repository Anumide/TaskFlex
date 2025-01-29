 
<script setup lang="ts">
import { useMainStore } from '@/stores/index'
import SidebarView from '@/components/sidebar/SidebarView.vue'
import SideBarViewMobile from '@/components/sidebar/SideBarViewMobile.vue'
import Hamburger from '@/components/icons/Hamburger.vue'

const mainStore = useMainStore()
</script>

<template>
  <div class="">
    <div class="md:hidden p-4 flex justify-between items-center">
      <Hamburger class="w-6 h-6 cursor-pointer text-[var(--primary-text-color)]" @click="mainStore.toggleShowMenu()" />
      <div class="w-12 h-12 rounded-full overflow-hidden">
        <img src="" alt="profile picture" class="object-cover w-full h-full">
      </div>
      <SideBarViewMobile />
    </div>
    <SidebarView class="hidden md:block" />
  </div>
</template>
 
<style scoped>
 
</style>