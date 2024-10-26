import LyricsDisplay from '@/components/lyrics-display';

export default async function LyricsPage({ params }: { params: { artist: string; title: string } }) {
  const artist = decodeURIComponent(params.artist);
  const title = decodeURIComponent(params.title);

  return (
    <div className="container mx-auto px-4 py-8">
      <LyricsDisplay artist={artist} title={title} />
    </div>
  );
}
