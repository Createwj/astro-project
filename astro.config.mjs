import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

import node from '@astrojs/node';

export default defineConfig({
  integrations: [react(), svelte(), vue()],
  // output: 'server',
  // adapter: node({
  //   mode: 'standalone'
  // }),
});