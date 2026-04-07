import { useState } from "react";
import { ExternalLink, ShieldCheck, WifiOff, Check, Copy } from "lucide-react";

const CodeBlock = ({ lines }: { lines: string[] }) => {
  const [copied, setCopied] = useState(false);
  const text = lines.join("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="relative my-6 rounded-xl overflow-hidden border border-white/10 bg-slate-950">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500/20 border border-blue-500/40" />
        </div>
        <button
          onClick={handleCopy}
          className="text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 py-1 px-2.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-blue-400 transition-all"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-4 font-mono text-sm leading-relaxed overflow-x-auto text-blue-100/80">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="text-slate-600 select-none">$</span>
            <span>{line}</span>
          </div>
        ))}
      </pre>
    </div>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono tracking-tighter uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
    {children}
  </span>
);

const Step = ({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex gap-6 mb-12 relative group">
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center font-mono text-blue-400 font-bold text-lg group-hover:border-blue-500/50 transition-colors">
      {num}
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-4 italic italic-none">
        {title}
      </h3>
      <div className="text-slate-400 leading-relaxed">{children}</div>
    </div>
  </div>
);

const InfoCard = ({
  icon: Icon,
  label,
  desc,
}: {
  icon: any;
  label: string;
  desc: string;
}) => (
  <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
    <Icon className="text-blue-400 mb-3" size={20} />
    <div className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-2">
      {label}
    </div>
    <div className="text-sm text-slate-400 leading-snug">{desc}</div>
  </div>
);

// --- Main Page Component ---

export default function Gemma4Guide() {
  const [activeTab, setActiveTab] = useState<"gui" | "terminal">("gui");

  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section className="prose prose-invert max-w-none">
        <div className="flex gap-2 mb-4">
          <Badge>Local AI</Badge>
          <Badge>Privacy</Badge>
        </div>
        <p className="text-xl text-slate-300 leading-relaxed italic">
          Your own ChatGPT-like model — fully offline, fully private, running on
          your own hardware. No subscriptions, no data harvesting.
        </p>
      </section>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard
          icon={WifiOff}
          label="Works Offline"
          desc="No internet needed. Run your model anywhere—even on a plane."
        />
        <InfoCard
          icon={ShieldCheck}
          label="100% Private"
          desc="Nothing leaves your device. Prompts never touch a cloud server."
        />
      </div>

      <hr className="border-white/10" />

      {/* Setup Steps */}
      <div className="space-y-4">
        <Step num={1} title="Download Ollama">
          <p>
            Ollama is the engine that runs large language models locally. It
            handles the heavy lifting of GPU acceleration automatically.
          </p>
          <a
            href="https://ollama.com"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all font-mono text-sm uppercase tracking-wider"
          >
            ollama.com/download <ExternalLink size={14} />
          </a>
        </Step>

        <Step num={2} title="Choose Your Model">
          <p className="mb-4">
            Gemma 4 comes in various sizes. Choose based on your available RAM:
          </p>
          <div className="grid gap-2 mb-6">
            {[
              {
                tag: "gemma4:e2b",
                desc: "Edge · ~7GB · High Speed",
                highlight: false,
              },
              {
                tag: "gemma4:e4b",
                desc: "Edge · ~9.6GB · Balanced",
                highlight: true,
              },
              {
                tag: "gemma4:26b",
                desc: "Workstation · MoE · Powerful",
                highlight: false,
              },
            ].map((m) => (
              <div
                key={m.tag}
                className={`flex justify-between items-center p-3 rounded-lg border font-mono text-xs ${m.highlight ? "bg-blue-500/10 border-blue-500/40 text-blue-100" : "bg-slate-900 border-white/5 text-slate-400"}`}
              >
                <span>{m.tag}</span>
                <span className="opacity-60">{m.desc}</span>
              </div>
            ))}
          </div>
        </Step>

        <Step num={3} title="Initialize and Run">
          {/* Tab Switcher */}
          <div className="flex gap-2 p-1 bg-slate-950 border border-white/10 rounded-lg w-fit mb-6">
            {(["gui", "terminal"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-4 py-1.5 rounded-md font-mono text-[10px] uppercase tracking-widest transition-all ${activeTab === t ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "text-slate-500 hover:text-slate-300"}`}
              >
                {t}
              </button>
            ))}
          </div>

          {activeTab === "terminal" ? (
            <div className="animate-in fade-in duration-500">
              <CodeBlock
                lines={["ollama pull gemma4:e4b", "ollama run gemma4:e4b"]}
              />
            </div>
          ) : (
            <div className="p-6 rounded-xl bg-slate-900/50 border border-white/5 text-slate-400 text-sm animate-in fade-in duration-500">
              Launch the Ollama desktop app, search for{" "}
              <strong className="text-blue-400">Gemma4</strong> in the library,
              and click download. Once finished, a chat interface will be
              available instantly.
            </div>
          )}
        </Step>

        <Step num={4} title="Developer API Access (Postman)">
          <p className="mb-4">
            Ollama runs a local server at port{" "}
            <code className="text-blue-400">11434</code>. You can test the API
            by sending a <code className="font-bold">POST</code> request to the
            chat endpoint.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="text-xs text-gray-400 mb-2 font-mono">
              POST http://localhost:11434/api/chat
            </div>
            <CodeBlock
              lines={[
                "{",
                '  "model": "gemma4:e4b",',
                '  "messages": [',
                '    { ',
                '       "role": "user", ',
                '       "content": "How to lose weight?"',
                "    }",
                "  ],",
                '  "stream": false',
                "}",
              ]}
            />
          </div>
          <p className="mt-4 text-sm text-gray-400 italic">
            Note: Set your "Body" to <b>raw</b> and format to <b>JSON</b> in
            Postman.
          </p>
        </Step>
      </div>

      {/* Quick Summary Box */}
      <div className="p-8 rounded-2xl bg-linear-to-br from-blue-500/10 to-transparent border border-blue-500/20">
        <h4 className="font-black uppercase tracking-tighter text-white mb-4">
          Quick Recap
        </h4>
        <ul className="space-y-3 text-slate-400 font-mono text-sm">
          <li className="flex gap-3">
            <span className="text-blue-400">01</span> Install Ollama
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400">02</span> Run "ollama run gemma4"
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400">03</span> Enjoy private, local
            inference
          </li>
        </ul>
      </div>

      <footer className="pt-8 text-center">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-600">
          Gemma 4 Architecture • DeepMind Engineering
        </p>
      </footer>
    </div>
  );
}
