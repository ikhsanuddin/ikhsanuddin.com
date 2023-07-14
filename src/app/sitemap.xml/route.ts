import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

const posts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
);

const URL = "https://ikhsanuddin.com";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${URL}</loc>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${URL}/portfolio</loc>
       <priority>0.5</priority>
       </url>
      <url>
       <loc>${URL}/blog</loc>
       <priority>0.8</priority>
       </url>
     <url>
       <loc>${URL}/about/ikhsanuddin</loc>
       <priority>0.9</priority>
     </url>
     ${posts
       .map((post) => {
         return `
           <url>
               <loc>${`${URL}${post.url}`}</loc>
               <lastmod>${format(parseISO(post.date), "yyyy-MM-dd")}</lastmod>
               <priority>0.6</priority>
           </url>
         `;
       })
       .join("")}
   </urlset>
 `;
}

export function GET() {
  const body = generateSiteMap();

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
