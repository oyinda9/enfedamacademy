<template>
    <footer class="bg-[#00416A] text-white py-12 px-4 md:px-8 lg:px-16 font-grotesk">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Enfedam Academy</h3>
            <p class="mb-4">
              Moulding future leaders through quality education and holistic
              development since 2014.
            </p>
            <div class="flex gap-4">
              <a href="#" class="hover:text-[#f59e0b] transition-colors">
                <Facebook class="w-5 h-5" />
              </a>
              <a href="#" class="hover:text-[#f59e0b] transition-colors">
                <Twitter class="w-5 h-5" />
              </a>
              <a href="#" class="hover:text-[#f59e0b] transition-colors">
                <Instagram class="w-5 h-5" />
              </a>
              <a href="#" class="hover:text-[#f59e0b] transition-colors">
                <Youtube class="w-5 h-5" />
              </a>
            </div>
          </div>
  
          <div>
            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-[#f59e0b] transition-colors">Home</a></li>
              <li><a href="#about" class="hover:text-[#f59e0b] transition-colors">About Us</a></li>
              <li><a href="#admissions" class="hover:text-[#f59e0b] transition-colors">Admissions</a></li>
              <li><a href="#" class="hover:text-[#f59e0b] transition-colors">Academic Programs</a></li>
              <li><a href="#news" class="hover:text-[#f59e0b] transition-colors">News & Events</a></li>
              <li><a href="#contact" class="hover:text-[#f59e0b] transition-colors">Contact</a></li>
            </ul>
          </div>
  
          <div>
            <h3 class="text-xl font-bold mb-4">Contact Info</h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2"><MapPin class="w-5 h-5 flex-shrink-0 mt-1" /> <span>No 6 Saabhi Hotel Street, Mararaba, Nasarawa State</span></li>
              <li class="flex items-start gap-2"><Phone class="w-5 h-5 flex-shrink-0 mt-1" /> <span>07030065113 & 08132828531</span></li>
              <li class="flex items-start gap-2"><Mail class="w-5 h-5 flex-shrink-0 mt-1" /> <span>enfedamacademy@gmail.com</span></li>
              <li class="flex items-start gap-2"><Clock class="w-5 h-5 flex-shrink-0 mt-1" /> <span>Mon-Fri: 7:30am - 3:00pm</span></li>
            </ul>
          </div>
  
          <div>
            <h3 class="text-xl font-bold mb-4">Newsletter</h3>
            <p class="mb-4">Subscribe to our newsletter to receive updates and news.</p>
            <form>
              <div class="join">
                <input type="email" placeholder="Your email address" class="input join-item" />
                <button class="btn btn-warning join-item text-white">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
  
        <div class="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>&copy; {{ new Date().getFullYear() }} Enfedam Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>