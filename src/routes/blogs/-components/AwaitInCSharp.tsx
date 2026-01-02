const AwaitInCSharp = () => {
    return (
        <section className="relative w-full max-w-5xl mx-auto px-6 py-20 text-slate-200">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                Async / Await:{" "}
                <span className="text-blue-500">The Art of Doing Nothing</span>
            </h2>

            <p className="text-slate-400 text-lg mb-12 max-w-3xl">
                Or: <span className="italic">How to stop your server from having a nervous breakdown. ☕</span>
            </p>

            {/* Intro */}
            <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                    In the world of .NET, <code className="text-blue-400">async</code> and{" "}
                    <code className="text-blue-400">await</code> are the most misunderstood duo since Batman and Robin.
                    Most devs use them because the compiler yelled at them until they did.
                </p>

                <p>
                    The common logic:
                </p>

                <ul className="list-disc list-inside text-slate-400 ml-4">
                    <li><code>async</code> = "Go fast juice"</li>
                    <li><code>await</code> = "Wait... but fast?"</li>
                </ul>

                <p>
                    <strong>Spoiler alert:</strong> That’s wrong. If you’re "waiting," how can it be fast?
                    Did we just pay Microsoft for a "Slow Down" button?
                </p>
            </div>

            {/* Threads Section */}
            <div className="mt-16 space-y-6">
                <h3 className="text-2xl font-bold text-white">
                    Threads are Diva Employees
                </h3>

                <p className="text-slate-400">
                    Think of a <strong>Thread</strong> as a high-priced consultant. They cost 1MB of RAM just to exist.
                    If you have 1,000 threads just sitting there, your RAM is gone and your CPU is crying.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 font-mono text-sm text-slate-300">
                    Thread: "I’m here. I’m expensive. What do you want?"
                </div>
            </div>

            {/* Code Example */}

            <div className="mt-16">
                <h3 className="text-2xl font-bold text-white mb-4">
                    The "I’m Outta Here" Pattern
                </h3>

                <pre className="bg-slate-900 border border-white/10 rounded-2xl p-6 text-sm overflow-x-auto text-slate-200">
{`async Task HandleRequest()
{
    Log("Starting...");                     // Thread: "I can do this."
    
    await db.GetGiantData();                // Thread: "Whoa, that's gonna take 5 seconds?
                                            // I'm not sitting here for that. 
                                            // I'm going to the breakroom."
    
    FinishWork();                           // Thread: "I'm back from my nap. What did I miss?"
}`}
        </pre>
            </div>

            {/* Explanation */}
            <div className="mt-12 space-y-6 text-slate-300 leading-relaxed">
                <p>
                    When the code hits that <code className="text-blue-400">await</code>, the thread doesn't sit
                    and stare at the database like a stalker.
                </p>

                <p>
                    It realizes the Database is doing the heavy lifting. The thread literally <strong>quits the job</strong> and
                    heads back to the Thread Pool to help someone else.
                </p>

                <blockquote className="border-l-4 border-blue-500 pl-6 italic text-slate-400">
                    “The database is busy. I’m not a babysitter. Call me when there’s actually work to do.”
                </blockquote>

                <p>
                    When the data finally arrives, <em>any</em> available thread (or the same one) grabs the "bookmark"
                    and finishes the method.
                </p>
            </div>

            {/* Conclusion */}
            <div className="mt-16 border-t border-white/10 pt-10 space-y-4">
                <h3 className="text-2xl font-bold text-white">
                    The Moral of the Story
                </h3>

                <ul className="space-y-2 text-slate-400">
                    <li>❌ <strong>Async</strong> doesn't make the DB faster.</li>
                    <li>✅ <strong>Async</strong> stops your threads from being lazy bums.</li>
                    <li>🚀 Your server can handle 10,000 users with 50 threads instead of 10,000.</li>
                </ul>

                <p className="text-slate-300 font-semibold mt-6 uppercase tracking-widest text-sm">
                    Stop Wasting Threads. Let them take a break.
                </p>
            </div>
        </section>
    )
};

export default AwaitInCSharp;