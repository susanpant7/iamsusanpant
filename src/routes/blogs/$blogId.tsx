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
          <h1 className="sk-emboss text-4xl font-serif font-bold mb-4">404</h1>
          <p className="text-gray-500 mb-8 font-mono uppercase tracking-widest">
            Module Not Found
          </p>
          <Link
            to="/courses"
            className="sk-brass px-8 py-3 font-bold"
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
          className="inline-flex items-center gap-2 sk-brass group font-mono text-sm font-bold tracking-wide uppercase px-4 py-2"
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
          <BeautifulTitle
            label={blog.label}
            title={blog.title}
            subtitle={blog.subtitle}
          />

          <div
            className="prose prose-invert max-w-none
                   prose-headings:text-[#fff8ee]
                   prose-headings:font-serif prose-headings:font-bold
                   prose-headings:tracking-tight
                   prose-p:text-gray-400
                   prose-p:leading-relaxed
                   prose-strong:text-blue-400"
          >
            <SpecificContent />
          </div>
        </div>

        <div className="mt-6 sk-panel flex justify-center py-5">
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
