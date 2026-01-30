<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section class="bg-[#34495E] text-white border-4 border-[#34495E] p-10 mb-16 relative max-w-[90%] w-[1300px] mx-auto">
    <div
      class="absolute -top-4 -left-4 px-4 py-2 bg-[#42b883] font-bold border-4 border-[#34495E]"
    >
      {{ t('newsletter.tag') }}
    </div>
    <h2 class="display text-4xl mb-4 pt-4">{{ t('newsletter.titulo') }}</h2>
    <p class="mb-6 opacity-80">
      {{ t('newsletter.descripcion') }}
    </p>
    <form class="flex flex-wrap gap-4">
      <input
        type="email"
        :placeholder="t('newsletter.placeholder')"
        class="flex-1 min-w-[200px] px-4 py-3 bg-white text-[#34495E] border-4 border-[#34495E] font-bold focus:outline-none focus:border-[#42b883]"
      />
      <button
        type="submit"
        class="px-8 py-3 bg-[#42b883] text-white font-bold border-4 border-white shadow-brutal hover:bg-[#ffd93d] hover:text-[#34495E] transition-colors"
      >
        {{ t('newsletter.boton') }} →
      </button>
    </form>
  </section>
</template>
