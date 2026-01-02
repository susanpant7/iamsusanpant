import { CheckCircle, Globe, Zap, Cloud } from "lucide-react";

export const BuildMyWebsite = () => (
  <div className="space-y-8">
    {/* Heading */}
    <div>
      <h2 className="text-2xl font-bold text-white">
        Your domain is ready. What’s next?
      </h2>
      <p className="text-slate-400 mt-2">
        Once your domain is validated, you can start building and publishing
        your website within minutes.
      </p>
    </div>

    {/* Steps */}
    <div className="grid sm:grid-cols-2 gap-6">
      <div className="flex gap-4">
        <CheckCircle className="text-green-400 mt-1" />
        <div>
          <h3 className="font-semibold text-white">Build a Static Website</h3>
          <p className="text-slate-400 text-sm mt-1">
            Create a simple portfolio, blog, or landing page using HTML/CSS,
            React, Next.js, or Astro.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <Globe className="text-blue-400 mt-1" />
        <div>
          <h3 className="font-semibold text-white">Connect Your Domain</h3>
          <p className="text-slate-400 text-sm mt-1">
            Point your domain to your hosting provider using DNS records. No
            server setup required.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <Zap className="text-yellow-400 mt-1" />
        <div>
          <h3 className="font-semibold text-white">Deploy for Free</h3>
          <p className="text-slate-400 text-sm mt-1">
            Platforms like Vercel and Netlify let you deploy static sites
            instantly with free SSL.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <Cloud className="text-purple-400 mt-1" />
        <div>
          <h3 className="font-semibold text-white">Go Live Instantly</h3>
          <p className="text-slate-400 text-sm mt-1">
            Every push to GitHub automatically updates your live website. No
            manual uploads.
          </p>
        </div>
      </div>
    </div>

    {/* Hosting options */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="font-semibold text-white mb-3">
        Free hosting for static websites
      </h3>

      <ul className="space-y-3 text-slate-300 text-sm">
        <li>
          <span className="font-semibold text-white">Vercel</span> — best for
          React, Next.js, and modern frontend apps
        </li>
        <li>
          <span className="font-semibold text-white">Netlify</span> — great for
          portfolios, blogs, and simple static sites
        </li>
        <li>
          <span className="font-semibold text-white">GitHub Pages</span> — ideal
          for pure HTML/CSS projects
        </li>
      </ul>
    </div>

    {/* Closing line */}
    <p className="text-slate-400 text-sm">
      You don’t need a backend or paid server to get started — a static website
      is fast, secure, and perfect for personal portfolios.
    </p>
  </div>
);
