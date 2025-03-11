<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center p-6">
      <div v-for="(item, index) in counters" :key="index">
        <h2 class="text-4xl font-bold text-[#00416A]">{{ item.count }}+</h2>
        <p class="text-lg">{{ item.label }}</p>
      </div>
    </div>
  </template>

<script setup>
import { ref, onMounted } from "vue";

const counters = ref([
  { label: "Students", count: 0, target: 500 },
  { label: "Graduates", count: 0, target: 10 },
  { label: "Staff", count: 0, target: 32 },
  { label: "Awards", count: 0, target: 5 }
]);

const startCounter = () => {
  counters.value.forEach((counter) => {
    let start = 0;
    let increment = Math.ceil(counter.target / 100); // Adjust speed

    let interval = setInterval(() => {
      start += increment;
      if (start >= counter.target) {
        start = counter.target;
        clearInterval(interval);
      }
      counter.count = start;
    }, 30);
  });
};

onMounted(() => {
  startCounter();
});
</script>


