<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
})
</script>

<template>
  <router-link
    v-slot="{ isExactActive, href, navigate }"
    v-bind="$attrs"
    custom
  >
    <a
      v-bind="$attrs"
      :href="href"
      class="px-4 h-full inline-flex items-center hover:bg-primary-50 dark:hover:bg-primary-900 relative"
      :class="{
        'text-primary-500 dark:text-primary-400': isExactActive,
      }"
      @click="navigate"
    >
      <slot />

      <transition name="scale-x">
        <div
          v-if="isExactActive"
          class="absolute bottom-0 left-0 w-full h-[2px] bg-primary-500 dark:bg-primary-400"
        />
      </transition>
    </a>
  </router-link>
</template>
