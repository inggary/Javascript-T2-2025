//import '@/../envConfig.js'

export const url_raiz = process.env.NEXT_PUBLIC_URL_RAIZ //"http://127.0.0.1:4000"

const token_strapi = process.env.NEXT_PUBLIC_STRAPI

export const config = {
    headers: { Authorization: `Bearer ${token_strapi}` }
  }

