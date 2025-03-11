<template>
  <div class="">
    <!-- Hero Section -->
    <section class="relative h-[500px] font-pop">
      <div class="absolute inset-0 bg-black/50 z-10"></div>
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="
          background-image: url('/assets/images/enfedam/IMG-20240927-WA0006.jpg');
        "
      ></div>

      <div
        class="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4 font-pop"
      >
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold font-pop mb-4">
          Welcome to Enfedam Academy
        </h2>
        <p class="text-xl md:text-2xl mb-8 font-poppins">
          Elevating Your Child's Well-Being Is Our Top Priority
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="#about"
            class="border-2 border-white text-white bg-[#00416A] w-[230px] px-2 py-2 rounded-full"
            >Learn more about us</a
          >
          <a
            href="#admissions"
            class="btn btn-lg bg-white text-[#00416A] hover:bg-gray-100 rounded-full px-4 py-2"
            >Join us today</a
          >
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="grid grid-cols-1 md:grid-cols-4">
      <!-- Feature 1 -->
      <div
        class="bg-[#3f704d] text-white p-12 flex flex-col items-center justify-center text-center"
      >
        <Building2 class="w-16 h-16 mb-4" />
        <h3 class="text-xl font-semibold">Conducive Learning Environment</h3>
      </div>

      <!-- Feature 2 -->
      <div
        class="bg-[#1e3a8a] text-white p-12 flex flex-col items-center justify-center text-center"
      >
        <BookOpen class="w-16 h-16 mb-4" />
        <h3 class="text-xl font-semibold">Fully Equipped Library</h3>
      </div>

      <!-- Feature 3 -->
      <div
        class="bg-[#b7801a] text-white p-12 flex flex-col items-center justify-center text-center"
      >
        <User class="w-16 h-16 mb-4" />
        <h3 class="text-xl font-semibold">Experienced Teacher</h3>
      </div>

      <!-- Feature 4 -->
      <div
        class="bg-[#a03a8c] text-white p-12 flex flex-col items-center justify-center text-center"
      >
        <FlaskConical class="w-16 h-16 mb-4" />
        <h3 class="text-xl font-semibold">Fully functional laboratories</h3>
      </div>
    </section>

    <!-- About Section -->
    <section
      id="about"
      class="py-16 px-4 md:px-8 lg:px-16 bg-base-100 font-pop"
    >
      <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          <!-- School Image 1 -->
          <div class="col-span-2 md:col-span-1 relative">
            <div class="relative">
              <img
                src="../assets/images/enfedam/imgb2.jpg"
                alt="School Building"
                class="w-full h-64 object-cover rounded-lg shadow-lg"
                style="border-bottom-right-radius: 40px; overflow: hidden"
              />
            </div>

            <!-- Video (Bottom-Right Corner) -->
            <div
              class="absolute top-[160px] -right-[200px] shadow-2xl shadow-amber-50"
            >
              <video
                ref="video"
                src="https://your-video-url.mp4"
                class="w-[300px] h-[150px] md:h-[200px] object-cover rounded-lg shadow-lg"
                poster="../assets/images/enfedam/stud.jpg"
              ></video>

              <!-- Play Button Overlay -->
              <div
                v-if="!isPlaying"
                class="absolute inset-0 flex items-center justify-center"
              >
                <div
                  @click="playVideo"
                  class="bg-white rounded-full p-3 cursor-pointer hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <!-- Play Icon (Replace with your icon component or SVG) -->
                  <svg
                    class="w-6 h-6 text-[#1e3a8a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- 10+ Years Box -->
          <div
            class="bg-[#f59e0b] text-white p-6 flex flex-col w-[250px] h-[120px] items-center justify-center text-center rounded-2xl shadow-lg"
          >
            <h3 class="text-4xl font-bold">10+</h3>
            <p class="text-sm">Years Of Nurturing Future Leaders</p>
          </div>

          <!-- Experienced Teachers Box -->
          <div
            class="bg-[#f59e0b] text-white flex flex-col w-[200px] h-[80px] items-center justify-center text-center rounded-full shadow-lg mb-[120px]"
          >
            <h3 class="text-sm font-semibold">Experienced Teachers</h3>
          </div>
        </div>

        <div class="space-y-8 ml-[80px]">
          <div>
            <h2 class="text-4xl font-bold text-[#1e3a8a] mb-4">About Us</h2>
            <p class="text-gray-700">
              Founded in 2014, Enfedam Academy stands as a beacon of educational
              excellence and holistic development.
            </p>
          </div>

          <div class="space-y-6 ml-[12px]">
            <div class="flex items-start gap-4">
              <div class="bg-[#1e3a8a] rounded-full p-1 mt-1">
                <Circle class="w-4 h-4 text-white" />
              </div>
              <p class="text-gray-700">
                Our mission is to foster a dynamic learning environment that
                empowers students to achieve their highest potential, both
                academically and personally.
              </p>
            </div>

            <div class="flex items-start gap-4">
              <div class="bg-[#1e3a8a] rounded-full p-1 mt-1">
                <Circle class="w-4 h-4 text-white" />
              </div>
              <p class="text-gray-700">
                At Enfedam Academy, we believe in the power of quality education
                to transform lives.
              </p>
            </div>

            <div class="flex items-start gap-4">
              <div class="bg-[#1e3a8a] rounded-full p-1 mt-1">
                <Circle class="w-4 h-4 text-white" />
              </div>
              <p class="text-gray-700">
                Our curriculum blends academic excellence with extracurricular
                activities, fostering creativity, leadership, and innovation.
              </p>
            </div>

            <div class="flex items-start gap-4">
              <div class="bg-[#1e3a8a] rounded-full p-1 mt-1">
                <Circle class="w-4 h-4 text-white" />
              </div>
              <p class="text-gray-700">
                We nurture a culture of integrity, respect, and inclusivity,
                ensuring that every student thrives in a supportive learning
                environment.
              </p>
            </div>

            <div class="flex items-start gap-4">
              <div class="bg-[#1e3a8a] rounded-full p-1 mt-1">
                <Circle class="w-4 h-4 text-white" />
              </div>
              <p class="text-gray-700">
                Enfedam Academy equips students with 21st-century skills,
                preparing them for higher education and successful careers.
              </p>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex justify-between items-center mt-6">
            <button @click="scrollToTop" class="btn btn-warning btn-square">
              <ChevronUp class="w-6 h-6 text-white" />
            </button>

            <NuxtLink
              to="/about-us"
              class="px-6 py-2 text-white bg-[#00416A] rounded-lg hover:bg-[#15317e] inline-block text-center"
            >
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  
    <!-- Our Vision & Mission -->
    <!-- <section class="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-[#1e3a8a] mb-4">
            Our Vision & Mission
          </h2>
          <div class="w-24 h-1 bg-[#f59e0b] mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="flex justify-center mb-4">
                <div class="bg-[#1e3a8a] p-4 rounded-full">
                  <Eye class="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 class="text-2xl font-bold text-center mb-4">Our Vision</h3>
              <p class="text-gray-700 text-center">
                To be the leading educational institution that nurtures future
                leaders with strong moral values, academic excellence, and a
                global mindset, empowering them to make positive contributions
                to society.
              </p>
            </div>
          </div>

          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="flex justify-center mb-4">
                <div class="bg-[#f59e0b] p-4 rounded-full">
                  <Target class="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 class="text-2xl font-bold text-center mb-4">Our Mission</h3>
              <p class="text-gray-700 text-center">
                To provide a holistic education that balances academic rigor
                with character development, fostering critical thinking,
                creativity, and a passion for lifelong learning in a safe and
                supportive environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <section
      class="py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden font-pop"
    >
      <!-- Background gradient and decorative elements -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-0"
      ></div>

      <!-- Decorative floating shapes -->
      <div
        class="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-yellow-300 opacity-10 animate-float"
      ></div>
      <div
        class="absolute bottom-20 right-[15%] w-40 h-40 rounded-full bg-blue-300 opacity-10 animate-float-delay"
      ></div>
      <div
        class="absolute top-1/3 right-[20%] w-24 h-24 rounded-full bg-pink-300 opacity-10 animate-float-slow"
      ></div>
      <div
        class="absolute bottom-1/4 left-[25%] w-20 h-20 rounded-full bg-green-300 opacity-10 animate-float-delay-slow"
      ></div>

      <div class="container mx-auto relative z-10">
        <!-- Header with decorative elements -->
        <div class="text-center mb-16 relative">
          <h2
            class="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6 relative z-10"
          >
            Our Vision & Mission
          </h2>

          <!-- Decorative underline with gradient -->
          <div class="relative h-2 w-48 mx-auto rounded-full overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#f59e0b] via-[#f97316] to-[#f59e0b] animate-gradient"
            ></div>
          </div>
        </div>

        <!-- Cards with enhanced aesthetic design -->
        <div class="max-w-4xl mx-auto flex gap-12">
          <!-- Vision Card -->
          <div
            class="bg-white h-[500px] rounded-3xl shadow-xl overflow-hidden mb-12 transform transition-all duration-300 hover:scale-102 hover:shadow-2xl relative group"
          >
            <!-- Top decorative border with gradient -->
            <div
              class="h-2 w-full bg-gradient-to-r from-blue-400 to-indigo-600"
            ></div>

            <!-- Card content with enhanced styling -->
            <div class="p-8 md:p-10">
              <div class="flex justify-center mb-8 relative">
                <!-- Decorative ring around icon -->
                <div
                  class="absolute inset-0 rounded-full bg-blue-100 transform scale-150 opacity-0 group-hover:opacity-30 transition-all duration-500"
                ></div>

                <!-- Icon container with gradient -->
                <div
                  class="relative bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] p-5 rounded-full shadow-lg transform group-hover:rotate-12 transition-transform duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-white"
                  >
                    <path
                      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
              </div>

              <!-- Title with decorative elements -->
              <div class="text-center mb-6 relative">
                <h3 class="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-2">
                  Our Vision
                </h3>
                <!-- Small decorative dots -->
                <div class="flex justify-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                </div>
              </div>

              <!-- Content with enhanced typography -->
              <p
                class="text-gray-700 text-center text-lg leading-relaxed max-w-2xl mx-auto"
              >
                To be the leading educational institution that nurtures future
                leaders with strong moral values, academic excellence, and a
                global mindset, empowering them to make positive contributions
                to society.
              </p>

              <!-- Decorative corner elements -->
              <div
                class="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-bl-full opacity-30 transform -translate-y-12 translate-x-12"
              ></div>
              <div
                class="absolute bottom-0 left-0 w-16 h-16 bg-indigo-300 rounded-tr-full opacity-30 transform translate-y-8 -translate-x-8"
              ></div>
            </div>
          </div>

          <!-- Mission Card -->
          <div
            class="bg-white h-[500px] rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-2xl relative group"
          >
            <!-- Top decorative border with gradient -->
            <div
              class="h-2 w-full bg-gradient-to-r from-amber-400 to-orange-600"
            ></div>

            <!-- Card content with enhanced styling -->
            <div class="p-8 md:p-10">
              <div class="flex justify-center mb-8 relative">
                <!-- Decorative ring around icon -->
                <div
                  class="absolute inset-0 rounded-full bg-amber-100 transform scale-150 opacity-0 group-hover:opacity-30 transition-all duration-500"
                ></div>

                <!-- Icon container with gradient -->
                <div
                  class="relative bg-gradient-to-br from-[#f59e0b] to-[#f97316] p-5 rounded-full shadow-lg transform group-hover:rotate-12 transition-transform duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-white"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
              </div>

              <!-- Title with decorative elements -->
              <div class="text-center mb-6 relative">
                <h3 class="text-3xl md:text-4xl font-bold text-[#f59e0b] mb-2">
                  Our Mission
                </h3>
                <!-- Small decorative dots -->
                <div class="flex justify-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-amber-300"></div>
                  <div class="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  <div class="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                </div>
              </div>

              <!-- Content with enhanced typography -->
              <p
                class="text-gray-700 text-center text-lg leading-relaxed max-w-2xl mx-auto"
              >
                To provide a holistic education that balances academic rigor
                with character development, fostering critical thinking,
                creativity, and a passion for lifelong learning in a safe and
                supportive environment.
              </p>

              <!-- Decorative corner elements -->
              <div
                class="absolute top-0 left-0 w-24 h-24 bg-amber-200 rounded-br-full opacity-30 transform -translate-y-12 -translate-x-12"
              ></div>
              <div
                class="absolute bottom-0 right-0 w-16 h-16 bg-orange-200 rounded-tl-full opacity-30 transform translate-y-8 translate-x-8"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Academic Programs -->
    <section class="py-16 px-4 md:px-8 lg:px-16 bg-base-100 font-pop">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-[#1e3a8a] mb-4">
            Academic Sections
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive curriculum is designed to nurture the
            intellectual, physical, and emotional development of each student.
          </p>
          <div class="w-24 h-1 bg-[#f59e0b] mx-auto mt-4"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- creche School -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
          >
            <figure>
              <img
                src="../assets/images/enfedam/creche.jpg"
                alt="Primary School"
                class="h-64 w-full object-cover"
              />
            </figure>
            <div class="card-body">
              <h3 class="card-title text-[#1e3a8a]">Creche</h3>
              <p class="text-gray-700">
                Our crèche is a happy place where little ones explore, play, and
                learn! With loving teachers, fun activities, and a safe space,
                we nurture curiosity and early development—making every day an
                adventure in learning!
              </p>
              <div class="card-actions justify-end mt-4">
                <NuxtLink to="/about-us">
                  <button class="bg-[#00416A] text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Nursery School -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
          >
            <figure>
              <img
                src="../assets/images/enfedam/IMG-20241023-WA0176.jpg"
                alt="Primary School"
                class="h-64 w-full object-cover"
              />
            </figure>
            <div class="card-body">
              <h3 class="card-title text-[#1e3a8a]">Nursery Section</h3>
              <p class="text-gray-800">
                Our nursery program nurtures curiosity through fun activities,
                early literacy, and hands-on learning, building a strong
                foundation for future education
              </p>
              <div class="card-actions justify-end mt-4">
                <NuxtLink to="/about-us">
                  <button class="bg-[#00416A] text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- primary Secondary -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
          >
            <figure>
              <img
                src="../assets/images/enfedam/IMG-20241023-WA0163.jpg"
                alt="Junior Secondary"
                class="h-64 w-full object-cover"
              />
            </figure>
            <div class="card-body">
              <h3 class="card-title text-[#1e3a8a]">Primary Section</h3>
              <p class="text-gray-800">
                Our primary program nurtures curiosity, creativity, and critical
                thinking. Through interactive learning and engaging activities,
                students build confidence, develop independence, and explore
                their talents both in and out of the classroom
              </p>
              <div class="card-actions justify-end mt-4">
                <NuxtLink to="/about-us">
                  <button class="bg-[#00416A] text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Senior Secondary -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
          >
            <figure>
              <img
                src="../assets/images/enfedam/IMG-20241023-WA0164.jpg"
                alt="Senior Secondary"
                class="h-64 w-full object-cover"
              />
            </figure>
            <div class="card-body">
              <h3 class="card-title text-[#1e3a8a]">Secondary Section</h3>
              <p class="text-gray-800">
                Our secondary school challenges and inspires students through
                rigorous academics, hands-on projects, and diverse
                extracurricular activities. With expert mentorship, leadership
                training, and dynamic learning experiences, we equip students
                with the confidence and skills to excel in academics and beyond
              </p>
              <div class="card-actions justify-end mt-4">
                <NuxtLink to="/about-us">
                  <button class="bg-[#00416A] text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- School Facilities -->
    <section class="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 font-pop">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-[#1e3a8a] mb-4">Our Facilities</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            We provide state-of-the-art facilities to ensure our students have
            the best learning environment.
          </p>
          <div class="w-24 h-1 bg-[#f59e0b] mx-auto mt-4"></div>
        </div>

        <div
          class="overflow-x-auto scrollbar-thin scrollbar-thumb-[#1e3a8a] scrollbar-track-gray-200 py-6 px-2"
        >
          <div class="flex space-x-6 w-max">
            <!-- Modern Library -->
            <div
              class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow w-80"
            >
              <figure>
                <img
                  src="../assets/images/enfedam/IMG-20240927-WA0006.jpg"
                  alt="Modern Library"
                  class="w-full h-48 object-cover"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h3 class="card-title text-[#1e3a8a]">Modern Library</h3>
                <p class="text-gray-600">
                  Extensive collection of books, digital resources, and quiet
                  study spaces.
                </p>
              </div>
            </div>

            <!-- Science Labs -->
            <div
              class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow w-80"
            >
              <figure>
                <img
                  src="../assets/images/enfedam/IMG-20241023-WA0166.jpg"
                  alt="Science Labs"
                  class="w-full h-48 object-cover"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h3 class="card-title text-[#1e3a8a]">Science Labs</h3>
                <p class="text-gray-600">
                  Fully equipped laboratories for physics, chemistry, and
                  biology experiments.
                </p>
              </div>
            </div>

            <!-- Computer Lab -->
            <div
              class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow w-80"
            >
              <figure>
                <img
                  src="../assets/images/enfedam/IMG-20241023-WA0185.jpg"
                  alt="Computer Lab"
                  class="w-full h-48 object-cover"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h3 class="card-title text-[#1e3a8a]">Computer Lab</h3>
                <p class="text-gray-600">
                  Modern computer facilities with high-speed internet and the
                  latest software.
                </p>
              </div>
            </div>

            <!-- Arts & Music -->
            <div
              class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow w-80"
            >
              <figure>
                <img
                  src="../assets/images/enfedam/IMG-20241023-WA0187.jpg"
                  alt="Arts & Music"
                  class="w-full h-48 object-cover"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h3 class="card-title text-[#1e3a8a]">Arts & Music</h3>
                <p class="text-gray-600">
                  Dedicated spaces for creative expression, music practice, and
                  performances.
                </p>
              </div>
            </div>

            <!-- Sports Complex -->
            <div
              class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow w-80"
            >
              <figure>
                <img
                  src="../assets/images/enfedam/IMG-20240927-WA0021.jpg"
                  alt="Sports Complex"
                  class="w-full h-48 object-cover"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h3 class="card-title text-[#1e3a8a]">Sports Complex</h3>
                <p class="text-gray-600">
                  Well-equipped fields, courts, and gymnasiums for various
                  sports activities.
                </p>
              </div>
            </div>

         

            <!-- Health & First Aid -->
            <div
              class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow w-80"
            >
              <figure>
                <img
                  src="../assets/images/enfedam/IMG-20241023-WA0162.jpg"
                  alt="Health & First Aid"
                  class="w-full h-48 object-cover"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h3 class="card-title text-[#1e3a8a]">Health & First Aid</h3>
                <p class="text-gray-600">
                  A fully equipped health center with a nurse for emergency
                  care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Admissions Section -->
    <section
      id="admissions"
      class="relative py-16 px-4 md:px-8 lg:px-16 bg-cover bg-no-repeat text-white font-pop"
      style="background-image: url('/assets/images/enfedam/stud1.jpg')"
    >
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black opacity-80"></div>

      <div class="relative container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white mb-4">Admissions</h2>
          <p class="text-gray-200 max-w-2xl mx-auto">
            Join our community of learners and begin your journey towards
            academic excellence and personal growth.
          </p>
          <div class="w-24 h-1 bg-[#f59e0b] mx-auto mt-4"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Admission Process -->
          <div class="relative z-10">
            <h3 class="text-2xl font-bold text-white mb-6">
              Admission Process
            </h3>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div
                  class="bg-[#f59e0b] text-center w-10 h-10 rounded-full p-2 mt-1 flex-shrink-0"
                >
                  <span class="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 class="font-semibold text-lg">Application Submission</h4>
                  <p class="text-gray-200">
                    Complete and submit the application form along with required
                    documents.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="bg-[#f59e0b] text-center w-10 h-10 rounded-full p-2 mt-1 flex-shrink-0"
                >
                  <span class="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 class="font-semibold text-lg">Entrance Assessment</h4>
                  <p class="text-gray-200">
                    Students take an assessment test to determine their academic
                    readiness.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="bg-[#f59e0b] text-center w-10 h-10 rounded-full p-2 mt-1 flex-shrink-0"
                >
                  <span class="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 class="font-semibold text-lg">Interview</h4>
                  <p class="text-gray-200">
                    Parents and students attend an interview with school
                    administrators.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="bg-[#f59e0b] text-center w-10 h-10 rounded-full p-2 mt-1 flex-shrink-0"
                >
                  <span class="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 class="font-semibold text-lg">Admission Offer</h4>
                  <p class="text-gray-200">
                    Successful applicants receive an admission offer and
                    enrollment instructions.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <NuxtLink to="/admissions">
                <button class="bg-[#00416A] text-white px-4 py-4 rounded-full">
                  Click for More Enquiry
                </button>
              </NuxtLink>
            </div>
          </div>

          <!-- Inquiry Form -->
          <div
            class="relative z-10 max-w-lg mx-auto bg-white shadow-lg border border-gray-200 rounded-xl p-6"
          >
            <h3 class="text-[#1e3a8a] text-3xl font-semibold text-center mb-6">
              Inquiry Form
            </h3>

            <form class="space-y-6">
              <!-- Personal Information -->
              <fieldset class="border border-gray-300 rounded-lg p-4">
                <legend class="text-lg font-semibold text-[#1e3a8a] px-3">
                  Personal Information
                </legend>

                <div class="space-y-4 mt-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-medium text-gray-600"
                        >Full Name</span
                      >
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      class="input input-bordered w-full text-gray-600"
                      required
                    />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-medium text-gray-600"
                        >Email</span
                      >
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      class="input input-bordered w-full text-gray-600"
                      required
                    />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-medium text-gray-600"
                        >Phone</span
                      >
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      class="input input-bordered w-full text-gray-600"
                      required
                    />
                  </div>
                </div>
              </fieldset>

              <!-- Program Details -->
              <fieldset class="border border-gray-300 rounded-lg p-4">
                <legend class="text-lg font-semibold text-[#1e3a8a] px-3">
                  Program Details
                </legend>

                <div class="space-y-4 mt-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-medium text-gray-600"
                        >Program of Interest</span
                      >
                    </label>
                    <select
                      class="select select-bordered w-full text-gray-600"
                      required
                    >
                      <option disabled selected>Select a program</option>
                      <option>Primary School</option>
                      <option>Junior Secondary</option>
                      <option>Senior Secondary</option>
                    </select>
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-medium text-gray-600"
                        >Message</span
                      >
                    </label>
                    <textarea
                      class="textarea textarea-bordered h-24 w-full text-gray-600"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
              </fieldset>

              <!-- Submit Button -->
              <div class="text-center">
                <button
                  class="btn btn-warning text-white w-full text-lg font-semibold py-3 rounded-lg"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-[#1e3a8a] mb-4">
            What Parents Say
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Hear from our community of parents about their experience with
            Enfedam Academy.
          </p>
          <div class="w-24 h-1 bg-[#f59e0b] mx-auto mt-4"></div>
        </div>

        <div class="carousel w-full">
          <div id="slide1" class="carousel-item relative w-full">
            <div
              class="flex flex-col items-center justify-center px-4 md:px-16 text-center"
            >
              <div class="avatar mb-6">
                <div
                  class="w-24 rounded-full ring ring-[#f59e0b] ring-offset-base-100 ring-offset-2"
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-07%20163528-BMunWtyxjeNYJrbYUcAWN4NkLtUJ51.png"
                    alt="Parent"
                  />
                </div>
              </div>
              <div class="max-w-2xl">
                <p class="text-gray-700 text-lg italic mb-4">
                  "Enfedam Academy has been a transformative experience for my
                  child. The teachers are dedicated, the curriculum is
                  challenging yet engaging, and the overall environment fosters
                  both academic excellence and character development."
                </p>
                <h4 class="font-bold text-[#1e3a8a]">Mrs. Johnson</h4>
                <p class="text-gray-600">Parent of a Primary 5 Student</p>
              </div>
            </div>
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide3" class="btn btn-circle">❮</a>
              <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <div
              class="flex flex-col items-center justify-center px-4 md:px-16 text-center"
            >
              <div class="avatar mb-6">
                <div
                  class="w-24 rounded-full ring ring-[#f59e0b] ring-offset-base-100 ring-offset-2"
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-07%20163528-BMunWtyxjeNYJrbYUcAWN4NkLtUJ51.png"
                    alt="Parent"
                  />
                </div>
              </div>
              <div class="max-w-2xl">
                <p class="text-gray-700 text-lg italic mb-4">
                  "The holistic approach to education at Enfedam Academy is
                  impressive. My son has grown not just academically but also in
                  confidence and social skills. The school truly lives up to its
                  mission of nurturing future leaders."
                </p>
                <h4 class="font-bold text-[#1e3a8a]">Mr. Adebayo</h4>
                <p class="text-gray-600">Parent of a JSS2 Student</p>
              </div>
            </div>
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide1" class="btn btn-circle">❮</a>
              <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <div
              class="flex flex-col items-center justify-center px-4 md:px-16 text-center"
            >
              <div class="avatar mb-6">
                <div
                  class="w-24 rounded-full ring ring-[#f59e0b] ring-offset-base-100 ring-offset-2"
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-07%20163528-BMunWtyxjeNYJrbYUcAWN4NkLtUJ51.png"
                    alt="Parent"
                  />
                </div>
              </div>
              <div class="max-w-2xl">
                <p class="text-gray-700 text-lg italic mb-4">
                  "What sets Enfedam Academy apart is their commitment to
                  excellence in every aspect. The facilities are top-notch, the
                  teachers are highly qualified, and the administration is
                  responsive. My daughter has thrived here."
                </p>
                <h4 class="font-bold text-[#1e3a8a]">Mrs. Okafor</h4>
                <p class="text-gray-600">Parent of an SS3 Student</p>
              </div>
            </div>
            <div
              class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide2" class="btn btn-circle">❮</a>
              <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News & Events -->
    <section id="news" class="py-16 px-4 md:px-8 lg:px-16 bg-base-100">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-[#1e3a8a] mb-4">News & Events</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings at Enfedam Academy.
          </p>
          <div class="w-24 h-1 bg-[#f59e0b] mx-auto mt-4"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- News Item 1 -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
          >
            <figure>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-07%20163528-BMunWtyxjeNYJrbYUcAWN4NkLtUJ51.png"
                alt="School Event"
                class="h-64 w-full object-cover"
              />
            </figure>
            <div class="card-body">
              <div class="badge badge-warning text-white mb-2">Event</div>
              <h3 class="card-title text-[#1e3a8a]">
                Annual Science Fair 2023
              </h3>
              <p class="text-gray-500 text-sm mb-2">October 15, 2023</p>
              <p class="text-gray-600">
                Our students showcased their innovative science projects at the
                annual science fair, impressing judges and visitors alike.
              </p>
              <div class="card-actions justify-end mt-4">
                <button
                  class="text-[#00416A] border border-1 rounded-lg border-[#00416A] px-4 py-2 hover:bg-[#00416A] hover:text-white transition duration-300"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>

          <!-- News Item 2 -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
          >
            <figure>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-07%20163528-BMunWtyxjeNYJrbYUcAWN4NkLtUJ51.png"
                alt="School News"
                class="h-64 w-full object-cover"
              />
            </figure>
            <div class="card-body">
              <div class="badge badge-primary text-white mb-2">News</div>
              <h3 class="card-title text-[#1e3a8a]">
                New Computer Lab Inauguration
              </h3>
              <p class="text-gray-500 text-sm mb-2">September 28, 2023</p>
              <p class="text-gray-600">
                We are proud to announce the inauguration of our
                state-of-the-art computer lab equipped with the latest
                technology.
              </p>
              <div class="card-actions justify-end mt-4">
                <button
                  class="text-[#00416A] border border-1 rounded-lg border-[#00416A] px-4 py-2 hover:bg-[#00416A] hover:text-white transition duration-300"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>

          <!-- News Item 3 -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
          >
            <figure>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-07%20163528-BMunWtyxjeNYJrbYUcAWN4NkLtUJ51.png"
                alt="School Achievement"
                class="h-64 w-full object-cover"
              />
            </figure>
            <div class="card-body">
              <div class="badge badge-success text-white mb-2">Achievement</div>
              <h3 class="card-title text-[#1e3a8a]">
                National Math Olympiad Winners
              </h3>
              <p class="text-gray-500 text-sm mb-2">August 10, 2023</p>
              <p class="text-gray-600">
                Our students brought home gold medals from the National
                Mathematics Olympiad, showcasing their exceptional
                problem-solving skills.
              </p>
              <div class="card-actions justify-end mt-4">
                <button
                  class="text-[#00416A] border border-1 rounded-lg border-[#00416A] px-4 py-2 hover:bg-[#00416A] hover:text-white transition duration-300"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/newsEventsPage">
            <button
            class="text-white border border-1 rounded-lg border-[#00416A] px-4 py-2 bg-[#00416A] hover:text-white transition duration-300"
          >
            View All News & Events
          </button>
          </NuxtLink>
          
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section id="gallery" class="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-[#1e3a8a] mb-4">School Gallery</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Glimpses of life at Enfedam Academy.
          </p>
          <div class="w-24 h-1 bg-[#f59e0b] mx-auto mt-4"></div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="hover:opacity-90 transition-opacity">
            <img
              src="../assets/images/enfedam/IMG-20241023-WA0005.jpg"
              alt="School Gallery"
              class="h-64 w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div class="hover:opacity-90 transition-opacity">
            <img
              src="../assets/images/enfedam/IMG-20241023-WA0159.jpg"
              alt="School Gallery"
              class="h-64 w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div class="hover:opacity-90 transition-opacity">
            <img
              src="../assets/images/enfedam/IMG-20241023-WA0170.jpg"
              alt="School Gallery"
              class="h-64 w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div class="hover:opacity-90 transition-opacity">
            <img
              src="../assets/images/enfedam/IMG-20241023-WA0187.jpg"
              alt="School Gallery"
              class="h-64 w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div class="hover:opacity-90 transition-opacity">
            <img
              src="../assets/images/enfedam/schoolB.png"
              alt="School Gallery"
              class="h-64 w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div class="hover:opacity-90 transition-opacity">
            <img
              src="../assets/images/enfedam/IMG-20241029-WA0035.jpg"
              alt="School Gallery"
              class="h-64 w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div class="hover:opacity-90 transition-opacity">
            <img
              src="../assets/images/enfedam/IMG-20241024-WA0022.jpg"
              alt="School Gallery"
              class="h-64 w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div class="hover:opacity-90 transition-opacity">
            <img
              src="../assets/images/enfedam/IMG-20241023-WA0159.jpg"
              alt="School Gallery"
              class="h-64 w-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div
          class="text-center text-white w-[250px] items-center justify-center px-4 py-4 rounded-full bg-[#00416A] mt-10 flex"
        >
          <a href="/gallery" class=" ">View Full Gallery</a>
          <ChevronRight />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 px-4 md:px-8 lg:px-16 bg-base-100">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-[#1e3a8a] mb-4">Contact Us</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions or
            inquiries.
          </p>
          <div class="w-24 h-1 bg-[#f59e0b] mx-auto mt-4"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div
              class="card bg-base-100 shadow-xl border border-gray-100 max-w-lg mx-auto"
            >
              <div class="card-body p-8">
                <fieldset class="border border-gray-300 p-6 rounded-md">
                  <legend class="text-[#1e3a8a] text-2xl font-bold px-4">
                    Send Us a Message
                  </legend>

                  <form class="space-y-4">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text font-semibold">Full Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        class="input input-bordered w-full"
                      />
                    </div>

                    <div class="form-control">
                      <label class="label">
                        <span class="label-text font-semibold">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        class="input input-bordered w-full"
                      />
                    </div>

                    <div class="form-control">
                      <label class="label">
                        <span class="label-text font-semibold">Subject</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter subject"
                        class="input input-bordered w-full"
                      />
                    </div>

                    <div class="form-control">
                      <label class="label">
                        <span class="label-text font-semibold">Message</span>
                      </label>
                      <textarea
                        class="textarea textarea-bordered w-full h-32"
                        placeholder="Your message"
                      ></textarea>
                    </div>

                    <div class="form-control">
                      <button class="btn btn-warning text-white w-full">
                        Send Message
                      </button>
                    </div>
                  </form>
                </fieldset>
              </div>
            </div>
          </div>

          <div>
            <div class="card bg-base-100 shadow-xl border border-gray-100 mb-8">
              <div class="card-body">
                <h3 class="card-title text-[#1e3a8a] text-2xl mb-4">
                  Contact Information
                </h3>

                <div class="space-y-6">
                  <div class="flex items-start gap-4">
                    <div class="bg-[#f59e0b] p-3 rounded-full flex-shrink-0">
                      <MapPin class="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 class="font-semibold text-lg">Address</h4>
                      <p class="text-gray-600">
                        No 6 saabhi hotel street, mararaba, Nasarawa state
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="bg-[#f59e0b] p-3 rounded-full flex-shrink-0">
                      <Phone class="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 class="font-semibold text-lg">Phone</h4>
                      <p class="text-gray-600">07030065113 & 08132828531</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="bg-[#f59e0b] p-3 rounded-full flex-shrink-0">
                      <Mail class="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 class="font-semibold text-lg">Email</h4>
                      <p class="text-gray-600">enfedamacademy@gmail.com</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="bg-[#f59e0b] p-3 rounded-full flex-shrink-0">
                      <Clock class="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 class="font-semibold text-lg">Office Hours</h4>
                      <p class="text-gray-600">
                        Monday - Friday: 7:30am - 3:00pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card bg-base-100 shadow-xl border border-gray-100">
              <div class="card-body">
                <h3 class="card-title text-[#1e3a8a] text-2xl mb-4">
                  Connect With Us
                </h3>
                <div class="flex gap-6">
                  <!-- Facebook Icon -->
                  <a
                    href="#"
                    class="btn btn-circle btn-outline text-xl text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>

                  <!-- Instagram Icon -->
                  <a
                    href="#"
                    class="btn btn-circle btn-outline text-xl text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>

                  <!-- WhatsApp Icon -->
                  <a
                    href="#"
                    class="btn btn-circle btn-outline text-xl text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
                  >
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Back to top button -->
    <button
      @click="scrollToTop"
      class="fixed bottom-6 right-6 btn btn-warning btn-circle text-white shadow-lg"
      v-show="showBackToTop"
    >
      <ChevronUp class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import counter from "~/components/counter.vue";
import {
  BookOpen,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Building2,
  User,
  Play,
  Circle,
  ChevronUp,
  Eye,
  Target,
  Laptop,
  Music,
  MapPin,
  BookOpenCheck,
  Clock,
  FlaskConical,
} from "lucide-vue-next";

const showBackToTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const checkScroll = () => {
  showBackToTop.value = window.scrollY > 500;
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});

const video = ref(null);
const isPlaying = ref(false);

const playVideo = () => {
  if (video.value) {
    video.value.play();
    isPlaying.value = true;
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

body {
  font-family: "Inter", sans-serif;
}

html {
  scroll-behavior: smooth;
}

.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #1e3a8a;
  border-radius: 10px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #14274e;
}
</style>
