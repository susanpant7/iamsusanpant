import type { ReactNode } from "react";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

function CodeBlock({
  lines,
  label,
}: {
  lines: string[];
  label?: string;
}) {
  const [copied, setCopied] = useState(false);
  const text = lines.join("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="relative my-4 rounded-xl overflow-hidden border border-white/10 bg-slate-950">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
          {label ?? "code"}
        </span>
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

function Line({
  who,
  children,
}: {
  who: string;
  children: ReactNode;
}) {
  return (
    <p>
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400">
        {who}:
      </span>{" "}
      <span className="text-slate-300">{children}</span>
    </p>
  );
}

function Beat({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      {kicker ? (
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-blue-400">
          {kicker}
        </div>
      ) : null}
      <h3 className="text-xl font-black uppercase tracking-tighter text-white">
        {title}
      </h3>
      <div className="space-y-4 text-slate-400 leading-relaxed">{children}</div>
    </section>
  );
}

function Quote({ children }: { children: ReactNode }) {
  return (
    <p className="pl-4 border-l-2 border-blue-500/40 text-slate-200 italic">
      {children}
    </p>
  );
}

export function AmritStoryIntro() {
  return (
    <div className="space-y-10">
      <Beat kicker="Why this exists" title="Meet Amrit">
        <p>
          Amrit is in his 1:1 with his manager, Ben.
        </p>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
          <Line who="Ben">“We need to integrate AI into our project.”</Line>
          <Line who="Amrit">“Sure. What problem are we solving?”</Line>
          <Line who="Ben">“We need AI.”</Line>
          <Line who="Amrit">“Right, but what...”</Line>
          <Line who="Ben">“Let’s add it to the roadmap.”</Line>
        </div>
        <p>
          Meeting adjourned. Problem identified: AI deficiency.
        </p>
        <p>Next, the project meeting.</p>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
          <Line who="Sunil (PM)">“Can we make this AI-powered?”</Line>
          <Line who="Amrit">“What would the AI actually do?”</Line>
          <Line who="Sunil">“We’ll figure that out after the demo.”</Line>
        </div>
        <p>
          Amrit adds <em>AI-powered</em> to the slide deck. Suddenly the
          project is three months ahead of the competition. On PowerPoint, at
          least.
        </p>
        <p>
          Ben wants AI. Sunil wants AI. Even the office coffee machine vendor
          is pitching “AI-powered brewing.” Amrit isn’t a software engineer
          anymore. He’s an AI integration service with a salary.
        </p>
        <p>
          Last week he was fixing APIs. This week he’s supposed to understand
          neural networks, RAG, vector databases, agents, and why every
          executive slide needs the word <em>autonomous</em>.
        </p>
        <Quote>BRO. I JUST WANTED TO SHIP A FEATURE.</Quote>
      </Beat>

      <Beat title="Then the lobby Wi-Fi dies">
        <p>
          Amrit is on a beanbag in the lobby, laptop open, ready to change the
          world, and the Wi-Fi is dead. He asks his AI agent: “Who should fix
          the lobby Wi-Fi?”
        </p>
        <div className="p-5 rounded-xl bg-slate-950 border border-white/10 space-y-3">
          <Line who="AI">
            “Certainly! Resolving connectivity issues requires a
            collaborative, multidisciplinary approach...”
          </Line>
        </div>
        <p>
          Then comes a 12-step troubleshooting guide, a brief history of
          wireless communication, and the legendary words “It depends.”
        </p>
        <Quote>BRO. THE WI-FI IS STILL DEAD.</Quote>
        <p>Fine. The old-fashioned way.</p>
        <p>
          Amrit knows exactly who works in IT Support. The new IT girl,
          Aishwarya. He has noticed her. He has definitely noticed her. And
          this Wi-Fi outage is not a crisis. It is an opportunity.
        </p>
        <p>
          He opens Teams, finds her name, and types, with a smile that should
          be illegal in a corporate environment:
        </p>
        <Quote>
          “Hey Aishwarya! My laptop isn’t connecting to the Wi-Fi, could you
          help?”
        </Quote>
        <p>
          Sent. Seen? No. Replied? No. Five minutes pass. Ten. Thirty. Her
          Teams inbox, it turns out, is a black hole where messages go to be
          forgotten.
        </p>
        <p>
          Amrit deletes the message. Closes Teams. Stares at the ceiling like
          nothing ever happened.
        </p>
        <p>Desperate, he turns to Suman, his fellow dev and desk neighbor.</p>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
          <Line who="Amrit">“Bro, is the Wi-Fi working for you?”</Line>
          <Line who="Suman">“Let me check.”</Line>
        </div>
        <p>
          Suman does not check. Suman opens Teams and messages Aishwarya: “Hi
          Aishwarya, Wi-Fi is not working in the lobby, can you check?”
        </p>
        <p>Reply in 40 seconds.</p>
        <Quote>
          “Hi Suman! On it. Can you share your device details?”
        </Quote>
        <p>Amrit walks straight to his PM.</p>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
          <Line who="Amrit">
            “Sunil, we need a proper way to manage internal issues. Employees
            shouldn’t depend on luck, timing, or who they know. I’m thinking
            we use AI.”
          </Line>
          <Line who="Sunil">
            <em className="text-slate-500 not-italic">(tears up)</em> “Finally.
            Someone who says AI without me asking. Add it to the roadmap.”
          </Line>
        </div>
        <p>
          Amrit takes the task. Not because of jealousy. Absolutely not. It’s
          about employee experience and a deeply held belief in fair ticket
          distribution.
        </p>
        <p>
          Somewhere on that beanbag, a hero is born. “What happened to me
          must never happen to anyone else.”
        </p>
      </Beat>

      <Beat title="Why not just prompt it better?">
        <p>
          Amrit tries, of course. He writes a 3,000-word prompt covering the
          org chart, the escalation rules, and why Suman must never be left
          alone with a power cable. He pastes it into every request and prays
          the model remembers paragraph 14.
        </p>
        <p>
          It doesn’t go well. On Monday the model returns clean JSON. On
          Tuesday it returns JSON wrapped in a friendly paragraph. On
          Wednesday it returns a haiku about routers, and his code crashes.
          Meanwhile that 3,000-word prompt travels with every single request,
          so he pays for the same essay thousands of times. The model also
          forgets paragraph 14, and “it depends” keeps sneaking back in.
        </p>
        <p>
          Amrit realizes something important. He doesn’t need the model to
          know more. He needs it to behave the same way, every time. That is
          exactly what fine-tuning is for.
        </p>
      </Beat>

      <Beat kicker="The actual lesson" title="Why fine-tuning matters">
        <p>
          Prompting tells a model what to do this time. Fine-tuning teaches
          it how to behave every time. You get consistent output in a strict
          format, so software can depend on it. Cost drops at scale, because
          the behavior lives in the model and the prompt shrinks from 3,000
          words to one sentence. A small fine-tuned model can often do a
          narrow job faster and cheaper than a giant general one, and it
          learns your company’s own rules instead of the internet’s average.
        </p>
        <p className="text-sm text-slate-500">
          To be fair, for simple formats a few good examples in the prompt
          can take you surprisingly far, so try that first. Amrit passed that
          point around Wednesday’s haiku.
        </p>
        <p>
          So Amrit fine-tunes. He shows the model examples of how the company
          handles IT issues, so it learns one response pattern in a format
          his code can read. Issue in. Category, team, assignee, and priority
          out. No philosophy degree required.
        </p>
        <p>
          The catch is that Amrit’s laptop has no GPU, so he outsources the
          work to Google Colab. His laptop delegated the hard part to
          Google’s computer. Even machines have middle management now.
        </p>
        <p>
          The walkthrough below is that work: install a base model, build a
          dataset, train on Colab, then run the result locally in Ollama.
        </p>
      </Beat>
    </div>
  );
}

const AFTER_JSON = `{
  "issue": "Lobby Wi-Fi not working",
  "category": "network",
  "team": "Network Support",
  "assigned_to": "Aishwarya",
  "priority": "high",
  "confidence": 0.94
}`;

const TICKET_CODE = `result = json.loads(model_output)
ticket = create_ticket(
    title=result["issue"],
    team=result["team"],
    assignee=result["assigned_to"],
    priority=result["priority"],
)`;

export function AmritStoryOutro() {
  return (
    <div className="space-y-10">
      <Beat kicker="After the training" title="No essays. Just JSON.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <div className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest">
              Before
            </div>
            <p className="text-slate-400 text-sm">
              “Several teams may be responsible depending on the network
              architecture, device configuration, and organizational
              responsibilities...”
            </p>
            <p className="text-xs text-slate-500">
              Sir, this is a lobby, not a parliamentary inquiry.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-blue-500/10 border border-blue-500/30 space-y-3">
            <div className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest">
              After
            </div>
            <p className="text-slate-200 text-sm">
              Category, team, assignee, priority. Same shape every time.
            </p>
          </div>
        </div>
        <CodeBlock label="json" lines={AFTER_JSON.split("\n")} />
        <p>
          Amrit stares at the screen. A tear of pride rolls down his cheek.
          The model has learned. No essays. No “it depends.” Just JSON, the
          love language of backend developers.
        </p>
        <p>
          But the JSON is just text. The model doesn’t create tickets. It
          only suggests, and Amrit’s code takes over:
        </p>
        <CodeBlock label="python" lines={TICKET_CODE.split("\n")} />
        <p>
          That’s it. No AI, no GPU, just an API call to the ticketing
          system. This is also why a consistent format matters so much. If
          the model answers in perfect JSON only 99% of the time, that’s a
          bug every hundred tickets. Fine-tuning is what turns the model from
          a talkative guest into a dependable component.
        </p>
        <p>
          Amrit hits Enter. Ticket{" "}
          <code className="text-blue-400">IT-4821</code> created. Assigned
          to: Aishwarya. A notification pops up on her screen with a
          priority, an SLA, and a manager alert at 30 minutes. This time, it
          can’t get lost.
        </p>
        <Quote>Mission complete.</Quote>
      </Beat>

      <Beat title="Life after fine-tuning">
        <p>
          Aishwarya fixes the Wi-Fi in four minutes and comments: “All
          sorted! Anything else?”
        </p>
        <p>
          Anything else? Amrit has so many things. He replies on the ticket.
          She replies back. Soon the conversation moves to a private Teams
          chat, and her replies now take 40 seconds. Funny how that works.
        </p>
        <p>
          Within a week, they are talking every day about lunch, coffee,
          memes, and a shared hatred of Teams notification sounds. Suman
          notices. Suman is not okay.
        </p>
        <p>
          Meanwhile, the whole office loves the new system. Nobody pings
          anyone on Teams anymore. You type your problem, the model picks
          the right team and person, and the code creates the ticket.
          Raising an issue now takes ten seconds, and nothing ever gets lost.
          Ben says it’s the best thing the team has shipped this year, and
          Sunil has added “AI-powered ticketing” to three different slide
          decks.
        </p>
        <p>The fine-tuning worked. Amrit is a legend.</p>
      </Beat>

      <Beat kicker="The catch" title="Then, a plot twist">
        <p>
          Aishwarya gets a great offer and leaves for abroad. There is cake.
          Amrit eats two slices and says nothing, like a man at a funeral.
        </p>
        <p>
          A few weeks later, new people join the company. Some people switch
          teams, and a couple of old ones leave. The org chart looks nothing
          like it did on training day.
        </p>
        <p>The fine-tuned model has not been told.</p>
        <p>
          It keeps assigning tickets to Aishwarya, with confidence 0.94, like
          a GPS routing everyone to a bridge that closed in 2022. Even
          Amrit’s own ticket, “my VPN is down,” goes to her. He is being
          haunted by his own system.
        </p>
        <p>
          That’s the catch with fine-tuning. It is brilliant at teaching a
          model how to answer, but it freezes what the model knows on the
          day you trained it. It is a trained habit, not a live employee
          directory.
        </p>
        <p>
          So Amrit opens his laptop and sighs. To fix this, he has to collect
          all the new employee data, rebuild the training examples, rent the
          Colab GPU, fine-tune again, test again, and deploy again. And next
          month, when someone else switches teams, he will have to do it all
          over again.
        </p>
        <Quote>BRO. THAT’S AN HR UPDATE, NOT A TRAINING JOB.</Quote>
        <p>
          Is there an easier way? Is there a way to give the model fresh
          information at the moment a ticket arrives, without retraining it
          every time someone gets a new desk?
        </p>
        <p>Amrit stares at the ceiling. Somewhere, a beanbag waits.</p>
        <div className="p-8 rounded-2xl bg-linear-to-br from-blue-500/10 to-transparent border border-blue-500/20">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-blue-400 mb-2">
            To be continued
          </div>
          <p className="text-white font-black uppercase tracking-tighter text-xl mb-2">
            Next up: how Amrit stops retraining and starts retrieving.
          </p>
          <p className="text-slate-400 text-sm">
            Fine-tuning taught the model how to answer. RAG is how it stays
            current when Aishwarya leaves and the org chart moves.
          </p>
        </div>
      </Beat>
    </div>
  );
}
