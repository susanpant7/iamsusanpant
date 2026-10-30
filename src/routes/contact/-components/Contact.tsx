import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Globe,
  Facebook,
  Instagram,
  Download,
} from "lucide-react";
import { Section } from "../../../components/UI/SectionHeader";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "iamsusanpant@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact-page">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 sk-inset !rounded-full sk-brass-text font-mono text-xs uppercase tracking-[0.1em] mb-6"
          >
            <span className="relative flex h-2 w-2">
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif font-bold sk-emboss tracking-tight mb-6"
          >
            Get in touch.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
          >
            Whether you have a project in mind or just want to chat about tech,
            feel free to reach out through any of these platforms.
          </motion.p>

          {/* CV DOWNLOAD BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <a
              href="/susan_cv.pdf"
              download="Susan_Pant_cv.pdf"
              className="sk-brass group relative inline-flex items-center gap-3 px-8 py-4 font-black uppercase text-xs tracking-[0.1em]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Download Curriculum Vitae
                <Download
                  size={18}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card (Large) */}
          <button
            onClick={copyEmail}
            className="md:col-span-2 sk-panel group p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-6">
              <div className="sk-brass p-5">
                <Mail size={32} />
              </div>
              <div className="text-left">
                <h3 className="text-gray-500 text-xs font-black uppercase tracking-[0.1em] mb-1">
                  Direct Email
                </h3>
                <p className="text-2xl md:text-3xl font-bold text-white font-mono break-all">
                  {email}
                </p>
              </div>
            </div>
            <div className="sk-brass flex items-center gap-2 px-6 py-3">
              {copied ? (
                <Check size={20} />
              ) : (
                <Copy size={20} />
              )}
              <span className="text-sm font-bold uppercase tracking-[0.08em]">
                {copied ? "Copied" : "Copy"}
              </span>
            </div>
          </button>

          {/* Social Links Row 1 */}
          <a
            href="https://www.linkedin.com/in/susan-pant-518293170/"
            target="_blank"
            rel="noreferrer"
            className="sk-panel group p-8 flex items-start justify-between"
          >
            <div>
              <div className="p-4 sk-key text-black mb-6 inline-block">
                <Linkedin size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold sk-emboss mb-2">LinkedIn</h3>
              <p className="text-gray-500 text-sm">Professional networking</p>
            </div>
            <span className="sk-brass !rounded-xl p-2.5 shrink-0"><ExternalLink size={18} /></span>
          </a>

          <a
            href="https://github.com/susanpant7"
            target="_blank"
            rel="noreferrer"
            className="sk-panel group p-8 flex items-start justify-between"
          >
            <div>
              <div className="p-4 sk-key text-black mb-6 inline-block">
                <Github size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold sk-emboss mb-2">GitHub</h3>
              <p className="text-gray-500 text-sm">Code contributions</p>
            </div>
            <span className="sk-brass !rounded-xl p-2.5 shrink-0"><ExternalLink size={18} /></span>
          </a>

          {/* Social Links Row 2 */}
          <a
            href="https://www.facebook.com/susan.pant.58/"
            target="_blank"
            rel="noreferrer"
            className="sk-panel group p-8 flex items-start justify-between"
          >
            <div>
              <div className="p-4 sk-key text-black mb-6 inline-block">
                <Facebook size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold sk-emboss mb-2">Facebook</h3>
              <p className="text-gray-500 text-sm">Personal updates</p>
            </div>
            <span className="sk-brass !rounded-xl p-2.5 shrink-0"><ExternalLink size={18} /></span>
          </a>

          <a
            href="https://www.instagram.com/susan.pant7/"
            target="_blank"
            rel="noreferrer"
            className="sk-panel group p-8 flex items-start justify-between"
          >
            <div>
              <div className="p-4 sk-key text-black mb-6 inline-block">
                <Instagram size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold sk-emboss mb-2">Instagram</h3>
              <p className="text-gray-500 text-sm">Photography & stories</p>
            </div>
            <span className="sk-brass !rounded-xl p-2.5 shrink-0"><ExternalLink size={18} /></span>
          </a>

          {/* Location & Timezone Card */}
          <div className="md:col-span-2 p-8 sk-inset !rounded-3xl flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="flex items-center gap-4">
              <MapPin className="text-black" size={24} />
              <div className="text-center md:text-left">
                <p className="text-xs text-gray-600 font-black uppercase tracking-[0.1em]">
                  Based In
                </p>
                <p className="text-white font-bold text-lg leading-tight">
                  Kathmandu, Nepal <br />
                  <span className="text-gray-400 text-sm">& Toledo, Ohio</span>
                </p>
              </div>
            </div>
            <div className="h-px w-full md:h-12 md:w-px bg-black/50" />
            <div className="flex items-center gap-4">
              <Globe className="text-black" size={24} />
              <div className="text-center md:text-left">
                <p className="text-xs text-gray-600 font-black uppercase tracking-[0.1em]">
                  Working Hours
                </p>
                <p className="text-white font-bold text-lg">Remote Friendly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
