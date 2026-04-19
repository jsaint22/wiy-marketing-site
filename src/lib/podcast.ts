import episodes from "@/data/podcast-episodes.json";

export interface Episode {
  slug: string;
  title: string;
  guest: string;
  date: string;
  duration: string;
  description: string;
  spotifyUrl: string;
  audioUrl: string;
  episodeNumber: number;
  transcript?: string | null;
}

export function getAllEpisodes(): Episode[] {
  return episodes as Episode[];
}

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return (episodes as Episode[]).find((e) => e.slug === slug);
}

export function formatDuration(dur: string): string {
  if (!dur) return "";
  const parts = dur.split(":");
  if (parts.length === 3) {
    const h = parseInt(parts[0]);
    const m = parseInt(parts[1]);
    if (h > 0) return `${h}h ${m}m`;
    return `${m} min`;
  }
  return dur;
}

export const PODCAST_LINKS = {
  spotify: "https://podcasters.spotify.com/pod/show/wealth-in-yourself/",
  apple: "https://podcasts.apple.com/us/podcast/wealth-in-yourself/id1690224218",
  youtube: "https://www.youtube.com/@wealthinyourself",
  rss: "https://anchor.fm/s/e286d458/podcast/rss",
};
