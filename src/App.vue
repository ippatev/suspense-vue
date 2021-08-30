<template>
  <div>
    <suspense>
      <template #default>
        <ImgAndTitle :result="result"></ImgAndTitle>
      </template>
      <template #fallback> <div>Loading...</div> </template>
    </suspense>
    <button @click="onRefresh()">Refresh</button>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onMounted, unref } from "@vue/runtime-core";
import useAxios from "@/composable/useAxios";
import { ref } from "vue";
const { axios } = useAxios();
const ImgAndTitle = defineAsyncComponent(
  () => import("@/components/ImgAndTitle.vue")
);

const result = ref("");

onMounted(async () => {
  result.value = await axios.get("https://yesno.wtf/api").then((r) => r.data);
});

const onRefresh = async () => {
  result.value = await axios.get("https://yesno.wtf/api").then((r) => {
    return r.data;
  });
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  text-align: center;
  margin: 0;
  margin-top: 20px;
}

button {
  margin-top: 20px;
}
</style>
