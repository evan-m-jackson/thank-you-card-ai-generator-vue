<script setup>
import WelcomeItem from './WelcomeItem.vue'

import { PencilSquareIcon, PlayCircleIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <PlayCircleIcon />
    </template>
    <template #heading><a>Generate All Cards</a></template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <UserCircleIcon />
    </template>
    <template #heading><a>People Database</a></template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <PencilSquareIcon />
    </template>
    <template #heading><a>Prompt Message</a></template>
  </WelcomeItem>
</template>
