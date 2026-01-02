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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6"
          >
            GET IN <span className="text-blue-500">TOUCH.</span>
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
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:text-white transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 w-0 bg-blue-600 group-hover:w-full transition-all duration-500 ease-out z-0" />
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
          <motion.button
            whileHover={{ y: -5 }}
            onClick={copyEmail}
            className="md:col-span-2 group relative overflow-hidden p-8 bg-white/3 border border-white/10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:bg-white/6"
          >
            <div className="flex items-center gap-6">
              <div className="p-5 bg-blue-600 rounded-3xl text-white shadow-lg shadow-blue-600/20 group-hover:rotate-6 transition-transform">
                <Mail size={32} />
              </div>
              <div className="text-left">
                <h3 className="text-gray-500 text-xs font-black uppercase tracking-[0.2em] mb-1">
                  Direct Email
                </h3>
                <p className="text-2xl md:text-3xl font-bold text-white font-mono break-all">
                  {email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-2xl text-gray-400 group-hover:text-white transition-colors">
              {copied ? (
                <Check className="text-green-500" />
              ) : (
                <Copy size={20} />
              )}
              <span className="text-sm font-bold uppercase tracking-widest">
                {copied ? "Copied" : "Copy"}
              </span>
            </div>
          </motion.button>

          {/* Social Links Row 1 */}
          <motion.a
            href="https://www.linkedin.com/in/susan-pant-518293170/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5 }}
            className="group p-8 bg-white/3 border border-white/10 rounded-[2.5rem] flex items-start justify-between transition-all hover:border-blue-500/50 hover:bg-blue-500/2"
          >
            <div>
              <div className="p-4 bg-blue-600/10 text-blue-500 rounded-2xl mb-6 inline-block">
                <Linkedin size={28} />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-500 text-sm">Professional networking</p>
            </div>
            <ExternalLink
              size={20}
              className="text-gray-700 group-hover:text-blue-500 transition-colors"
            />
          </motion.a>

          <motion.a
            href="https://github.com/susanpant7"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5 }}
            className="group p-8 bg-white/3 border border-white/10 rounded-[2.5rem] flex items-start justify-between transition-all hover:border-white/30 hover:bg-white/5"
          >
            <div>
              <div className="p-4 bg-white/10 text-white rounded-2xl mb-6 inline-block">
                <Github size={28} />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-500 text-sm">Code contributions</p>
            </div>
            <ExternalLink
              size={20}
              className="text-gray-700 group-hover:text-white transition-colors"
            />
          </motion.a>

          {/* Social Links Row 2 */}
          <motion.a
            href="https://www.facebook.com/susan.pant.58/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5 }}
            className="group p-8 bg-white/3 border border-white/10 rounded-[2.5rem] flex items-start justify-between transition-all hover:border-blue-600/50 hover:bg-blue-600/5"
          >
            <div>
              <div className="p-4 bg-blue-600/10 text-blue-600 rounded-2xl mb-6 inline-block">
                <Facebook size={28} />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Facebook</h3>
              <p className="text-gray-500 text-sm">Personal updates</p>
            </div>
            <ExternalLink
              size={20}
              className="text-gray-700 group-hover:text-blue-600 transition-colors"
            />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/susan.pant7/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5 }}
            className="group p-8 bg-white/3 border border-white/10 rounded-[2.5rem] flex items-start justify-between transition-all hover:border-pink-500/50 hover:bg-pink-500/5"
          >
            <div>
              <div className="p-4 bg-pink-500/10 text-pink-500 rounded-2xl mb-6 inline-block">
                <Instagram size={28} />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Instagram</h3>
              <p className="text-gray-500 text-sm">Photography & stories</p>
            </div>
            <ExternalLink
              size={20}
              className="text-gray-700 group-hover:text-pink-500 transition-colors"
            />
          </motion.a>

          {/* Location & Timezone Card */}
          <div className="md:col-span-2 p-8 bg-white/2 border border-white/5 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="flex items-center gap-4">
              <MapPin className="text-red-500/50" size={24} />
              <div className="text-center md:text-left">
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.2em]">
                  Based In
                </p>
                <p className="text-white font-bold text-lg leading-tight">
                  Kathmandu, Nepal <br />
                  <span className="text-gray-400 text-sm">& Toledo, Ohio</span>
                </p>
              </div>
            </div>
            <div className="h-px w-full md:h-12 md:w-px bg-white/10" />
            <div className="flex items-center gap-4">
              <Globe className="text-blue-500/50" size={24} />
              <div className="text-center md:text-left">
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.2em]">
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
