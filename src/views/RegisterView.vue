<script setup lang="ts">
import { useRegisterForm } from '../composables/useRegisterForm';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const {
    nombre, errorNombre,
    apellido, errorApellido,
    email, errorEmail,
    usuario, errorUsuario,
    contrasena, errorContrasena,
    confirmarContrasena, errorConfirmar,
    aceptarTerminos, errorTerminos,
    recibirNovedades,
    registrarUsuario
} = useRegisterForm();
</script>

<template>
  <div class="bg-[#f5f0e8] flex justify-center py-12 m-10">
    
    <div class="relative w-full max-w-xl">
      
      <div class="flex items-center justify-center gap-4 mb-12 font-mono text-base">
        <div class="flex items-center gap-2">
            <span class="bg-[#42b883] text-white w-8 h-8 flex items-center justify-center font-bold text-lg border-2 border-[#34495E]">1</span>
            <span class="font-bold text-[#34495E]">{{ t('registro.pasos.datos') }}</span>
        </div>
        <div class="w-8 border-t-2 border-[#34495E]"></div>
        <div class="flex items-center gap-2 opacity-50">
            <span class="bg-white text-[#34495E] w-8 h-8 flex items-center justify-center font-bold text-lg border-2 border-[#34495E]">2</span>
            <span class="font-bold text-[#34495E]">{{ t('registro.pasos.verificar') }}</span>
        </div>
        <div class="w-8 border-t-2 border-[#34495E] opacity-50"></div>
        <div class="flex items-center gap-2 opacity-50">
            <span class="bg-white text-[#34495E] w-8 h-8 flex items-center justify-center font-bold text-lg border-2 border-[#34495E]">3</span>
            <span class="font-bold text-[#34495E]">{{ t('registro.pasos.listo') }}</span>
        </div>
      </div>

      <div class="bg-white border-4 border-[#34495E] p-10 shadow-[8px_8px_0_#34495E] relative">
        
        <div class="absolute top-4 -left-6 -translate-y-full bg-[#ffc107] border-4 border-[#34495E] px-6 py-2 z-10">
            <span class="font-bold text-[#34495E] text-base tracking-wider uppercase">{{ t('registro.nuevo_usuario') }}</span>
        </div>

        <div class="mb-8">
          <h2 class="display text-5xl text-[#34495E] mb-3">{{ t('registro.titulo') }}</h2>
          <p class="font-mono text-base text-gray-500">{{ t('registro.subtitulo') }}</p>
        </div>

        <form @submit.prevent="registrarUsuario" class="space-y-6">
          
            <div class="grid grid-cols-2 gap-6">
                <div class="space-y-3">
                    <label for="nombre" class="block font-bold text-[#34495E] text-sm tracking-wider uppercase">{{ t('registro.campos.nombre.label') }}</label>
                    <input 
                        id="nombre"
                        v-model="nombre"
                        type="text" 
                        :placeholder="t('registro.campos.nombre.placeholder')"
                        class="w-full bg-[#f5f0e8] border-4 border-[#34495E] p-4 font-mono text-[#34495E] text-base focus:outline-none focus:shadow-[4px_4px_0_#42b883] transition-all placeholder:text-gray-400"
                        :class="{'border-red-500': errorNombre, 'focus:shadow-[4px_4px_0_#ef4444]': errorNombre}"
                    />
                    <span v-if="errorNombre" class="text-red-500 text-xs font-bold font-mono">{{ errorNombre }}</span>
                </div>
                <div class="space-y-3">
                    <label for="apellido" class="block font-bold text-[#34495E] text-sm tracking-wider uppercase">{{ t('registro.campos.apellido.label') }}</label>
                    <input 
                        id="apellido"
                        v-model="apellido"
                        type="text" 
                        :placeholder="t('registro.campos.apellido.placeholder')"
                        class="w-full bg-[#f5f0e8] border-4 border-[#34495E] p-4 font-mono text-[#34495E] text-base focus:outline-none focus:shadow-[4px_4px_0_#42b883] transition-all placeholder:text-gray-400"
                        :class="{'border-red-500': errorApellido, 'focus:shadow-[4px_4px_0_#ef4444]': errorApellido}"
                    />
                    <span v-if="errorApellido" class="text-red-500 text-xs font-bold font-mono">{{ errorApellido }}</span>
                </div>
            </div>

            <div class="space-y-3">
                <label for="email" class="block font-bold text-[#34495E] text-sm tracking-wider uppercase">{{ t('registro.campos.email.label') }}</label>
                <input 
                    id="email"
                    v-model="email"
                    type="email" 
                    :placeholder="t('registro.campos.email.placeholder')"
                    class="w-full bg-[#f5f0e8] border-4 border-[#34495E] p-4 font-mono text-[#34495E] text-base focus:outline-none focus:shadow-[4px_4px_0_#42b883] transition-all placeholder:text-gray-400"
                    :class="{'border-red-500': errorEmail, 'focus:shadow-[4px_4px_0_#ef4444]': errorEmail}"
                />
                <span v-if="errorEmail" class="text-red-500 text-xs font-bold font-mono">{{ errorEmail }}</span>
            </div>

            <div class="space-y-3">
                <label for="usuario" class="block font-bold text-[#34495E] text-sm tracking-wider uppercase">{{ t('registro.campos.usuario.label') }}</label>
                <div class="relative">
                    <div class="absolute left-0 top-0 bottom-0 w-12 bg-[#34495E] flex items-center justify-center text-white font-bold text-lg">@</div>
                    <input 
                        id="usuario"
                        v-model="usuario"
                        type="text" 
                        :placeholder="t('registro.campos.usuario.placeholder')"
                        class="w-full bg-[#f5f0e8] border-4 border-[#34495E] p-4 pl-16 font-mono text-[#34495E] text-base focus:outline-none focus:shadow-[4px_4px_0_#42b883] transition-all placeholder:text-gray-400"
                        :class="{'border-red-500': errorUsuario, 'focus:shadow-[4px_4px_0_#ef4444]': errorUsuario}"
                    />
                </div>
                <span v-if="errorUsuario" class="text-red-500 text-xs font-bold font-mono">{{ errorUsuario }}</span>
            </div>

            <div class="space-y-3">
                <label for="contrasena" class="block font-bold text-[#34495E] text-sm tracking-wider uppercase">{{ t('registro.campos.contrasena.label') }}</label>
                <input 
                    id="contrasena"
                    v-model="contrasena"
                    type="password" 
                    :placeholder="t('registro.campos.contrasena.placeholder')"
                    class="w-full bg-[#f5f0e8] border-4 border-[#34495E] p-4 font-mono text-[#34495E] text-base focus:outline-none focus:shadow-[4px_4px_0_#42b883] transition-all placeholder:text-gray-400"
                    :class="{'border-red-500': errorContrasena, 'focus:shadow-[4px_4px_0_#ef4444]': errorContrasena}"
                />
                <div class="flex gap-1 h-2 mt-2">
                    <div class="flex-1 bg-[#42b883]" :class="{'opacity-20': !contrasena || contrasena.length < 1}"></div>
                    <div class="flex-1 bg-[#42b883]" :class="{'opacity-20': !contrasena || contrasena.length < 8}"></div>
                    <div class="flex-1 bg-[#ffc107]" :class="{'opacity-20': !contrasena || !/[A-Z]/.test(contrasena)}"></div>
                    <div class="flex-1 bg-[#e0e0e0]" :class="{'opacity-20': !contrasena || !/[\W]/.test(contrasena)}"></div>
                </div>
                <span v-if="errorContrasena" class="text-red-500 text-xs font-bold font-mono">{{ errorContrasena }}</span>
                <p v-else class="text-[10px] uppercase font-bold text-gray-400">{{ t('registro.campos.contrasena.seguridad') }}</p>
            </div>

            <div class="space-y-3">
                <label for="confirmarContrasena" class="block font-bold text-[#34495E] text-sm tracking-wider uppercase">{{ t('registro.campos.confirmar.label') }}</label>
                <input 
                    id="confirmarContrasena"
                    v-model="confirmarContrasena"
                    type="password" 
                    :placeholder="t('registro.campos.confirmar.placeholder')"
                    class="w-full bg-[#f5f0e8] border-4 border-[#34495E] p-4 font-mono text-[#34495E] text-base focus:outline-none focus:shadow-[4px_4px_0_#42b883] transition-all placeholder:text-gray-400"
                    :class="{'border-red-500': errorConfirmar, 'focus:shadow-[4px_4px_0_#ef4444]': errorConfirmar}"
                />
                <span v-if="errorConfirmar" class="text-red-500 text-xs font-bold font-mono">{{ errorConfirmar }}</span>
            </div>

            <div class="space-y-4 mt-8">
                <div class="space-y-1">
                    <label class="flex items-start gap-4 cursor-pointer group select-none">
                        <div class="relative w-7 h-7 border-2 border-[#34495E] shrink-0 bg-white group-hover:bg-gray-50 flex items-center justify-center">
                            <input type="checkbox" v-model="aceptarTerminos" class="peer appearance-none w-full h-full cursor-pointer absolute inset-0 opacity-0" />
                            <svg class="w-5 h-5 text-[#42b883] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <span class="text-sm font-mono text-gray-500 leading-tight pt-0.5">
                            {{ t('registro.terminos.texto') }} <a href="#" class="font-bold text-[#42b883] underline decoration-dotted">{{ t('registro.terminos.link_terminos') }}</a> {{ t('registro.terminos.y') }} <a href="#" class="font-bold text-[#42b883] underline decoration-dotted">{{ t('registro.terminos.link_privacidad') }}</a>{{ t('registro.terminos.final') }}
                        </span>
                    </label>
                    <span v-if="errorTerminos" class="text-red-500 text-xs font-bold font-mono block pl-11">{{ errorTerminos }}</span>
                </div>

                <label class="flex items-start gap-4 cursor-pointer group select-none">
                    <div class="relative w-7 h-7 border-2 border-[#34495E] shrink-0 bg-white group-hover:bg-gray-50 flex items-center justify-center">
                        <input type="checkbox" v-model="recibirNovedades" class="peer appearance-none w-full h-full cursor-pointer absolute inset-0 opacity-0" />
                        <svg class="w-5 h-5 text-[#42b883] opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <span class="text-sm font-mono text-gray-500 leading-tight pt-1">
                        {{ t('registro.novedades') }}
                    </span>
                </label>
            </div>

            <button 
                type="submit"
                class="w-full mt-8 bg-[#42b883] text-white font-bold py-4 px-6 text-xl border-4 border-[#34495E] shadow-[4px_4px_0_#34495E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#34495E] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
                {{ t('registro.boton') }}
                <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>

        </form>

      </div>

      <div class="text-center mt-8">
        <p class="font-mono text-base text-[#34495E]">
          {{ t('registro.ya_cuenta') }} 
          <router-link to="/login" class="font-bold text-[#42b883] underline decoration-4 decoration-[#42b883]/30 hover:decoration-[#42b883] underline-offset-2 transition-all">
            {{ t('registro.inicia_sesion') }}
          </router-link>
        </p>
      </div>

    </div>
  </div>
</template>>