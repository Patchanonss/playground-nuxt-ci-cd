<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white text-gray-800"
  >
    <div class="max-w-2xl text-center">
      <h1 class="text-4xl font-bold mb-4">About This App</h1>
      <p class="text-gray-600 text-lg mb-6">
        This page will be displayed at the
        <code class="bg-gray-100 px-1 rounded">/about</code> route. It’s part of
        a clean, modern Nuxt 3 setup with TailwindCSS styling.
      </p>

      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        ← Back to Home
      </NuxtLink>
    </div>
  </section>
</template>
