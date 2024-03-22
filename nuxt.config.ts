import type { Link } from "#build/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss','@pinia/nuxt'],
 css: ['~/assets/css/tailwind.css'],
 pinia : {
    storesDirs: ['./stores/**'],
 },
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
