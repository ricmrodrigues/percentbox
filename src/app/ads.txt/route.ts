/** Served at /ads.txt — clean text/plain for AdSense crawlers. */
const ADS_TXT =
  "google.com, pub-5355338650267313, DIRECT, f08c47fec0942fa0\n";

export function GET() {
  return new Response(ADS_TXT, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
      // Avoid attachment-style headers that confuse some crawlers
      "X-Content-Type-Options": "nosniff",
    },
  });
}
