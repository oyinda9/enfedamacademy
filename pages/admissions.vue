<template>
<!-- Hero Section -->
<section
  class="relative  bg-no-repeat bg-center bg-cover  text-white py-16"
  style="background-image: url('../assets/images/enfedam/IMG-20241023-WA0188.jpg');"
>
  <div class="absolute inset-0 bg-black bg-opacity-60"></div> <!-- Overlay -->
  
  <div class="container mx-auto px-4 text-center relative z-10">
    <h1 class="text-3xl md:text-5xl font-bold mb-4">Admissions Information</h1>
    <p class="text-xl max-w-3xl mx-auto">
      Join our community of learners at Enfedam Academy, where we nurture young minds from creche to secondary education.
    </p>
    <button
      @click="scrollToForm"
      class="mt-8 bg-white text-[#00416A] px-6 py-3 rounded-full font-bold hover:bg-emerald-100 transition duration-300"
    >
      Apply Now
    </button>
  </div>
</section>

    <!-- School Sections -->
    <section class="py-16 container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-[#00416A]">Our Educational Divisions</h2>
      
      <!-- Creche Section -->
      <div class="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/3 bg-emerald-100 p-6 flex items-center justify-center">
            <div class="text-center">
              <div class="w-24 h-24 mx-auto bg-emerald-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-700"><path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13z"/><circle cx="12" cy="8" r="2"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-emerald-800">Creche</h3>
              <p class="text-emerald-600 mt-2">Ages 0-2 years</p>
            </div>
          </div>
          <div class="md:w-2/3 p-6">
            <h4 class="text-xl font-semibold mb-4">Early Childhood Care</h4>
            <p class="mb-4">Our creche provides a safe, nurturing environment for infants and toddlers. We focus on sensory development, motor skills, and creating a foundation for future learning.</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
              <li>Qualified and caring staff with specialized training in infant care</li>
              <li>Age-appropriate activities and stimulation</li>
              <li>Clean, safe, and engaging environment</li>
              <li>Regular updates and communication with parents</li>
            </ul>
            <p class="text-sm text-gray-600">Hours: Monday to Friday, 7:30 AM - 5:30 PM</p>
          </div>
        </div>
      </div>
      
      <!-- Nursery Section -->
      <div class="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/3 bg-blue-100 p-6 flex items-center justify-center">
            <div class="text-center">
              <div class="w-24 h-24 mx-auto bg-blue-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-700"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="M16.5 9.4 7.55 4.24"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/><circle cx="18.5" cy="15.5" r="2.5"/><path d="M20.27 17.27 22 19"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-blue-800">Nursery</h3>
              <p class="text-blue-600 mt-2">Ages 3-5 years</p>
            </div>
          </div>
          <div class="md:w-2/3 p-6">
            <h4 class="text-xl font-semibold mb-4">Early Learning Foundation</h4>
            <p class="mb-4">Our nursery program focuses on developing social skills, language acquisition, and introducing basic concepts through play-based learning.</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
              <li>Play-based curriculum that encourages curiosity and exploration</li>
              <li>Introduction to letters, numbers, colors, and shapes</li>
              <li>Development of fine and gross motor skills</li>
              <li>Social interaction and emotional development</li>
            </ul>
            <p class="text-sm text-gray-600">Classes: Nursery 1, Nursery 2, and Reception</p>
          </div>
        </div>
      </div>
      
      <!-- Primary Section -->
      <div class="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/3 bg-amber-100 p-6 flex items-center justify-center">
            <div class="text-center">
              <div class="w-24 h-24 mx-auto bg-amber-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-700"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-amber-800">Primary</h3>
              <p class="text-amber-600 mt-2">Classes 1-5</p>
            </div>
          </div>
          <div class="md:w-2/3 p-6">
            <h4 class="text-xl font-semibold mb-4">Building Strong Foundations</h4>
            <p class="mb-4">Our primary education provides a comprehensive curriculum that develops literacy, numeracy, and critical thinking skills.</p>
            
            <div class="grid md:grid-cols-5 gap-4 mb-4">
              <div v-for="i in 5" :key="i" class="bg-amber-50 p-3 rounded-lg text-center">
                <h5 class="font-semibold text-amber-800">Primary {{ i }}</h5>
                <p class="text-sm text-gray-600">Ages {{ 5 + i }}-{{ 6 + i }}</p>
              </div>
            </div>
            
            <ul class="list-disc pl-5 mb-4 space-y-2">
              <li>Comprehensive curriculum covering Mathematics, English, Science, Social Studies, and more</li>
              <li>Computer literacy and digital skills</li>
              <li>Creative arts and physical education</li>
              <li>Character development and values education</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Secondary Section -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/3 bg-purple-100 p-6 flex items-center justify-center">
            <div class="text-center">
              <div class="w-24 h-24 mx-auto bg-purple-200 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-700"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-purple-800">Secondary</h3>
              <p class="text-purple-600 mt-2">JSS & SS Classes</p>
            </div>
          </div>
          <div class="md:w-2/3 p-6">
            <h4 class="text-xl font-semibold mb-4">Preparing Future Leaders</h4>
            <p class="mb-4">Our secondary education is divided into Junior Secondary School (JSS) and Senior Secondary School (SS), providing comprehensive education that prepares students for higher learning.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h5 class="font-semibold text-purple-800 mb-2">Junior Secondary School (JSS)</h5>
                <div class="grid grid-cols-3 gap-2">
                  <div v-for="i in 3" :key="i" class="bg-white p-2 rounded text-center shadow-sm">
                    <p class="font-medium">JSS {{ i }}</p>
                    <p class="text-xs text-gray-600">Ages {{ 10 + i }}-{{ 11 + i }}</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg">
                <h5 class="font-semibold text-purple-800 mb-2">Senior Secondary School (SS)</h5>
                <div class="grid grid-cols-3 gap-2">
                  <div v-for="i in 3" :key="i" class="bg-white p-2 rounded text-center shadow-sm">
                    <p class="font-medium">SS {{ i }}</p>
                    <p class="text-xs text-gray-600">Ages {{ 13 + i }}-{{ 14 + i }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ul class="list-disc pl-5 mb-4 space-y-2">
              <li>Comprehensive curriculum aligned with national education standards</li>
              <li>Specialized subject teachers with expertise in their fields</li>
              <li>Science laboratories, computer labs, and library facilities</li>
              <li>Career guidance and university preparation</li>
              <li>Extracurricular activities including sports, clubs, and competitions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Admission Process -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-[#00416A]">Admission Process</h2>
        
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-4 gap-6">
            <div v-for="(step, index) in admissionSteps" :key="index" class="bg-white p-6 rounded-lg shadow-md text-center">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#00416A]font-bold">
                {{ index + 1 }}
              </div>
              <h3 class="font-semibold mb-2">{{ step.title }}</h3>
              <p class="text-sm text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Inquiry Form -->
    <section ref="inquiryForm" class="py-16 container mx-auto px-4">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-3xl font-bold text-center mb-8 text-[#00416A]">Admission Inquiry Form</h2>
        
        <form @submit.prevent="submitForm" class="space-y-6">
           <!-- Inquiry Form -->
           <div
            class="relative z-10  bg-white shadow-lg border border-gray-200 rounded-xl p-6"
          >
        

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
          
    
  
  
          
          <div v-if="formSubmitted" class="p-4 bg-green-100 text-green-800 rounded-md text-center">
            Thank you for your inquiry! Our admissions team will contact you shortly.
          </div>
        </form>
      </div>
    </section>

</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
const formSubmitted = ref(false);
const submitting = ref(false);
const inquiryForm = ref(null);

const form = ref({
  parentName: '',
  email: '',
  phone: '',
  childName: '',
  childAge: '',
  section: '',
  message: ''
});

const admissionSteps = [
  {
    title: 'Inquiry',
    description: 'Fill out the inquiry form or contact our admissions office'
  },
  {
    title: 'Assessment',
    description: 'Schedule an assessment or entrance examination'
  },
  {
    title: 'Interview',
    description: 'Parent and child interview with school administrators'
  },
  {
    title: 'Enrollment',
    description: 'Complete registration and payment of fees'
  }
];

const submitForm = () => {
  submitting.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    submitting.value = false;
    formSubmitted.value = true;
    
    // Reset form after submission
    form.value = {
      parentName: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      section: '',
      message: ''
    };
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  }, 1500);
};

const scrollToForm = () => {
  inquiryForm.value.scrollIntoView({ behavior: 'smooth' });
};
</script>