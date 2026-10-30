import { BookOpen, ArrowRight } from "lucide-react";
import SectionHeader, { Section } from "../../../components/UI/SectionHeader";
import { BLOGS } from "../-types/blogs.type";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GlassCard } from "../../../components/UI/Common";


const BlogContainer = () => {
  return (
    <Section id="blogs">
      <SectionHeader
        icon={BookOpen}
        label="My Blogs"
        title="Lets"
        highlightedWord="Explore"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOGS.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to="/blogs/$blogId"
              params={{ blogId: blog.id }}
              className="group block h-full"
            >
              <GlassCard className="h-full flex flex-col items-start p-8">
                <div className="w-full flex justify-between items-start mb-8">
                  <div className="sk-key w-16 h-16 flex items-center justify-center">
                    <img
                      loading="lazy"
                      src={blog.logo}
                      alt={blog.title}
                      className="w-9 h-9 object-contain "
                    />
                  </div>

                  <span className="text-[10px] font-mono text-gray-500 font-bold tracking-[0.2em] uppercase mt-2">
                    M-{blog.id.padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold sk-emboss mb-3 tracking-tight">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {blog.subtitle}
                </p>

                <div className="mt-auto w-full flex items-center justify-between pt-4 border-t border-black/50 shadow-[0_-1px_0_rgba(255,232,190,0.07)]">
                  <div className="flex items-center gap-2 sk-brass-text font-bold text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                    Start Learning <ArrowRight size={14} />
                  </div>
                </div>
              </GlassCard>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default BlogContainer;
