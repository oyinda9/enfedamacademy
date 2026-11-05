<template>
  <main class="min-h-screen bg-gray-50 font-pop">
    <!-- Hero -->
    <section
      class="relative overflow-hidden bg-[#00416A] px-4 pb-28 pt-16 text-white md:pb-36 md:pt-24"
    >
      <div
        class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f59e0b]/20 blur-3xl"
      ></div>
      <div
        class="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      ></div>
      <div class="container relative mx-auto max-w-5xl text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-widest text-[#f59e0b]"
        >
          Enfedam Academy
        </p>
        <h1 class="text-4xl font-bold md:text-6xl">Let's talk</h1>
        <p class="mx-auto mt-5 max-w-2xl text-lg text-white/85">
          Questions about admissions, school information, or anything else? Our
          team would love to hear from you.
        </p>
      </div>
    </section>

    <!-- Info cards -->
    <section class="container relative mx-auto -mt-16 max-w-5xl px-4 md:-mt-20">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="card in cards"
          :key="card.title"
          class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f59e0b]/15 text-[#b66b00]"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-html="card.icon"
            ></svg>
          </div>
          <h3 class="font-semibold text-[#00416A]">{{ card.title }}</h3>
          <template v-if="card.links">
            <a
              v-for="l in card.links"
              :key="l.href"
              :href="l.href"
              class="mt-1 block break-words text-sm text-gray-600 hover:text-[#b66b00]"
            >
              {{ l.label }}
            </a>
          </template>
          <p v-else class="mt-1 text-sm text-gray-600">{{ card.text }}</p>
        </div>
      </div>
    </section>

    <!-- Form + intro -->
    <section
      class="container mx-auto grid max-w-5xl gap-10 px-4 py-14 md:grid-cols-5 md:py-20"
    >
      <div class="md:col-span-2">
        <h2 class="text-3xl font-bold text-[#00416A]">Send us a message</h2>
        <p class="mt-4 leading-7 text-gray-700">
          Fill in the form and your message will open in your email app, ready
          to send to our admissions team. Prefer to talk? Call us during school
          hours or visit the academy in person.
        </p>
        <div class="mt-6 h-1 w-16 rounded bg-[#f59e0b]"></div>
      </div>

      <form
        class="space-y-5 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 md:col-span-3 md:p-8"
        @submit.prevent="submit"
      >
        <div class="grid gap-5 sm:grid-cols-2">
          <label class="block text-sm font-medium text-gray-700">
            Full name
            <input
              v-model="form.name"
              required
              type="text"
              class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-[#00416A] focus:ring-2 focus:ring-[#00416A]/20"
            />
          </label>
          <label class="block text-sm font-medium text-gray-700">
            Email
            <input
              v-model="form.email"
              required
              type="email"
              class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-[#00416A] focus:ring-2 focus:ring-[#00416A]/20"
            />
          </label>
        </div>
        <label class="block text-sm font-medium text-gray-700">
          Subject
          <input
            v-model="form.subject"
            required
            type="text"
            class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-[#00416A] focus:ring-2 focus:ring-[#00416A]/20"
          />
        </label>
        <label class="block text-sm font-medium text-gray-700">
          Message
          <textarea
            v-model="form.message"
            required
            rows="5"
            class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-[#00416A] focus:ring-2 focus:ring-[#00416A]/20"
          ></textarea>
        </label>
        <button
          type="submit"
          class="w-full rounded-lg bg-[#00416A] px-6 py-3 font-semibold text-white transition hover:bg-[#f59e0b] hover:text-[#00416A] sm:w-auto"
        >
          Send message
        </button>
      </form>
    </section>
  </main>
</template>

<script setup>
const form = reactive({ name: "", email: "", subject: "", message: "" });

const cards = [
  {
    title: "Visit us",
    text: "No 6 Saabhi Hotel Street, Mararaba, Nasarawa State",
    icon: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
  },
  {
    title: "Call us",
    links: [
      { label: "07030065113", href: "tel:07030065113" },
      { label: "08132828531", href: "tel:08132828531" },
    ],
    icon: '<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/>',
  },
  {
    title: "Email",
    links: [
      {
        label: "enfedamacademy@gmail.com",
        href: "mailto:enfedamacademy@gmail.com",
      },
    ],
    icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>',
  },
  {
    title: "School hours",
    text: "Monday to Friday, 7:30am to 3:00pm",
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  },
];

function submit() {
  const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
  window.location.href = `mailto:enfedamacademy@gmail.com?subject=${encodeURIComponent(
    form.subject
  )}&body=${encodeURIComponent(body)}`;
}
</script>
