export const GetMyDomain = () => (
  <div className="w-full shrink-0">
    <div className="min-h-screen text-slate-100 font-sans">
      {/* Header Section */}
      <div className="py-5 px-6 text-center">
        <h1 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
          Get Your Own <span className="text-blue-400">Free</span> Website Name
        </h1>
      </div>

      <div className="max-w-4xl mx-auto pb-20 px-6">
        {/* Big "Free" Notice */}
        <div className="relative overflow-hidden rounded-3xl p-1 mb-12 bg-linear-to-r from-blue-500 to-cyan-400">
          <div className="bg-slate-900/90 backdrop-blur-xl rounded-[22px] p-8 text-center">
            <h2 className="text-3xl font-black text-white mb-2 underline decoration-blue-500 underline-offset-8">
              It Costs 0 Rupees
            </h2>
            <p className="text-slate-300 text-lg">
              This service is <strong>completely free</strong> for all Nepali
              citizens. You never have to pay to register or keep your{" "}
              <strong>.com.np</strong> name.
            </p>
          </div>
        </div>

        {/* Step-by-Step Points */}
        <div className="space-y-4 mb-12">
          {[
            {
              title: "Go to the website",
              detail: (
                <>
                  Open{" "}
                  <a
                    href="https://register.com.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-4 font-medium"
                  >
                    https://register.com.np
                  </a>{" "}
                  in your browser.
                </>
              ),
            },
            {
              title: "Check your name",
              detail: "Search for your name to see if it's available.",
            },
            {
              title: "Create an account",
              detail: "Sign up with your email address.",
            },
            {
              title: "Upload your ID",
              detail: "Submit a photo of your Nepali Citizenship.",
            },
            {
              title: "Wait for approval",
              detail: "Your domain will be ready in 1–2 days.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex-none w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 font-bold text-xl">
                {index + 1}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-slate-400">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Summary Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 border-t border-white/10 pt-12">
          <div className="p-4">
            <h4 className="text-blue-400 font-bold text-lg mb-3">
              Things You Need
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Your Citizenship photo</li>
              <li>• A personal email</li>
              <li>• A few minutes to fill the form</li>
            </ul>
          </div>

          <div className="p-4">
            <h4 className="text-blue-400 font-bold text-lg mb-3">
              Why Get One?
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Looks professional on your CV</li>
              <li>• It is yours forever for free</li>
              <li>• Great for your personal portfolio</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
