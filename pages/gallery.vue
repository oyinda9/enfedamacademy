<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 font-pop">
    <!-- Gallery Header Section -->
    <section class="relative py-20 bg-black/50 text-white overflow-hidden">
      <!-- Background image with overlay -->
      <div class="absolute inset-0 z-0">
        <img
          src="../public/assets/images/enfedam/IMG-20241023-WA0187.jpg"
          alt="Gallery Background"
          class="w-full h-full object-cover opacity-30"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-shadow-lg"
          >
            Our Gallery
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Explore moments of learning, creativity, and achievement at Enfedam
            Academy.
          </p>
          <div
            class="w-40 h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mx-auto rounded-full shadow-lg"
          ></div>
        </div>
      </div>
    </section>
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div>
          <!-- Loader -->
          <div v-if="isLoading" class="flex justify-center items-center h-64">
            <div
              class="w-12 h-12 border-4 border-purple-500 border-dashed rounded-full animate-spin"
            ></div>
          </div>

          <!-- Gallery -->
          <div
            v-else
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <div
              v-for="image in galleryImages"
              :key="image.id"
              class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                :src="image.url"
                :alt="image.filename"
                class="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-300"
              />
              
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>

    <div className="join">
      <button className="join-item btn">1</button>
      <button className="join-item btn">2</button>
      <button className="join-item btn btn-disabled">...</button>
      <button className="join-item btn">99</button>
      <button className="join-item btn">100</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface GalleryImage {
  id: number;
  url: string;
  filename: string;
  description?: string; // optional
}

const galleryImages = ref<GalleryImage[]>([]);
const isLoading = ref(true);

const fetchGalleryImages = async () => {
  try {
    const res = await axios.get(
      "https://enfedam-backend.onrender.com/gallery/gallery"
    );
    galleryImages.value = res.data;
  } catch (error) {
    console.error("Failed to fetch images:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchGalleryImages);
</script>
