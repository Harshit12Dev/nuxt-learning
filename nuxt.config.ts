import type { Link } from "#build/components";

import type { Title } from "#build/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss'],
 css: ['~/assets/css/tailwind.css'],
 app :{
  head:{
    title : 'Nuxt Dojo',
    meta :  [{
      name : 'description',content:'Everything about nuxt 3'
    }],
    link : [
      {rel : "stylesheet", href : 'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ]
  }
 }
})
