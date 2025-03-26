<template>
  <header class="py-4 px-4 md:px-8 lg:px-16 bg-base-100 font-pop">
    <div
      class="container mx-auto flex flex-col md:flex-row items-center justify-between"
    >
      <!-- Logo and School Name -->
      <div class="flex items-center w-full md:w-auto justify-between">
        <div class="flex items-center">
          <img
            src="/assets/images/enfedam/enfedam-logo.jpg"
            alt="Enfedam Academy Logo"
            class="h-12 md:h-16"
          />
          <div class="ml-3">
            <h1 class="text-xl md:text-3xl font-bold text-[#00416A] font-pop">
              Enfedam Academy
            </h1>
            <p class="text-gray-600 text-sm md:text-base">
              Moulding Future Leaders
            </p>
          </div>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          @click="toggleMenu"
          class="md:hidden text-[#00416A] text-2xl focus:outline-none"
        >
          <Menu />
        </button>
      </div>

      <!-- Contact Info (Hidden on Small Screens) -->
      <div
        class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-grotesk"
      >
        <div class="flex items-center">
          <BookOpenCheck class="h-5 w-5 text-[#f59e0b] mr-2" />
          <div>
            <p class="font-semibold">No 6 Saabhi Hotel Street</p>
            <p class="text-gray-500">Mararaba, Nasarawa State</p>
          </div>
        </div>

        <div class="flex items-center">
          <Phone class="h-5 w-5 text-[#f59e0b] mr-2" />
          <div>
            <p class="font-semibold">07030065113 & 08132828531</p>
            <p class="text-gray-500">Mon-Fri 7:30am-3:00pm</p>
          </div>
        </div>

        <div class="flex items-center">
          <Mail class="h-5 w-5 text-[#f59e0b] mr-2" />
          <div>
            <p class="font-semibold">enfedamacademy@gmail.com</p>
            <p class="text-gray-500">24/7 Online Support</p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Navigation -->
  <nav
    class="bg-[#00416A] py-2 px-4 md:px-8 lg:px-16 sticky top-0 z-50 font-pop text-white"
  >
    <div class="container mx-auto flex flex-wrap justify-between items-center">
      <div class="hidden md:flex space-x-6">
        <NuxtLink to="/" class="py-2 hover:text-[#f59e0b] transition-colors"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/#about"
          class="py-2 hover:text-[#f59e0b] transition-colors"
          >About us</NuxtLink
        >
        <NuxtLink
          to="/#admissions"
          class="py-2 hover:text-[#f59e0b] transition-colors"
          >Admissions</NuxtLink
        >
        <NuxtLink
          to="/#news"
          class="py-2 hover:text-[#f59e0b] transition-colors"
          >News & Events</NuxtLink
        >
        <NuxtLink
          to="/#gallery"
          class="py-2 hover:text-[#f59e0b] transition-colors"
          >Gallery</NuxtLink
        >
        <NuxtLink
          to="/#contact"
          class="py-2 hover:text-[#f59e0b] transition-colors"
          >Contact</NuxtLink
        >
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMenuOpen"
        class="md:hidden flex flex-col bg-[#00416A] absolute w-full left-0 top-14 p-4 z-50 shadow-lg"
      >
        <NuxtLink
          to="/"
          class="py-2 text-center hover:text-[#f59e0b] transition-colors"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/#about"
          class="py-2 text-center hover:text-[#f59e0b] transition-colors"
          >About us</NuxtLink
        >
        <NuxtLink
          to="/#admissions"
          class="py-2 text-center hover:text-[#f59e0b] transition-colors"
          >Admissions</NuxtLink
        >
        <NuxtLink
          to="/#news"
          class="py-2 text-center hover:text-[#f59e0b] transition-colors"
          >News & Events</NuxtLink
        >
        <NuxtLink
          to="/#gallery"
          class="py-2 text-center hover:text-[#f59e0b] transition-colors"
          >Gallery</NuxtLink
        >
        <NuxtLink
          to="/#contact"
          class="py-2 text-center hover:text-[#f59e0b] transition-colors"
          >Contact</NuxtLink
        >
      </div>

      <div class="flex items-center gap-4 sm:items-end">
        <NuxtLink
          to="/#admissions"
          class="btn btn-warning rounded-full border-white border-2 font-medium bg-[#f59e0b] px-4 py-1 text-[#00416A]"
        >
          Join us Today
        </NuxtLink>
        <NuxtLink
          to="https://enfedam-academy-management-system.vercel.app/"
          class="btn btn-warning rounded-full border-2 border-[#f59e0b] bg-white font-medium px-4 py-1 text-[#00416A]"
        >
          Log in
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { Menu, Phone, Mail, BookOpenCheck } from "lucide-vue-next";

// Mobile menu state
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
