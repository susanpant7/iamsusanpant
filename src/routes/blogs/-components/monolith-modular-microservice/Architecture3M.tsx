const Architecture3M = () => {
    const sections = [
        {
            title: "Monolith",
            scenario: "Scenario: Small, simple patient management app with few users and similar load across modules.",
            conversation: [
                { speaker: "Product Manager", text: "We need a system to manage patients, appointments, and billing. It should be ready in a month." },
                { speaker: "Lead Dev", text: "Okay. How many users do we expect at launch?" },
                { speaker: "Product Manager", text: "Just a few clinics. Not a lot of traffic initially." },
                { speaker: "Architect", text: "And how complex are the modules? Are they tightly connected?" },
                { speaker: "Product Manager", text: "Pretty simple. Billing needs patient info, appointments need patient info, but nothing too complicated." },
                { speaker: "Junior Dev", text: "So all modules will have similar load and usage?" },
                { speaker: "Product Manager", text: "Yes, roughly the same." },
                { speaker: "Lead Dev", text: "Alright, given the small size, few modules, and similar load, a traditional monolith makes sense. One codebase, one database, simple deployment." },
                { speaker: "DevOps", text: "That will make deployments easy. Only one server to manage." },
                { speaker: "Security Engineer", text: "And security is simpler too. Just secure one codebase." },
                { speaker: "Architect", text: "Testing is straightforward. Run the app, test everything together. No extra setup needed." },
                { speaker: "Product Manager", text: "So the decision is a monolith for speed and simplicity?" },
                { speaker: "Lead Dev", text: "Exactly. We can always refactor toward modularity later if the app grows." },
            ],
        },
        {
            title: "Modular Monolith",
            scenario: "Scenario: Growing app, multiple developers, modules are identifiable but still have similar scaling needs.",
            conversation: [
                { speaker: "Product Manager", text: "Our patient management app is getting more users. We now have billing, appointments, patient records, reporting, and notifications." },
                { speaker: "Lead Dev", text: "How many developers are working on it now?" },
                { speaker: "Product Manager", text: "About eight developers, and each tends to focus on specific features or areas." },
                { speaker: "Junior Dev", text: "The codebase is starting to feel tangled. Changes in one area sometimes break others unexpectedly." },
                { speaker: "Architect", text: "Do the different parts have very different traffic or scaling requirements?" },
                { speaker: "Product Manager", text: "Not really. All modules see roughly similar load and grow together." },
                { speaker: "Lead Dev", text: "We still want simple deployments and shared database transactions, right?" },
                { speaker: "Product Manager", text: "Yes, absolutely. We don’t want the complexity of multiple services yet." },
                { speaker: "Architect", text: "Perfect. This is the ideal case for a modular monolith. We organize the code into clear bounded contexts — separate projects or folders for each module — with defined interfaces and domain events for communication." },
                { speaker: "Lead Dev", text: "Modules can’t directly touch each other’s data or internals. That prevents accidental coupling and makes refactoring safer." },
                { speaker: "Junior Dev", text: "So it’s like having separate rooms in one house — clear boundaries but still one roof." },
                { speaker: "Architect", text: "Exactly. And the big advantage: if one module later becomes a scaling outlier, we can extract it into a microservice more easily because the boundaries are already clean." },
                { speaker: "Product Manager", text: "So we get better maintainability and team velocity now, plus a smooth evolution path later?" },
                { speaker: "Lead Dev", text: "Yes. This is the recommended starting point for most .NET API applications." },
            ],
        },
        {
            title: "Microservices",
            scenario: "Scenario: Large-scale app, high-intensity outlier modules, large teams, need for independent scaling and deployments.",
            conversation: [
                { speaker: "Product Manager", text: "The app now serves hundreds of clinics nationwide. We have over 50 developers across multiple teams." },
                { speaker: "Lead Dev", text: "Which parts are causing the most pain right now?" },
                { speaker: "Product Manager", text: "Appointments is extremely busy — huge traffic spikes. Notifications also scale differently. Billing has strict PCI compliance needs." },
                { speaker: "Junior Dev", text: "Teams are blocked waiting for the single deployment pipeline." },
                { speaker: "DevOps", text: "And when one module has an issue, it can affect the entire system. Scaling the whole monolith is getting expensive." },
                { speaker: "Architect", text: "Do we have the operational maturity — Kubernetes, observability, service mesh — to handle distributed systems?" },
                { speaker: "DevOps", text: "Yes, we’ve invested in a solid platform team." },
                { speaker: "Architect", text: "Then it’s time to move toward microservices for the outlier modules. We can keep the core as a modular monolith and extract Appointments, Notifications, and Payments as independent services with their own databases and deployments." },
                { speaker: "Lead Dev", text: "That way, we scale and deploy only what needs it, without over-engineering the rest." },
                { speaker: "DevOps", text: "Fault isolation improves too — a problem in Notifications won’t take down patient records." },
                { speaker: "Product Manager", text: "It sounds more complex and costly. Is it really necessary?" },
                { speaker: "Architect", text: "Only when you have proven differences in scaling, compliance, or team autonomy. Most apps never need full microservices, but in this large-scale scenario with clear outliers, a hybrid approach (modular monolith core + select microservices) gives the best trade-off." },
                { speaker: "Lead Dev", text: "And because we built clean module boundaries earlier, the extraction will be much less painful." },
            ],
        },
    ];

    return (
        <div className="min-h-screen p-6 text-white">

            {/* Grocery Store Architecture Guide */}
            <section className="max-w-5xl mx-auto mb-16">
                <h1 className="text-4xl font-bold text-center mb-4">
                    Stop Over-Engineering: The Grocery Store Guide to Architecture
                </h1>

                <p className="text-center text-blue-200 max-w-3xl mx-auto mb-10">
                    Choosing an architecture is a <span className="font-semibold">platform concern</span>, not a feature.
                    You can sell an apple using any of these — the real difference is the <em>cost of the building</em>.
                </p>

                <div className="space-y-10">
                    {/* Monolith */}
                    <div className="border border-white/20 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-2">1️⃣ The Monolith — The Solo Shop</h2>

                        <p className="mb-2">
                            <span className="font-semibold">The Scene:</span> You do it all. Cashier, cleaner, accountant.
                        </p>

                        <p className="mb-2">
                            <span className="font-semibold">The Technical Reality:</span> One project, one database. Simple.
                        </p>

                        <p className="mb-2">
                            <span className="font-semibold">The Catch:</span> If you get sick, the shop closes.
                            If 50 people walk in, you panic.
                        </p>

                        <p className="italic text-blue-200">
                            Verdict: Great for starting. Don’t build a stadium for a one-man show.
                        </p>
                    </div>

                    {/* Modular Monolith */}
                    <div className="border border-white/20 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-2">2️⃣ The Modular Monolith — The Department Store</h2>

                        <p className="mb-2">
                            <span className="font-semibold">The Scene:</span> One building, clear zones — Bakery, Meat,
                            Chocolates, Checkout.
                        </p>

                        <p className="mb-2">
                            <span className="font-semibold">The Technical Reality:</span> Multiple projects in one solution.
                            They talk easily because they live under one roof.
                        </p>

                        <p className="mb-2">
                            <span className="font-semibold">The Catch:</span> One power grid, one plumbing system —
                            shared database.
                        </p>

                        <p className="italic text-blue-200">
                            Verdict: The sweet spot. Clean structure without the “microservice tax.”
                        </p>
                    </div>

                    {/* Microservices */}
                    <div className="border border-white/20 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-2">3️⃣ Microservices — The Separate Factory</h2>

                        <p className="mb-2">
                            <span className="font-semibold">The Scene:</span> The Bakery is exploding.
                            It gets its own factory, power line, and staff.
                        </p>

                        <p className="mb-2">
                            <span className="font-semibold">The Technical Reality:</span> Independent app, independent database.
                            Bread is delivered by truck — the network.
                        </p>

                        <p className="mb-2">
                            <span className="font-semibold">The Catch:</span> If the truck is stuck in traffic (network issues),
                            the store has no bread.
                        </p>

                        <p className="italic text-blue-200">
                            Verdict: Use only for parts of the app that are truly “exploding.”
                        </p>
                    </div>
                </div>

                {/* Moral */}
                <div className="mt-12 text-center max-w-3xl mx-auto">
                    <p className="mb-3 font-semibold">
                        The Moral of the Story
                    </p>

                    <p className="mb-3">
                        You don’t need a Ferrari to go to the grocery store two blocks away.
                    </p>

                    <p className="mb-3">
                        Microservices are an optimization — not a starting point.
                    </p>

                    <p className="italic text-blue-200">
                        Rule of thumb: Start with a modular monolith.
                        If a department outgrows the building, move it to its own factory later.
                    </p>
                </div>
            </section>

            
            <h1 className="text-4xl font-bold text-center mb-10">
                🏥 Patient Management App Architecture
            </h1>

            {sections.map((section, idx) => (
                <div key={idx} className="mb-12">
                    <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
                    <p className="italic text-blue-200 mb-4">{section.scenario}</p>

                    <div className="space-y-4 max-w-3xl mx-auto">
                        {section.conversation.map((line, i) => {
                            const isLeft = i % 2 === 0;
                            return (
                                <div key={i} className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
                                    <div
                                        className={`p-3 rounded-lg max-w-[75%] ${
                                            isLeft ? "text-left bg-gray-700" : "text-right bg-gray-600"
                                        }`}
                                    >
                                        <span className="font-semibold">{line.speaker}:</span> {line.text}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}

            <div className="mt-10 max-w-3xl mx-auto text-center">
                <p className="mb-4">
                    Choose based on today’s reality, not tomorrow’s hype. You can always evolve later — a well-designed
                    modular monolith makes that evolution painless.
                </p>

                {/* Rule of Thumb Table */}
                <div className="overflow-x-auto mt-6">
                    <table className="table-auto border-collapse border border-white w-full text-left">
                        <thead>
                        <tr>
                            <th className="border border-white px-4 py-2">App Condition</th>
                            <th className="border border-white px-4 py-2">Recommended Architecture</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border border-white px-4 py-2">
                                Simple app, few modules, similar load for each module
                            </td>
                            <td className="border border-white px-4 py-2">Monolith</td>
                        </tr>
                        <tr>
                            <td className="border border-white px-4 py-2">
                                Many modules, multiple developers, modules interdependent but similar load
                            </td>
                            <td className="border border-white px-4 py-2">Modular Monolith</td>
                        </tr>
                        <tr>
                            <td className="border border-white px-4 py-2">
                                Modules have different loads, scaling needs, or security requirements.
                                <br />
                                Some modules may be shared across multiple services, like authentication or notifications.
                            </td>
                            <td className="border border-white px-4 py-2">Microservices</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Architecture3M;
