import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

import Unocss from '@unocss/astro'
import { presetIcons, presetAttributify, presetUno } from 'unocss'
import unoConfig from './uno.config.js'

import node from '@astrojs/node';

export default defineConfig({
  integrations: [
    react(),
    svelte(),
    vue(),
   
    Unocss({  
      presets: [presetAttributify(), presetUno(), presetIcons()],
      ...unoConfig
    })
  ],
  // output: 'server',
  // adapter: node({
  //   mode: 'standalone'
  // }),
});