<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 font-pop">
    <!-- Hero Section with Background Image -->
    <section class="relative py-28 overflow-hidden">
      <!-- Colorful top border -->
      <!-- <div
        class="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 z-20"
      ></div> -->

      <!-- Background image with overlay -->
      <div class="absolute inset-0 z-0">
        <img
          src="../public/assets/images/enfedam/IMG-20241023-WA0163.jpg"
          alt="Students in classroom"
          class="w-full h-full object-cover opacity-15"
        />
        <div class="absolute inset-0 bg-black/70"></div>
      </div>

      <!-- Decorative elements -->
      <div
        class="absolute top-20 left-10 w-20 h-20 rounded-full bg-pink-400 opacity-10 animate-float"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-yellow-400 opacity-10 animate-float-delay"
      ></div>
      <div
        class="absolute top-40 right-20 w-16 h-16 rounded-full bg-green-400 opacity-10 animate-float-slow"
      ></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <div
            class="badge badge-primary mb-6 text-lg py-4 px-6 font-semibold shadow-lg"
          >
            Est. 2015
          </div>
          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 text-shadow-lg"
          >
            About Our School
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Nurturing minds, building character, and inspiring excellence since
            2015
          </p>
          <div
            class="w-40 h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mx-auto rounded-full shadow-lg"
          ></div>
        </div>
      </div>

      <!-- Wave divider -->
      <div
        class="absolute -bottom-1 left-0 w-full overflow-hidden leading-0 transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          class="w-full h-16 text-white fill-current"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          ></path>
        </svg>
      </div>
    </section>

    <!-- Our History Section -->
    <section class="py-20 bg-white relative">
      <!-- Decorative elements -->
      <div
        class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none"
      >
        <div
          class="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-primary"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-60 h-60 rounded-full border-8 border-secondary"
        ></div>
      </div>

      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-16">
          <div class="md:w-1/2">
            <div
              class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-primary"
            >
              <div class="card-body p-8 md:p-10">
                <div class="flex items-center mb-8">
                  <div class="bg-primary p-4 rounded-full mr-5 shadow-lg">
                    <Goal class="text-white" />
                  </div>
                  <h2 class="text-3xl md:text-4xl font-bold text-primary">
                    Our History
                  </h2>
                </div>
                <p class="mb-6 text-lg leading-relaxed">
                  Enfedam Academy was founded in 2015 with a vision to create an
                  educational institution that nurtures not just academic
                  excellence, but also character and creativity.
                </p>
                <p class="mb-6 text-lg leading-relaxed">
                  What began as a small crèche with just 5 students has grown
                  into a thriving educational institution, now serving over 500
                  students from crèche to secondary levels.
                </p>
                <p class="text-lg leading-relaxed">
                  Throughout our journey, we have remained committed to
                  providing holistic education that prepares students not just
                  for exams, but for life. We have graduated a good number of
                  students who have gone on to excel in various fields across
                  the globe, embodying our values of integrity, excellence, and
                  intelligence.
                </p>
              </div>
            </div>
          </div>

          <div class="md:w-1/2">
            <div class="grid grid-cols-2 gap-6">
              <div
                class="card bg-base-100 shadow-xl image-full transform transition-all duration-300 hover:scale-105 hover:-rotate-2"
              >
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                    alt="School founding"
                  />
                </figure>
                <div class="card-body justify-end p-6">
                  <div class="badge badge-warning mb-2">2015</div>
                  <h3 class="card-title text-white text-xl">Our Beginning</h3>
                  <p class="text-white text-sm">
                    School founded with 5 students in Creche
                  </p>
                </div>
              </div>

              <div
                class="card bg-base-100 shadow-xl image-full transform transition-all duration-300 hover:scale-105 hover:rotate-2"
              >
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Primary school"
                  />
                </figure>
                <div class="card-body justify-end p-6">
                  <div class="badge badge-success mb-2">2016</div>
                  <h3 class="card-title text-white text-xl">
                    Nursery and Primary School
                  </h3>
                  <p class="text-white text-sm">
                    Expanded to include nursery and primary school with 150
                    students
                  </p>
                </div>
              </div>

              <div
                class="card bg-base-100 shadow-xl image-full transform transition-all duration-300 hover:scale-105 hover:-rotate-2"
              >
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Secondary school"
                  />
                </figure>
                <div class="card-body justify-end p-6">
                  <div class="badge badge-info mb-2">2017</div>
                  <h3 class="card-title text-white text-xl">
                    Secondary School
                  </h3>
                  <p class="text-white text-sm">
                    Secondary school established with state-of-the-art
                    facilities
                  </p>
                </div>
              </div>

              <div
                class="card bg-base-100 shadow-xl image-full transform transition-all duration-300 hover:scale-105 hover:rotate-2"
              >
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt="Award ceremony"
                  />
                </figure>
                <div class="card-body justify-end p-6">
                  <div class="badge badge-secondary mb-2">2020</div>
                  <h3 class="card-title text-white text-xl">Recognition</h3>
                  <p class="text-white text-sm">
                    Recognized as one of the top 10 schools in the region
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission and Vision Section -->

    <section class="py-16 px-4 md:px-8 lg:px-16 bg-white font-pop">
      <div class="">
        <h2 class="text-4xl font-bold text-[#1e3a8a] text-center mb-12">
          Our Mission & Vision Statement
        </h2>
        <ul class="timeline timeline-vertical">
          <!-- Mission Timeline Item -->
          <li>
            <div
              class="timeline-start timeline-box bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <h3 class="text-2xl font-bold text-[#1e3a8a] mb-4">
                Our Mission
              </h3>
              <p class="text-gray-700 text-lg">
                To provide a nurturing environment where students excel
                academically, develop strong character, and become innovative
                leaders in their communities.
              </p>
            </div>
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5 text-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <hr class="bg-blue-500" />
          </li>
          <!-- Vision Timeline Item -->
          <li>
            <hr class="bg-blue-500" />
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5 text-blue-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div
              class="timeline-end timeline-box bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <h3 class="text-2xl font-bold text-[#1e3a8a] mb-4">Our Vision</h3>
              <p class="text-gray-700 text-lg">
                To be a globally recognized institution that shapes future
                leaders through excellence in education, innovation, and moral
                values.
              </p>
            </div>
            <hr class="bg-blue-500" />
          </li>
        </ul>
      </div>
    </section>
    <section class="relative py-28 overflow-hidden font-pop">
      <!-- Background image with overlay -->
      <div class="absolute inset-0 z-0">
        <img
          src="../public/assets/images/enfedam/IMG-20241023-WA0163.jpg"
          alt="Students in classroom"
          class="w-full h-full object-cover opacity-15"
        />
        <div class="absolute inset-0 bg-black/70"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <h2
            class="text-[60px] font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
          >
            Our Core Values
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div
            class="p-6 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 class="text-xl font-semibold text-[#1e3a8a] mb-4">
              Excellence
            </h3>
            <p class="text-gray-600">
              Striving for the highest academic and personal achievements.
            </p>
          </div>
          <div
            class="p-6 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 class="text-xl font-semibold text-[#1e3a8a] mb-4">Integrity</h3>
            <p class="text-gray-600">
              Fostering honesty, responsibility, and strong character.
            </p>
          </div>
          <div
            class="p-6 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 class="text-xl font-semibold text-[#1e3a8a] mb-4">
              Innovation
            </h3>
            <p class="text-gray-600">
              Encouraging creativity and problem-solving in all areas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <!-- Achievement -->
      <div class="text-center py-10">
        <h2 class="text-4xl md:text-5xl font-bold text-[#b7801a] mb-6 font-pop">
          Achievement
        </h2>

        <Counter />
      </div>
    </section>

    <!-- Our Programs Section -->
    <section
      class="py-24 bg-gradient-to-b from-base-200 to-base-100 relative font-pop"
    >
      <!-- Decorative elements -->
      <div
        class="absolute top-0 right-0 w-40 h-40 bg-yellow-200 rounded-bl-full opacity-20"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-60 h-60 bg-blue-200 rounded-tr-full opacity-20"
      ></div>

      <div class="container mx-auto px-4">
        <div class="text-center mb-20">
          <div
            class="inline-block px-6 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4"
          >
            Educational Excellence
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Our Educational Programs
          </h2>
          <p class="text-xl max-w-2xl mx-auto opacity-75 leading-relaxed">
            We offer comprehensive educational programs from early childhood to
            secondary education, each designed to meet the unique developmental
            needs of students at different stages.
          </p>
          <div class="flex justify-center mt-8">
            <div class="w-16 h-1 bg-primary rounded-full mx-2"></div>
            <div class="w-4 h-1 bg-secondary rounded-full mx-2"></div>
            <div class="w-8 h-1 bg-accent rounded-full mx-2"></div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- Creche Program -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-pink-500 overflow-visible"
          >
            <div
              class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-pink-500 rounded-full p-4 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-white"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path>
              </svg>
            </div>
            <figure class="px-6 pt-10 pb-6">
              <img
                src="https://images.unsplash.com/photo-1587463272361-565200f82b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Creche Program"
                class="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div class="card-body">
              <h3 class="card-title text-2xl text-pink-600 justify-center">
                Creche Program
              </h3>
              <div class="badge badge-outline badge-pink-500 mx-auto mb-4">
                Ages 6 months - 2 years
              </div>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-pink-500"></div>
                  </div>
                  <span>Nurturing care in a safe environment</span>
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-pink-500"></div>
                  </div>
                  <span>Age-appropriate sensory activities</span>
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-pink-500"></div>
                  </div>
                  <span>Early language and motor skills</span>
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-pink-500"></div>
                  </div>
                  <span>Qualified caregivers with 1:4 ratio</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Nursery Program -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-purple-500 overflow-visible"
          >
            <div
              class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 rounded-full p-4 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-white"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <figure class="px-6 pt-10 pb-6">
              <img
                src="https://images.unsplash.com/photo-1567057419565-4349c49d8a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Nursery Program"
                class="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div class="card-body">
              <h3 class="card-title text-2xl text-purple-600 justify-center">
                Nursery Program
              </h3>
              <div class="badge badge-outline badge-purple-500 mx-auto mb-4">
                Ages 2 - 5 years
              </div>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-purple-500"></div>
                  </div>
                  <span>Play-based learning approach</span>
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-purple-500"></div>
                  </div>
                  <span>Foundational literacy and numeracy</span>
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-purple-500"></div>
                  </div>
                  <span>Social skills development</span>
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-purple-500"></div>
                  </div>
                  <span>Creative arts and music exploration</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Primary Program -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-blue-500 overflow-visible"
          >
            <div
              class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full p-4 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-white"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <figure class="px-6 pt-10 pb-6">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80"
                alt="Primary Program"
                class="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div class="card-body">
              <h3 class="card-title text-2xl text-blue-600 justify-center">
                Primary Program
              </h3>
              <div class="badge badge-outline badge-blue-500 mx-auto mb-4">
                Ages 6 - 11 years
              </div>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Comprehensive core curriculum</span>
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Project-based learning approach</span>
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Technology integration in classrooms</span>
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Character education and leadership</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Secondary Program -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-green-500 overflow-visible"
          >
            <div
              class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 rounded-full p-4 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-white"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                <path
                  d="M2 18v.5a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5V18"
                ></path>
              </svg>
            </div>
            <figure class="px-6 pt-10 pb-6">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Secondary Program"
                class="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div class="card-body">
              <h3 class="card-title text-2xl text-green-600 justify-center">
                Secondary Program
              </h3>
              <div class="badge badge-outline badge-green-500 mx-auto mb-4">
                Ages 12 - 18 years
              </div>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span>Advanced academic curriculum</span>
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span>College preparation and guidance</span>
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span>Specialized academic tracks</span>
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3"
                  >
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span>Leadership and community service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <section class="mx-auto font-pop">
    <div
      class="px-6 py-2 mx-auto bg-secondary/10 text-center rounded-full text-secondary font-semibold mb-4 font-pop"
    >
      World-Class Facilities
    </div>
    <h2 class="text-4xl md:text-5xl font-bold mb-6 text-center">
      Our State-of-the-Art Facilities
    </h2>
    <p class="max-w-2xl mx-auto opacity-75 leading-relaxed">
      We provide an enriching learning environment with modern facilities
      designed to inspire creativity, foster collaboration, and support academic
      excellence.
    </p>
    <div class="flex justify-center mt-8">
      <div class="w-16 h-1 bg-primary rounded-full mx-2"></div>
      <div class="w-4 h-1 bg-secondary rounded-full mx-2"></div>
      <div class="w-8 h-1 bg-accent rounded-full mx-2"></div>
    </div>

    <div class="flex flex-wrap justify-center gap-6 p-6">
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <!-- Science Labs -->
        <div
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-blue-500"
        >
          <figure class="px-6 pt-6">
            <img
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Science Labs"
              class="rounded-xl h-48 w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-2xl text-blue-600">Science Labs</h3>
            <p class="text-sm w-[460px] leading-relaxed">
              Fully equipped laboratories for physics, chemistry, and biology,
              fostering hands-on learning and scientific exploration.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <!-- Library -->
        <div
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-green-500"
        >
          <figure class="px-6 pt-6">
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Library"
              class="rounded-xl h-48 w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-2xl text-green-600">Library</h3>
            <p class="text-sm w-[460px] leading-relaxed">
              A vast collection of books, digital resources, and quiet study
              spaces to support research and independent learning.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <!-- Sports Complex -->
        <div
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-yellow-500"
        >
          <figure class="px-6 pt-6">
            <img
              src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Sports Complex"
              class="rounded-xl h-48 w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-2xl text-yellow-600">Sports Facility</h3>
            <p class="text-sm w-[460px] leading-relaxed">
              State-of-the-art sports facilities including football field,
              basketball court,table-tennis court.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <!-- Auditorium Studio -->
        <div
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-pink-500"
        >
          <figure class="px-6 pt-6">
            <img
              src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Art Studio"
              class="rounded-xl h-48 w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-2xl text-pink-600">Auditorium</h3>
            <p class="text-sm  leading-relaxed">
              Enfedam Academy's auditorium is the heart of our events, providing
              a spacious and comfortable space for students, parents, and staff.
              It is equipped with modern sound and lighting, ensuring an
              immersive experience for all gatherings.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <!-- Science Labs -->
        <div
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-blue-500"
        >
          <figure class="px-6 pt-6">
            <img
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Science Labs"
              class="rounded-xl h-48 w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-2xl text-blue-600">Science Labs</h3>
            <p class="text-sm w-[460px] leading-relaxed">
              Fully equipped laboratories for physics, chemistry, and biology,
              fostering hands-on learning and scientific exploration.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Extracurricular Activities -->
  <section
    class="relative py-16 px-4 md:px-8 lg:px-16 bg-cover bg-center bg-no-repeat font-pop"
    style="
      background-image: url('../assets/images/enfedam/IMG-20241023-WA0170.jpg');
    "
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-70"></div>

    <!-- Extracurricular Activities Section -->
    <div class="relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-white">
          Extracurricular Activities
        </h2>
        <p class="text-pink-600 max-w-2xl mx-auto">
          Beyond academics, we offer a range of activities to develop
          well-rounded individuals.
        </p>
      </div>

      <div
        class="overflow-x-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-200 py-6 px-2"
      >
        <div class="flex space-x-6 w-max">
          <!-- Sports Card -->
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="../public/assets/images/enfedam/sports.jpg"
                alt="Sports"
                class="w-full h-40 object-cover"
              />
            </figure>
            <div class="card-body text-center">
              <h3 class="text-xl font-semibold text-[#1e3a8a]">
                Interhouse Sports
              </h3>
              <p class="text-gray-600">
                A thrilling event promoting teamwork, sportsmanship, and
                competition among houses.
              </p>
            </div>
          </div>

          <!-- Cultural Day Card -->
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="../public/assets/images/enfedam/cultural-day.jpg"
                alt="Cultural Day"
                class="w-full h-40 object-cover"
              />
            </figure>
            <div class="card-body text-center">
              <h3 class="text-xl font-semibold text-[#1e3a8a]">Cultural Day</h3>
              <p class="text-gray-600">
                A celebration of diversity where students showcase their
                cultural heritage through music, dance, and attire.
              </p>
            </div>
          </div>

          <!-- Career Day Card -->
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="../public/assets/images/enfedam/career-day.jpg"
                alt="Career Day"
                class="w-full h-40 object-cover"
              />
            </figure>
            <div class="card-body text-center">
              <h3 class="text-xl font-semibold text-[#1e3a8a]">Career Day</h3>
              <p class="text-gray-600">
                Students explore different professions, interact with industry
                experts, and get inspired for the future.
              </p>
            </div>
          </div>

          <!-- Color Day Card -->
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="../public/assets/images/enfedam/color-day.jpg"
                alt="Color Day"
                class="w-full h-40 object-cover"
              />
            </figure>
            <div class="card-body text-center">
              <h3 class="text-xl font-semibold text-[#1e3a8a]">Color Day</h3>
              <p class="text-gray-600">
                A fun-filled event where students dress in vibrant colors,
                learning about color significance and expression.
              </p>
            </div>
          </div>

          <!-- Fruit Day for Nursery Card -->
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="../public/assets/images/enfedam/fruit-day.jpg"
                alt="Fruit Day"
                class="w-full h-40 object-cover"
              />
            </figure>
            <div class="card-body text-center">
              <h3 class="text-xl font-semibold text-[#1e3a8a]">
                Fruit Day (Nursery)
              </h3>
              <p class="text-gray-600">
                An interactive day where nursery students explore healthy eating
                habits through fruit tasting and learning.
              </p>
            </div>
          </div>

          <!-- Taekwondo for Fitness Card -->
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="../public/assets/images/enfedam/taekwondo.jpg"
                alt="Taekwondo"
                class="w-full h-40 object-cover"
              />
            </figure>
            <div class="card-body text-center">
              <h3 class="text-xl font-semibold text-[#1e3a8a]">
                Taekwondo for Fitness
              </h3>
              <p class="text-gray-600">
                A martial arts program focusing on discipline, self-defense, and
                physical fitness for students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section
    id="contact"
    class="py-16 px-4 md:px-8 lg:px-16 bg-base-100 font-pop"
  >
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
</template>
<script setup>
import { Goal } from "lucide-vue-next";
</script>
<style>
.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: white;
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
