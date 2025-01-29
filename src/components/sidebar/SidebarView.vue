<template>
  <div class="h-screen w-72 bg-[var(--bg-secondary)]">
    <div class="logo p-4 border-b-[1px] border-b-gray-500 text-2xl">
      <p class="uppercase text-[var(--primary-text-color)] italic"><i>Taskflexx</i></p>
    </div>

    <div class="text-center">
      <Button class="mx-auto my-12 w-[70%]">Add Task</Button>
    </div>

    <GrpDropFadeTransition>
      <li class="list" v-for="(menu, idx) in menuList" :key="idx" :data-index="idx">
        <RouterLink
          :to="menu.link" 
          class="flex items-center gap-4 p-4 border-r-0 hover:border-r-8 border-solid border-[var(--primary-color)] hover:text-[var(--primary-color)] text-[var(--primary-text-color)]"
          @click="mainStore.toggleShowMenu()"
        >
          <component :is="menu.icon" class="w-6 h-6" />
          <p>{{ menu.name }}</p>
        </RouterLink>
      </li>
    </GrpDropFadeTransition>
  </div>
</template>
 
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Component } from 'vue'
import GrpDropFadeTransition from '@/components/transitions/GrpDropFadeTransition.vue'
import Button from '@/components/common/Button.vue'
import TasksIcon from '@/components/icons/TaskIcon.vue'
import ProfileIcon from '@/components/icons/ProfileIcon.vue'
import CalendarIcon from '@/components/icons/CalendarIcon.vue'
import { useMainStore } from '@/stores/index'

const mainStore = useMainStore()

interface menuListType {
  name: string;
  link: string;
  icon: Component;
}

const menuList: menuListType[] = [
  {
    name: "Tasks",
    link: "/tasks",
    icon: TasksIcon
  },
  {
    name: "Profile",
    link: "/profile",
    icon: ProfileIcon
  },
  {
    name: "Calendar",
    link: "/calendar",
    icon: CalendarIcon
  }
]
</script>
 
<style>
.router-link-active {
  @apply border-r-8 text-[var(--primary-color)]
}
</style>