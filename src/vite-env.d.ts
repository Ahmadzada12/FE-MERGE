/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_API_BASE_URL: string
    // tambahkan variabel lain di sini
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  