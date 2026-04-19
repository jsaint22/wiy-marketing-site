import Link from "next/link";
import type { Metadata } from "next";
import { getAllEpisodes, formatDuration, PODCAST_LINKS } from "@/lib/podcast";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Podcast — The Wealth In Yourself Podcast",
  description:
    "Conversations about money, life planning, and what the advisory industry doesn't want you to know. Hosted by Josh St. Laurent, CFP, CFT.",
};

const platforms = [
  { name: "Spotify", href: PODCAST_LINKS.spotify, icon: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" },
  { name: "Apple Podcasts", href: PODCAST_LINKS.apple, icon: "M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.6-.12 1.2-.636 1.452-.444.228-.972.168-1.404-.204-.24-.216-.384-.48-.444-.804-.264-1.344-.78-2.412-1.68-3.396-1.272-1.38-2.880-2.052-4.752-1.98-3.396.12-6.168 2.832-6.18 6.24 0 1.464.456 2.88 1.32 4.068.864 1.2 2.064 2.064 3.468 2.508.36.108.6.396.72.744.06.24.024.504-.12.72-.228.348-.612.54-1.008.456-1.836-.516-3.42-1.62-4.584-3.192a8.27 8.27 0 01-1.74-5.088c-.036-4.632 3.696-8.472 8.316-8.544.132 0 .264 0 .396.012l.008.028zm-.156 4.776c1.896-.048 3.54.924 4.38 2.472.48.876.696 1.824.696 2.856 0 .36-.264.696-.636.768-.48.12-.912-.168-1.02-.636-.036-.18-.036-.372-.06-.552-.132-1.296-.756-2.34-1.848-3.06-.756-.504-1.62-.696-2.532-.6-2.052.216-3.54 1.884-3.564 3.648 0 .468.084.936.264 1.380.108.3.06.636-.12.888-.228.312-.612.456-1.008.372-.312-.072-.54-.264-.66-.564a5.07 5.07 0 01-.36-1.836c-.06-2.832 2.196-5.196 5.028-5.196l.44.06zm.144 4.644c.852-.012 1.572.636 1.668 1.476.06.42-.06.816-.276 1.188-.396.672-.564 1.404-.528 2.196.024.468.024.936.06 1.404.06.756-.384 1.404-1.08 1.632-.348.108-.72.108-1.068 0-.696-.228-1.14-.876-1.08-1.632.036-.468.036-.936.06-1.404.036-.792-.132-1.524-.528-2.196-.324-.564-.36-1.2.012-1.74.3-.432.744-.732 1.236-.744.12-.012.24-.012.348-.012l.12-.168h.006z" },
  { name: "YouTube", href: PODCAST_LINKS.youtube, icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
];

export default function PodcastPage() {
  const episodes = getAllEpisodes();

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-4">
            35 Episodes and Counting
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            The Wealth In Yourself Podcast
          </h1>
          <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Conversations about money, life planning, and the things most
            advisors won&apos;t say out loud. Hosted by Josh St. Laurent.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-medium transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d={p.icon} />
                </svg>
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Show-level Spotify embed */}
      <section className="bg-white py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <iframe
            src="https://open.spotify.com/embed/show/6L3ew149S5Kc8vN2UwYRSR?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
            title="Wealth In Yourself Podcast on Spotify"
          />
        </div>
      </section>

      {/* Episode List */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8">All Episodes</h2>
          <div className="space-y-4">
            {episodes.map((ep) => (
              <Link
                key={ep.slug}
                href={`/podcast/${ep.slug}`}
                className="block group bg-white rounded-xl p-5 sm:p-6 border border-transparent hover:border-secondary/20 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {ep.episodeNumber}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors leading-snug">
                      {ep.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-neutral-dark/50">
                      <time>
                        {new Date(ep.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      {ep.duration && (
                        <>
                          <span>&middot;</span>
                          <span>{formatDuration(ep.duration)}</span>
                        </>
                      )}
                      {ep.guest && (
                        <>
                          <span>&middot;</span>
                          <span className="text-secondary font-medium">
                            {ep.guest}
                          </span>
                        </>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed line-clamp-2">
                      {ep.description}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center text-primary/30 group-hover:text-secondary transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </>
  );
}
