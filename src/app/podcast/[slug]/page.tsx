import { getAllEpisodes, getEpisodeBySlug, formatDuration, PODCAST_LINKS } from "@/lib/podcast";
import { notFound } from "next/navigation";
import Link from "next/link";
import NewsletterCTA from "@/components/NewsletterCTA";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllEpisodes().map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) return {};
  return {
    title: episode.title,
    description: episode.description,
    openGraph: {
      type: "article",
      title: episode.title,
      description: episode.description,
      publishedTime: new Date(episode.date).toISOString(),
    },
  };
}

export default async function EpisodePage({ params }: Props) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) notFound();

  const episodes = getAllEpisodes();
  const idx = episodes.findIndex((e) => e.slug === slug);
  const prevEp = idx < episodes.length - 1 ? episodes[idx + 1] : null;
  const nextEp = idx > 0 ? episodes[idx - 1] : null;

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PodcastEpisode",
            name: episode.title,
            datePublished: new Date(episode.date).toISOString(),
            description: episode.description,
            url: `https://wealthinyourself.com/podcast/${episode.slug}`,
            associatedMedia: {
              "@type": "MediaObject",
              contentUrl: episode.audioUrl,
            },
            partOfSeries: {
              "@type": "PodcastSeries",
              name: "The Wealth In Yourself Podcast",
              url: "https://wealthinyourself.com/podcast",
            },
          }),
        }}
      />

      <article>
        {/* Header */}
        <section className="bg-primary py-10 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/podcast"
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              &larr; All Episodes
            </Link>
            <div className="mt-4 flex items-center gap-3 text-sm text-white/60">
              <span className="bg-white/10 px-3 py-1 rounded-full font-semibold text-secondary">
                EP {episode.episodeNumber}
              </span>
              <time>
                {new Date(episode.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {episode.duration && (
                <>
                  <span>&middot;</span>
                  <span>{formatDuration(episode.duration)}</span>
                </>
              )}
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight">
              {episode.title}
            </h1>
            {episode.guest && (
              <p className="mt-2 text-lg text-secondary">
                with {episode.guest}
              </p>
            )}
          </div>
        </section>

        {/* Player */}
        <section className="bg-white py-6">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <audio controls preload="none" className="w-full" src={episode.audioUrl}>
              Your browser does not support the audio element.
            </audio>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={episode.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:text-secondary transition-colors"
              >
                Listen on Spotify &rarr;
              </a>
              <a
                href={PODCAST_LINKS.apple}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:text-secondary transition-colors"
              >
                Listen on Apple Podcasts &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="bg-neutral-bg py-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-primary mb-4">About This Episode</h2>
            <div className="prose prose-neutral max-w-none text-neutral-dark/80 leading-relaxed">
              <p>{episode.description}</p>
            </div>

            {episode.transcript && (
              <details className="mt-8">
                <summary className="cursor-pointer text-lg font-bold text-primary hover:text-secondary transition-colors">
                  Episode Transcript
                </summary>
                <div className="mt-4 prose prose-sm prose-neutral max-w-none whitespace-pre-wrap text-neutral-dark/70 leading-relaxed">
                  {episode.transcript}
                </div>
              </details>
            )}
          </div>
        </section>

        {/* Prev/Next */}
        {(prevEp || nextEp) && (
          <section className="bg-white py-8">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex justify-between items-start gap-4">
                {prevEp ? (
                  <Link href={`/podcast/${prevEp.slug}`} className="group flex-1">
                    <p className="text-xs text-neutral-dark/70 mb-1">Previous Episode</p>
                    <p className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                      &larr; EP {prevEp.episodeNumber}: {prevEp.title}
                    </p>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
                {nextEp && (
                  <Link href={`/podcast/${nextEp.slug}`} className="group flex-1 text-right">
                    <p className="text-xs text-neutral-dark/70 mb-1">Next Episode</p>
                    <p className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                      EP {nextEp.episodeNumber}: {nextEp.title} &rarr;
                    </p>
                  </Link>
                )}
              </nav>
            </div>
          </section>
        )}
      </article>

      <NewsletterCTA />
    </>
  );
}
