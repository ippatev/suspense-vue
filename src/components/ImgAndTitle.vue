<template>
  <img v-if="result.image" alt="image" :src="result.image" />
  <p>
    {{ result.answer }}
  </p>
</template>

<script lang="ts" setup>
defineProps({
  result: {
    type: Object,
    required: true,
  },
});
</script>
