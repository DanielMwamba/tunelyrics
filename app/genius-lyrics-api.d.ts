// genius-lyrics-api.d.ts
declare module 'genius-lyrics-api' {
    export interface GeniusApiOptions {
      apiKey: string
      title: string
      artist: string
      optimizeQuery?: boolean
    }
  
    export interface SongData {
      title: string
      artist: string
      albumArt: string
      url: string
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any // Permet d’ajouter des propriétés additionnelles non spécifiées
    }
  
    /**
     * Récupère les paroles de la chanson en fonction des options fournies.
     * @param options - Les options pour la recherche de paroles, incluant le titre, l'artiste et la clé API.
     * @returns Une promesse qui se résout avec les paroles de la chanson sous forme de chaîne de caractères.
     */
    export function getLyrics(options: GeniusApiOptions): Promise<string>
  
    /**
     * Récupère les informations d'une chanson en fonction des options fournies.
     * @param options - Les options pour la recherche de chanson, incluant le titre, l'artiste et la clé API.
     * @returns Une promesse qui se résout avec les données de la chanson sous forme de SongData.
     */
    export function getSong(options: GeniusApiOptions): Promise<SongData>
  }
  