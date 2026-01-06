import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "../../components/UI/SectionHeader";
import { ArrowLeft } from "lucide-react";
import { BLOGS } from "./-types/blogs.type";
import BeautifulTitle from "../../components/UI/Title";

export const Route = createFileRoute("/blogs/$blogId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { blogId } = Route.useParams();

  // Lookup the course in the data array
  const blog = BLOGS.find((c) => c.id.toString() === blogId.toString());

  if (!blog) {
    return (
      <Section className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-white text-4xl font-black mb-4">404</h1>
          <p className="text-gray-500 mb-8 font-mono uppercase tracking-widest">
            Module Not Found
          </p>
          <Link
            to="/courses"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all"
          >
            Return to Curriculum
          </Link>
        </div>
      </Section>
    );
  }

  const SpecificContent = blog.component;
  return (
    <Section id="course-viewer">
      {/* Back link */}
      <div className="w-full mb-10">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-white transition-all group font-mono text-sm tracking-wide uppercase px-3 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Curriculum
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-full">
        <div className="relative">
          {/* Side Accent */}
          <div className="absolute -left-6 top-0 bottom-0 w-px bg-linear-to-b from-blue-500/30 to-transparent hidden md:block" />

          <BeautifulTitle
            label={blog.label}
            title={blog.title}
            subtitle={blog.subtitle}
          />

          <div
            className="prose prose-invert max-w-none
                   prose-headings:text-white
                   prose-headings:font-black
                   prose-headings:tracking-tighter
                   prose-headings:uppercase
                   prose-p:text-gray-400
                   prose-p:leading-relaxed
                   prose-strong:text-blue-400"
          >
            <SpecificContent />
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 flex justify-center bg-slate-900/40 backdrop-blur-sm py-5">
          <Link
            to="/blogs"
            className="group inline-flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-300 font-mono text-sm uppercase tracking-[0.35em]"
          >
            <span className="relative">
              End of Module
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </span>

            <span className="text-blue-400 opacity-70 group-hover:opacity-100 transition-opacity">
              — Return to Overview
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
