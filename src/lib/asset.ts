/** Prefixa caminhos de public/ com a base do Vite (raiz ou subpasta do Pages). */
export const asset = (caminho: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${caminho.startsWith('/') ? caminho : `/${caminho}`}`
}
