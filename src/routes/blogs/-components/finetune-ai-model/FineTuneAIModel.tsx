import { useState } from "react";
import type { ReactNode } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import baseModel from "./base-model.webp";
import colabNotebook from "./colab-notebook.webp";
import colabGpu from "./colab-gpu.webp";
import colabFiles from "./colab-files.webp";
import trainedModel from "./trained-model.webp";
import { AmritStoryIntro, AmritStoryOutro } from "./AmritStory";

const INSTRUCTION =
  "Route this support issue to the correct team and employee, and suggest the first steps to resolve it.";

const DATASETS = [
  {
    team: "Software team",
    examples: [
      {
        instruction: INSTRUCTION,
        input: "The PostgreSQL database in production is running out of disk space.",
        output:
          "Team: Software | Assigned to Rita Kumari: Check disk usage on the production server, delete old logs and backups, and add more storage if needed.",
      },
      {
        instruction: INSTRUCTION,
        input: "The web app shows a 500 error after the latest release.",
        output:
          "Team: Software | Assigned to Sunita Sharma: Check the application logs, find the failing change in the latest release, and roll back if needed.",
      },
    ],
  },
  {
    team: "Security team",
    examples: [
      {
        instruction: INSTRUCTION,
        input: "The new HR coordinator needs access to the HR document library.",
        output:
          "Team: Security | Assigned to Krishna Prasad: Confirm approval from the manager, add the user to the HR access group, and record the approval in the ticket.",
      },
      {
        instruction: INSTRUCTION,
        input:
          "A vulnerability scan found a critical Log4j version in the ERP system.",
        output:
          "Team: Security | Assigned to Govinda Prasad: Confirm the finding, check how serious it is, work with the system owner to apply the patch, and rescan to verify the fix.",
      },
    ],
  },
  {
    team: "Network team",
    examples: [
      {
        instruction: INSTRUCTION,
        input: "Switch port Gi3/0/5 in the basement is err-disabled.",
        output:
          "Team: Network | Assigned to Madan Bahadur: Check the error counters and cable on the port, replace the cable if needed, then re-enable the port.",
      },
      {
        instruction: INSTRUCTION,
        input:
          "The internet connection at the Chicago branch is slow and dropping data.",
        output:
          "Team: Network | Assigned to Hari Bahadur: Check the router connection and errors at the Chicago branch, confirm backup links work, and open a ticket with the internet provider.",
      },
    ],
  },
  {
    team: "Triage (unclear issues)",
    examples: [
      {
        instruction: INSTRUCTION,
        input: "Something is wrong with my computer.",
        output:
          "Team: Triage | Assigned to Kumar Thapa: Contact the user to ask what is happening, collect error messages, then reassign to the right team.",
      },
    ],
  },
];

const OVERVIEW = [
  "Install Ollama and test the base model",
  "Create the dataset",
  "Set up Google Colab",
  "Train the model",
  "Export the trained model",
  "Run the trained model in Ollama",
];

const DATASET_RULES = [
  "Use one format for every example.",
  'The input should contain only the issue. Do not add extras like "New ticket -" or "Assign to the right person:".',
  "Make sure each issue really belongs to the team you assign it to.",
  "Write the same kind of issue in different ways, so the model learns the meaning and not just the wording.",
  'Include a few "unclear" issues that go to a Triage team, so the model does not guess wrongly.',
  "A demo can work with a few examples, but a real project needs at least 500 examples.",
];

const TRAIN_STEPS = [
  {
    title: "Install Unsloth",
    detail:
      "Unsloth is a tool that makes training faster and uses less GPU memory.",
  },
  {
    title: "Load the base model",
    detail:
      "Use the Unsloth version of Llama 3.1 8B Instruct in 4-bit size, so it fits on the free T4 GPU. This is a different download from the one in Ollama.",
  },
  {
    title: "Load your dataset",
    detail: "Read the JSON dataset files.",
  },
  {
    title: "Format the examples",
    detail:
      "Turn each example into one block of text: the instruction, the issue, then the answer. The model learns from this text.",
  },
  {
    title: "Train with LoRA",
    detail:
      "LoRA does not change the whole model. It adds a small set of extra settings (called an adapter) on top of it and trains only those. This is faster and cheaper.",
  },
];

