import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "../../components/UI/SectionHeader";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
          <p className="text-gray-500 mb-8 font-mono uppercase tracking-[0.08em]">
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
            className="clay-article sk-panel p-6 md:p-10"
          >
            <SpecificContent />
          </div>
        </div>

        <div className="mt-8 sk-panel flex flex-col items-center gap-4 py-8 px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-gray-400">
            End of module
          </p>
          <Link
            to="/blogs"
            className="sk-brass inline-flex items-center gap-3 px-8 py-4 text-base font-bold"
          >
            Return to overview
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </Section>
  );
}
