<script setup>
import WelcomeItem from './WelcomeItem.vue'

import { HomeIcon, PencilSquareIcon, PlayCircleIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <HomeIcon />
    </template>
    <template #heading><RouterLink to="/">Home</RouterLink></template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <PlayCircleIcon />
    </template>
    <template #heading><RouterLink to="/generate-cards">Generate All Cards</RouterLink></template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <UserCircleIcon />
    </template>
    <template #heading><RouterLink to="/people">People Database</RouterLink></template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <PencilSquareIcon />
    </template>
    <template #heading><RouterLink to="/prompt">Prompt Message</RouterLink></template>
  </WelcomeItem>
</template>
