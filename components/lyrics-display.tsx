"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SongData } from 'genius-lyrics-api';
import { motion } from 'framer-motion';

type LyricsDisplayProps = {
  artist: string;
  title: string;
};

export default function LyricsDisplay({ artist, title }: LyricsDisplayProps) {
  const [songData, setSongData] = useState<SongData | null>(null);
  const [lyrics, setLyrics] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
   const fetchSongData = async () => {
  try {
    const response = await fetch(`/api/lyrics?artist=${encodeURIComponent(artist)}&song=${encodeURIComponent(title)}`);
    const data = await response.json();

    if (response.ok) {
      // console.log("Paroles :", data.lyrics);
      // console.log("Infos de la chanson :", data.songData);
      setSongData(data.songData)
      setLyrics(data.lyrics)
      setLoading(false)
      setError(data.error);
    }
  } catch (err) {
    console.error("Erreur lors de la requête :", err);
    setError("Erreur lors de la requête");
  }
};
    fetchSongData();
  }, [artist, title]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;
  if (!songData) return <div>Aucune donnée de chanson disponible.</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-6 bg-black bg-opacity-50 rounded-lg shadow-lg"
    >
      <div className="text-center mb-6">
        {songData.albumArt && (
          <Image
            src={songData.albumArt}
            alt="Album Art"
            width={250}
            height={250}
            className="rounded-lg shadow-md mx-auto"
          />
        )}
        <h2 className="text-2xl font-bold mt-4 text-[#d4792a]">{songData.title}</h2>
        <p className="text-lg text-[#1472a6]">{songData.artist}</p>
      </div>
      <motion.pre
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="whitespace-pre-wrap text-center text-lg leading-relaxed"
      >
        {lyrics}
      </motion.pre>
    </motion.div>
  );
}