function CodeBlock({ lines }: { lines: string[] }) {
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
          type="button"
          onClick={handleCopy}
          className="text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 py-1 px-2.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-blue-400 transition-all"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-4 font-mono text-sm leading-relaxed overflow-x-auto text-blue-100/80">
        {lines.map((line, i) => (
          <div key={i}>{line || " "}</div>
        ))}
      </pre>
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono tracking-tighter uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
      {children}
    </span>
  );
}

function Step({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-6 mb-12 relative group">
      <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center font-mono text-blue-400 font-bold text-lg group-hover:border-blue-500/50 transition-colors">
        {num}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-4">
          {title}
        </h3>
        <div className="text-slate-400 leading-relaxed space-y-4">{children}</div>
      </div>
    </div>
  );
}

function Shot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950">
        <img src={src} alt={alt} className="w-full h-auto" />
      </div>
      <figcaption className="mt-2 text-xs font-mono text-slate-500">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function FineTuneAIModel() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex gap-2 mb-4">
          <Badge>Fine-tuning</Badge>
          <Badge>Ollama</Badge>
          <Badge>LoRA</Badge>
        </div>
        <p className="text-xl text-slate-300 leading-relaxed">
          Amrit was told to add AI. Then the lobby Wi-Fi died. This is the
          story of why he fine-tuned a small model, then the exact steps to
          do it yourself.
        </p>
      </section>

      <AmritStoryIntro />

      <hr className="border-white/10" />

      <section className="space-y-4">
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-blue-400">
          The walkthrough
        </div>
        <h3 className="text-xl font-black uppercase tracking-tighter text-white">
          Teach the model to route an IT issue
        </h3>
        <p className="text-slate-400 leading-relaxed">
          We will teach a small AI model to read an IT support issue and tell
          us two things: which team should handle it, and who on that team
          should take it, along with the first steps to fix it. In the
          dataset below that answer is a single readable line. In Amrit’s app
          the same facts become JSON his ticket code can parse.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <div className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
            Issue
          </div>
          <p className="text-slate-300">
            Switch port Gi3/0/5 in the basement is down.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <div className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
            Answer we want
          </div>
          <p className="text-slate-200">
            Team: Network | Assigned to Madan Bahadur: Check the cable and
            port, then re-enable it.
          </p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <h3 className="text-sm font-black uppercase tracking-widest text-white mb-4">
          Overview of the steps
        </h3>
        <ol className="space-y-3">
          {OVERVIEW.map((step, index) => (
            <li key={step} className="flex gap-3 text-slate-400 font-mono text-sm">
              <span className="text-blue-400">{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      <hr className="border-white/10" />

      <div>
        <Step num={1} title="Install Ollama and test the base model">
          <p>
            Ollama is a free tool that lets us run AI models on our own
            computer.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Download and install Ollama from{" "}
              <a
                href="https://ollama.com"
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
              >
                ollama.com <ExternalLink size={12} />
              </a>
              .
            </li>
            <li>Download a model, for example Llama 3.1 8B Instruct.</li>
            <li>
              Ask it a support question, for example: &quot;Wifi issue in
              lobby. Which team should handle this?&quot;
            </li>
          </ol>
          <Shot
            src={baseModel}
            alt="Ollama answering a lobby Wi-Fi question with a long, general response"
            caption="The base model before fine-tuning. The answer is general, long, and does not know our teams."
          />
          <p>
            The answer will be general and long. It will not follow our format
            and it does not know our team or employee names.
          </p>
        </Step>

        <Step num={2} title="Create the dataset">
          <p>
            The dataset is a list of examples. Each example shows the model an
            issue and the correct answer. The better the dataset, the better
            the trained model.
          </p>
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-3">
              Rules for a good dataset
            </div>
            <ul className="space-y-2">
              {DATASET_RULES.map((rule) => (
                <li key={rule} className="flex gap-3 text-sm">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>
            Every example has three parts:{" "}
            <strong className="text-blue-400">instruction</strong>,{" "}
            <strong className="text-blue-400">input</strong>, and{" "}
            <strong className="text-blue-400">output</strong>.
          </p>
          {DATASETS.map((dataset) => (
            <div key={dataset.team}>
              <div className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                {dataset.team}
              </div>
              <CodeBlock lines={JSON.stringify(dataset.examples, null, 2).split("\n")} />
            </div>
          ))}
          <div className="p-5 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <div className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
              Tip: let AI write the dataset
            </div>
            <p className="text-sm">
              Ask an AI assistant like Claude to create hundreds of examples.
              Give it the format above, the list of teams and employees, and
              ask for varied wording.
            </p>
          </div>
        </Step>

        <Step num={3} title="Set up Google Colab">
          <p>
            Training needs a powerful graphics card (GPU). My laptop does not
            have a suitable one, so I am using Google Colab, which gives a free
            GPU online.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Go to{" "}
              <a
                href="https://colab.research.google.com"
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
              >
                colab.research.google.com <ExternalLink size={12} />
              </a>
              .
            </li>
            <li>Create a new notebook.</li>
          </ol>
          <Shot
            src={colabNotebook}
            alt="A new Google Colab notebook named ItSupportTeamFineTune.ipynb"
            caption="A new notebook: ItSupportTeamFineTune.ipynb."
          />
          <ol className="list-decimal pl-5 space-y-2" start={3}>
            <li>
              Click <strong className="text-slate-200">Runtime</strong>, then{" "}
              <strong className="text-slate-200">Change runtime type</strong>,
              and choose <strong className="text-slate-200">T4 GPU</strong>.
            </li>
            <li>
              Click <strong className="text-slate-200">Save</strong>, then{" "}
              <strong className="text-slate-200">Connect</strong>.
            </li>
          </ol>
          <Shot
            src={colabGpu}
            alt="Colab change runtime type dialog with T4 GPU selected"
            caption="Hardware accelerator set to T4 GPU."
          />
          <ol className="list-decimal pl-5 space-y-2" start={5}>
            <li>Upload the dataset files using the file panel on the left.</li>
          </ol>
          <Shot
            src={colabFiles}
            alt="Colab file panel showing Network, Security, and Software team JSON files next to a code cell"
            caption="Dataset JSON files uploaded in the Colab file panel."
          />
          <p>
            Colab notebooks are made of code cells. Type commands into a cell
            and run it.
          </p>
        </Step>

        <Step num={4} title="Train the model">
          <p>Run these tasks in order, each in its own code cell:</p>
          <ol className="space-y-4">
            {TRAIN_STEPS.map((task, index) => (
              <li key={task.title} className="flex gap-3">
                <span className="font-mono text-blue-400 text-sm mt-0.5">
                  {index + 1}.
                </span>
                <span>
                  <strong className="text-slate-200">{task.title}.</strong>{" "}
                  {task.detail}
                </span>
              </li>
            ))}
          </ol>
          <p className="text-sm italic text-slate-500">
            I just know the steps. I asked an AI agent to give me code for each
            of these steps. We can also ask an AI agent to generate an ipynb
            file with all the commands that need to be run in Google Colab.
          </p>
        </Step>

        <Step num={5} title="Export the trained model">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Merge the LoRA adapter into the base model.</li>
            <li>
              Save it as a GGUF file. GGUF is the format Ollama understands.
              Choose the size <code className="text-blue-400">q4_k_m</code>,
              which is small and still gives good answers.
            </li>
            <li>
              Download the <code className="text-blue-400">.gguf</code> file to
              your computer.
            </li>
          </ol>
        </Step>

        <Step num={6} title="Run the trained model in Ollama">
          <p>
            Ollama needs a small file called a Modelfile that points to your
            GGUF file.
          </p>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              Create a file named <code className="text-blue-400">Modelfile</code>{" "}
              (no extension) with this line:
            </li>
          </ol>
          <CodeBlock lines={["FROM ./your-model-name.gguf"]} />
          <ol className="list-decimal pl-5 space-y-3" start={2}>
            <li>Create the model in Ollama:</li>
          </ol>
          <CodeBlock lines={["ollama create it-support-router -f Modelfile"]} />
          <ol className="list-decimal pl-5 space-y-3" start={3}>
            <li>Run it:</li>
          </ol>
          <CodeBlock lines={["ollama run it-support-router"]} />
          <p>Ask it IT support questions.</p>
          <Shot
            src={trainedModel}
            alt="Fine-tuned Ollama model routing Wi-Fi, certificate, and Outlook issues to Network, Security, and Software"
            caption="After training, the model answers in the team, assignee, and first-steps format."
          />
          <p>
            If the trained model gives wrong teams or wrong names, the usual
            fix is to add more and better examples to the dataset and train
            again.
          </p>
        </Step>
      </div>

      <hr className="border-white/10" />

      <AmritStoryOutro />
    </div>
  );
}
