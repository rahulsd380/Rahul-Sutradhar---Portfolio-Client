import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";


export const metadata: Metadata = {
  title: {
    default: "Rahul Sutradhar",
    template: "%s | Rahul Sutradhar",
  },
  description:
    "Web and app developer helping startups and growing businesses build scalable, production-ready software systems.",
  openGraph: {
    type: "website",
    siteName: "Rahul Sutradhar",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`antialiased bg-neutral-10`}
      >
         <Script
          id="person-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rahul Sutradhar",
              jobTitle: "Web & App Developer",
              description:
                "Web and app developer based in Bangladesh specializing in scalable, production-ready systems for startups and growing businesses.",
              url: "https://rahulsutradhar.com/",
              image: "https://rahulsutradhar.com/profile.jpg",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Bangladesh",
              },
              knowsAbout: [
                "Web Development",
                "App Development",
                "SaaS Systems",
                "Scalable Architecture",
                "Startup Engineering",
                "Performance Optimization",
              ],
              sameAs: [
                "https://www.linkedin.com/in/rahul-sutradhar380/",
                "https://github.com/rahulsd380",
              ],
            }),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Rahul Sutradhar",
              url: "https://rahulsutradhar.com/",
              inLanguage: "en",
              publisher: {
                "@type": "Person",
                name: "Rahul Sutradhar",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
