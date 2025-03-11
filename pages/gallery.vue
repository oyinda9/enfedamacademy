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
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-shadow-lg">
              Our Gallery
            </h1>
            <p class="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Explore moments of learning, creativity, and achievement at Enfedam Academy.
            </p>
            <div class="w-40 h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mx-auto rounded-full shadow-lg"></div>
          </div>
        </div>
      </section>
  
      <!-- Gallery Grid Section -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <!-- Gallery Item 1 -->
            <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Classroom Learning"
                class="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-300"
              />
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-semibold">Classroom Learning</span>
              </div>
            </div>
  
            <!-- Gallery Item 2 -->
            <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Science Lab"
                class="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-300"
              />
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-semibold">Science Lab</span>
              </div>
            </div>
  
            <!-- Gallery Item 3 -->
            <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Sports Day"
                class="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-300"
              />
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-semibold">Sports Day</span>
              </div>
            </div>
  
            <!-- Gallery Item 4 -->
            <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Library"
                class="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-300"
              />
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-semibold">Library</span>
              </div>
            </div>
  
            <!-- Gallery Item 5 -->
            <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Art Exhibition"
                class="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-300"
              />
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-semibold">Art Exhibition</span>
              </div>
            </div>
  
            <!-- Gallery Item 6 -->
            <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Auditorium"
                class="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-300"
              />
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-semibold">Auditorium</span>
              </div>
            </div>
  
            <!-- Gallery Item 7 -->
            <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1514933651109-2af5e1c6f8e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Cafeteria"
                class="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-300"
              />
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-semibold">Cafeteria</span>
              </div>
            </div>
  
            <!-- Gallery Item 8 -->
            <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Art Studio"
                class="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-300"
              />
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span class="text-white text-lg font-semibold">Art Studio</span>
              </div>
            </div>
          </div>
        </div>
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