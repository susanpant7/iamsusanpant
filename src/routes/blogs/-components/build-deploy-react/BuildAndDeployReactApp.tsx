import { Rocket, Sparkles } from "lucide-react";

export const BuildAndDeployReactApp = () => (
  <div className="space-y-10">
    {/* Intro */}
    <div>
      <h2 className="text-2xl font-bold text-white">
        Build & Deploy a React App — Step by Step
      </h2>
      <p className="text-slate-400 mt-2">
        <span className="text-white font-medium">This website</span> is
        built using the exact steps mentioned below.
      </p>
    </div>

    {/* AI encouragement */}
    <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
      <Sparkles className="text-green-400 mt-1" />
      <p className="text-slate-300 text-sm">
        With basic React knowledge and help from AI tools like{" "}
        <span className="text-white font-medium">ChatGPT</span> or{" "}
        <span className="text-white font-medium">Gemini</span>, you can easily
        build and deploy a React app without stress.
      </p>
    </div>

    {/* STEP 1 */}
    <Section title="1. Create a React App using Vite">
      <CodeBlock>npm create vite@latest</CodeBlock>
      <p>
        Select your framework and preferred setup.
        <span className="text-white font-medium">
          This will create a React JS app.
        </span>
      </p>
    </Section>

    {/* STEP 2 */}
    <Section title="2. Install Tailwind CSS">
      <p>
        Follow the official Tailwind CSS guide for Vite:
        <br />
        <span className="underline underline-offset-4">
          https://tailwindcss.com/docs/installation/using-vite
        </span>
      </p>
      <CodeBlock>npm run dev</CodeBlock>
      <p>You can now use Tailwind CSS in your app.</p>
    </Section>

    {/* STEP 3 */}
    <Section title="3. Install TanStack Router">
      <p>
        TanStack Router is a modern, type-safe router famous for excellent DX
        and strong TypeScript support.
      </p>
      <CodeBlock>
        {`npm install @tanstack/react-router
npm install -D @tanstack/router-plugin @tanstack/react-router-devtools`}
      </CodeBlock>
    </Section>

    {/* STEP 4 */}
    <Section title="4. Add TanStack Router to Vite config">
      <CodeBlock>
        {`export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackRouter(),
    react()
  ],
})`}
      </CodeBlock>
    </Section>

    {/* STEP 5 */}
    <Section title="5. Setup Routes Folder">
      <ul className="list-disc list-inside space-y-2">
        <li>
          Create a <code>routes</code> folder inside <code>src</code>
        </li>
        <li>
          Add a <code>__root.tsx</code> file
        </li>
        <li>You will see the content auto-generated</li>
      </ul>
    </Section>

    {/* STEP 6 */}
    <Section title="6. Modify App.tsx">
      <CodeBlock>
        {`import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen.ts';
import './App.css';

const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;`}
      </CodeBlock>
    </Section>

    {/* STEP 7 */}
    <Section title="7. Understand __root.tsx">
      <CodeBlock>
        {`function RootComponent() {
  return (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <Outlet />
    </React.Fragment>
  )
}`}
      </CodeBlock>

      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>
          <code>Outlet</code> → renders route pages like <code>/</code>,{" "}
          <code>/about</code>, <code>/contact</code>
        </li>
        <li>
          <code>&lt;div&gt;Hello "__root"!&lt;/div&gt;</code> → visible on every
          page
        </li>
      </ul>
    </Section>

    {/* STEP 8 */}
    <Section title="8. Create Pages">
      <ul className="list-disc list-inside space-y-1">
        <li>
          Create <code>routes/index.tsx</code> → homepage (<code>/</code>)
        </li>
        <li>
          Create <code>about.tsx</code> or <code>about/index.tsx</code> →
          <code> /about</code>
        </li>
      </ul>
    </Section>

    {/* STEP 9 */}
    <Section title="9. Generate Portfolio Content Using AI">
      <p>
        You can simply ask AI to generate portfolio content using Tailwind CSS
        for the following details:
      </p>
      <CodeBlock>{"<give your details>"}</CodeBlock>
    </Section>

    {/* STEP 10 */}
    <Section title="10. Add a Header">
      <ul className="list-disc list-inside space-y-1">
        <li>
          Create <code>src/components/header/Header.tsx</code>
        </li>
        <li>
          Update <code>RootComponent</code>:
        </li>
      </ul>

      <CodeBlock>
        {`function RootComponent() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Outlet />
      </div>
    </React.Fragment>
  );
}`}
      </CodeBlock>
    </Section>

    {/* STEP 11 */}
    <Section title="11. Fix 404 on Refresh (Vercel)">
      <p>
        If you have multiple pages, direct navigation like
        <code> yourwebsite.com/about</code> may show 404.
      </p>

      <CodeBlock>
        {`{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}`}
      </CodeBlock>
    </Section>

    {/* STEP 12 */}
    <Section title="12. Push Code to GitHub">
      <p>Create a GitHub repository and push your code.</p>
    </Section>

    {/* DEPLOY */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
      <div className="flex items-center gap-3">
        <Rocket className="text-green-400" />
        <h3 className="text-lg font-semibold text-white">Deploy on Vercel</h3>
      </div>

      <ul className="list-disc list-inside text-sm space-y-2">
        <li>Create a Vercel account</li>
        <li>Connect GitHub to Vercel</li>
        <li>Select your repo → Build</li>
        <li>
          Go to <b>Project Settings → Domains</b>
        </li>
        <li>Add your domain (example: yourdomain.com.np)</li>
        <li>Copy Vercel DNS</li>
        <li>
          Go to Mercantile → Edit DNS → Update primary & secondary nameservers
        </li>
        <li>Wait for DNS propagation</li>
      </ul>
    </div>

    {/* Closing */}
    <p className="text-green-400 font-medium">
      🎉 Congratulations! Your website is now live.
    </p>

    <p className="text-slate-400 text-sm">
      Any future push to GitHub will automatically build and deploy your app. If
      changes are not reflected, check logs in Vercel → Deployments.
    </p>
  </div>
);

/* ---------------- helpers ---------------- */

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-3">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <div className="text-slate-300 text-sm space-y-2">{children}</div>
  </div>
);

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-black/40 border border-white/10 rounded-lg p-3 text-xs overflow-x-auto">
    <code className="text-slate-200">{children}</code>
  </pre>
);
