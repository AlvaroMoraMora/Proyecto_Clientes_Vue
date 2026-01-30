<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const correo = ref('');
const contrasena = ref('');
const recordarme = ref(false);

const iniciarSesion = () => {
  console.log('Intento de inicio de sesión:', { correo: correo.value, contrasena: contrasena.value, recordarme: recordarme.value });
  alert('Formulario válido. Iniciando sesión...');
};
</script>

<template>
  <div class="bg-[#f5f0e8] flex justify-center m-10 py-12">
    
    <div class="relative w-full max-w-lg">
      
      <div class="bg-white border-4 border-[#34495E] p-10 shadow-[8px_8px_0_#34495E] relative">
        
        <div class="absolute top-2 -left-4 -translate-y-full bg-[#42b883] border-4 border-[#34495E] px-6 py-2 z-10">
            <span class="font-bold text-white text-base tracking-wider">{{ t('login.acceso') }}</span>
        </div>

        <div class="text-center mb-10 mt-6">
          <h2 class="display text-5xl text-[#34495E] mb-3">{{ t('login.titulo') }}</h2>
          <p class="font-mono text-base text-gray-500">{{ t('login.subtitulo') }}</p>
        </div>

        <form @submit.prevent="iniciarSesion" class="space-y-8">
          
          <div class="space-y-3">
            <label for="correo" class="block font-bold text-[#34495E] text-base tracking-wider">{{ t('login.email.label') }}</label>
            <input 
              id="correo"
              v-model="correo"
              type="email" 
              required
              pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,3}$"
              :title="t('login.email.titulo_validacion')"
              :placeholder="t('login.email.placeholder')"
              class="w-full bg-[#f5f0e8] border-4 border-[#34495E] p-4 font-mono text-lg text-[#34495E] focus:outline-none focus:shadow-[4px_4px_0_#42b883] transition-all placeholder:text-gray-400 shadow-none"
            />
          </div>

          <div class="space-y-3">
            <label for="contrasena" class="block font-bold text-[#34495E] text-base tracking-wider">{{ t('login.contrasena.label') }}</label>
            <input 
              id="contrasena"
              v-model="contrasena"
              type="password" 
              required
              minlength="8"
              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}"
              :title="t('login.contrasena.titulo_validacion')"
              placeholder="********"
              class="w-full bg-[#f5f0e8] border-4 border-[#34495E] p-4 font-mono text-lg text-[#34495E] focus:outline-none focus:shadow-[4px_4px_0_#42b883] transition-all placeholder:text-gray-400 shadow-none"
            />
          </div>

          <div class="flex items-center justify-between text-base font-mono">
            <label class="flex items-center gap-3 cursor-pointer select-none group">
              <div class="relative w-6 h-6 border-2 border-[#34495E] flex items-center justify-center bg-white group-hover:bg-gray-50">
                 <input type="checkbox" v-model="recordarme" class="peer appearance-none w-full h-full cursor-pointer opacity-0 absolute inset-0" />
                 <svg class="w-4 h-4 text-[#34495E] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                 </svg>
              </div>
              <span class="text-gray-500 group-hover:text-[#34495E]">{{ t('login.recordarme') }}</span>
            </label>
            
            <a href="#" class="text-gray-400 hover:text-[#34495E] underline decoration-2 decoration-dotted underline-offset-4">
              {{ t('login.olvidaste') }}
            </a>
          </div>

          <button 
            type="submit"
            class="w-full bg-[#42b883] text-white font-bold py-4 px-6 text-xl border-4 border-[#34495E] shadow-[4px_4px_0_#34495E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#34495E] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            {{ t('login.boton') }} 
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </button>

        </form>

        <div class="relative flex py-8 items-center">
            <div class="grow border-t-2 border-[#34495E]"></div>
            <span class="shrink mx-4 text-gray-400 text-sm font-bold tracking-widest uppercase">{{ t('login.continuar') }}</span>
            <div class="grow border-t-2 border-[#34495E]"></div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            <button class="flex items-center justify-center gap-3 border-4 border-[#34495E] p-3 hover:bg-gray-50 font-bold text-[#34495E] transition-all shadow-[4px_4px_0_#34495E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#34495E] cursor-pointer bg-white">
                <span class="text-2xl">G</span>
                <span class="text-base">GOOGLE</span>
            </button>
            <button class="flex items-center justify-center gap-3 border-4 border-[#34495E] p-3 bg-[#34495E] text-white hover:bg-[#2c3e50] font-bold transition-all shadow-[4px_4px_0_#42b883] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#42b883] cursor-pointer">
                <span class="text-base">GH</span>
                <span class="text-base">GITHUB</span>
            </button>
        </div>

      </div>

      <div class="text-center mt-8">
        <p class="font-mono text-base text-[#34495E]">
          {{ t('login.no_cuenta') }} 
          <router-link to="/Registrar" class="font-bold text-[#42b883] underline decoration-4 decoration-[#42b883]/30 hover:decoration-[#42b883] underline-offset-2 transition-all">
            {{ t('login.registrate') }}
          </router-link>
        </p>
      </div>

      <div class="mt-10 bg-[#ffc107] border-4 border-[#34495E] p-5 flex gap-4 shadow-[4px_4px_0_#34495E]">
        <div class="text-2xl">🔒</div>
        <div>
            <p class="font-bold text-sm uppercase tracking-wider text-[#34495E] mb-1">{{ t('login.seguro.titulo') }}</p>
            <p class="font-mono text-sm text-[#34495E]/80 leading-tight">
                {{ t('login.seguro.descripcion') }}
            </p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>
