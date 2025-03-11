<template>
    <!-- Header with contact info -->
    <header class="py-4 px-4 md:px-8 lg:px-16 bg-base-100 font-pop">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="flex items-center mb-4 md:mb-0">
          <div class="mr-4">
            <img
              src="/assets/images/enfedam/enfedam-logo.jpg"
              alt="Enfedam Academy Logo"
              class="h-16"
            />
          </div>
          <div>
            <h1 class="text-2xl md:text-3xl font-bold text-[#00416A] font-pop">
              Enfedam Academy
            </h1>
            <p class="text-gray-600">Moulding Future Leaders</p>
          </div>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-grotesk">
          <div class="flex items-center">
            <div class="text-[#f59e0b] mr-2">
              <BookOpenCheck class="h-6 w-6" />
            </div>
            <div>
              <p class="font-semibold">No 6 Saabhi Hotel Street</p>
              <p class="text-gray-500">Mararaba, Nasarawa State</p>
            </div>
          </div>
  
          <div class="flex items-center">
            <div class="text-[#f59e0b] mr-2">
              <Phone class="h-6 w-6" />
            </div>
            <div>
              <p class="font-semibold">07030065113 & 08132828531</p>
              <p class="text-gray-500">Mon-Fri 7:30am-3:00pm</p>
            </div>
          </div>
  
          <div class="flex items-center">
            <div class="text-[#f59e0b] mr-2">
              <Mail class="h-6 w-6" />
            </div>
            <div>
              <p class="font-semibold">enfedamacademy@gmail.com</p>
              <p class="text-gray-500">24/7 Online Support</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  
    <!-- Navigation --> 
    <nav class="bg-[#00416A] py-2 px-4 md:px-8 lg:px-16 sticky top-0 z-50 font-pop text-white">
      <div class="container mx-auto flex flex-wrap justify-between items-center">
        <div class="flex flex-wrap items-center space-x-6">
          <NuxtLink to="/" class="py-2 hover:text-[#f59e0b] transition-colors">Home</NuxtLink>
          <NuxtLink to="/#about" class="py-2 hover:text-[#f59e0b] transition-colors">About us</NuxtLink>
          <NuxtLink to="/#admissions" class="py-2 hover:text-[#f59e0b] transition-colors">Admissions</NuxtLink>
          <NuxtLink to="/#news" class="py-2 hover:text-[#f59e0b] transition-colors">News & Events</NuxtLink>
          <NuxtLink to="/#gallery" class="py-2 hover:text-[#f59e0b] transition-colors">Gallery</NuxtLink>
          <NuxtLink to="/#contact" class="py-2 hover:text-[#f59e0b] transition-colors">Contact</NuxtLink>
        </div>
        <div class="flex items-center gap-4">
          <NuxtLink
            to="/#admissions"
            class="btn btn-warning rounded-full border-white border-2 font-medium bg-[#f59e0b] px-4 py-1 text-[#00416A]"
          >
            Join us Today
          </NuxtLink>
          <NuxtLink
            to="/"
            class="btn btn-warning rounded-full border-2 border-[#f59e0b] bg-white font-medium px-4 py-1 text-[#00416A]"
          >
            Log in
          </NuxtLink>
        </div>
      </div>
    </nav>
  </template>
  