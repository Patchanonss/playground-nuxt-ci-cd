<template>
  <div
    class="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-6 py-12"
  >
    <!-- Title -->
    <h1 class="text-4xl md:text-5xl font-extrabold text-center mb-4">
      Welcome to Your Nuxt App
    </h1>
    <p class="text-base md:text-lg text-center text-gray-500 max-w-xl mb-10">
      Simple. Clean. Fast. Navigate to your pages below and get things done.
    </p>

    <!-- Navigation Buttons -->
    <div class="flex flex-col md:flex-row gap-4">
      <NuxtLink
        to="/about"
        class="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg shadow hover:bg-gray-800 transition"
      >
        About
      </NuxtLink>
      <NuxtLink
        to="/tasktracker"
        class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
      >
        Task Tracker
      </NuxtLink>
    </div>

    <!-- Footer -->
    <footer class="mt-12 text-sm text-gray-400">
      Built with Nuxt 3 & TailwindCSS
    </footer>
  </div>
</template>
