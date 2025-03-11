<template>
    <div class="py-12 px-6 md:px-16">
      <!-- Hero Section -->
      <div class="text-center mb-10">
        <h1 class="text-4xl md:text-5xl font-bold text-[#1e3a8a] font-pop">
          News & Events
        </h1>
        <p class="text-lg text-gray-600 mt-2">
          Stay updated with the latest happenings at our school.
        </p>
      </div>
  
      <!-- News & Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
        <div
          v-for="(item, index) in newsEvents"
          :key="index"
          class="bg-white w-full  border-blue-950 border-2 shadow-lg rounded-lg overflow-hidden"
        >
          <img :src="item.image" alt="Event" class="w-full h-[500px] object-cover" />
          <div class="p-6">
            <h2 class="text-xl font-bold text-gray-800">{{ item.title }}</h2>
            <p class="text-sm text-gray-500 mt-2">{{ item.date }}</p>
            <p class="text-gray-600 mt-4">{{ item.description }}</p>
           
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const newsEvents = ref([
    {
      title: "Science Fair 2025",
      date: "March 25, 2025",
      description: "Join us for our annual Science Fair, showcasing student projects and innovations.",
      image: "../assets/images/enfedam/waecApproved.webp"
    },
    {
      title: "Graduation Ceremony",
      date: "June 10, 2025",
      description: "Celebrate the achievements of our graduating students.",
      image:"../assets/images/enfedam/waecApproved.webp"
    },
    {
      title: "Enfedam Academy First Interhouse sport competition 2025",
      date: "April 15, 2025",
      description: "A fun-filled day with various sports activities and competitions.",
      image: "../assets/images/enfedam/waecApproved.webp"
    }
  ]);
  </script>
  