import { NextResponse } from "next/server";
import { getLyrics, getSong } from "genius-lyrics-api";

export async function GET(request: Request) {
  try {
    // Récupère les paramètres de la requête (artist et song)
    const url = new URL(request.url);
    const artist = url.searchParams.get("artist");
    const song = url.searchParams.get("song");

    // Vérifie que les paramètres sont bien présents
    if (!artist || !song) {
      return NextResponse.json(
        { error: "Les paramètres 'artist' et 'song' sont requis." },
        { status: 400 }
      );
    }

    const apiKey = "4D-pz_Kz7UX_3scJ01mt7oiZ5wQYULf_cNZ5tqIWKyYIHpwnp1l2WWw7KVD9C1Up"; // Remplace par ta clé API Genius

    // Options pour la bibliothèque genius-lyrics-api
    const options = {
      apiKey,
      artist,
      title: song,
      optimizeQuery: true,
    };

    // Récupère les paroles et les informations de la chanson
    const lyrics = await getLyrics(options);
    const songData = await getSong(options);

    // Renvoie les données au client
    return NextResponse.json({ lyrics, songData });
  } catch (error) {
    console.error("Erreur :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des données." },
      { status: 500 }
    );
  }
}