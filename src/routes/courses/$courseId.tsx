import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "../../components/UI/SectionHeader";
import { ArrowLeft } from "lucide-react";
import { COURSES } from "./-types/courses.type";

export const Route = createFileRoute("/courses/$courseId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { courseId } = Route.useParams();

  // Lookup the course in the data array
  const course = COURSES.find((c) => c.id === courseId);

  if (!course) {
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

  const SpecificContent = course.component;
  return (
    <Section id="course-viewer">
      {/* 1. Navigation Header */}
      <div className="max-w-4xl mx-auto w-full mb-12">
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-blue-500/60 hover:text-blue-400 transition-all group font-mono text-xs tracking-widest uppercase"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Curriculum
        </Link>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        {/* 3. Body Content Section */}
        <div className="relative mt-4">
          {/* Minimalist Side Accent - subtle and static */}
          <div className="absolute -left-6 top-0 bottom-0 w-px bg-linear-to-b from-blue-500/30 to-transparent hidden md:block" />

          {/* The 'prose' class handles all the spacing for your 
      course content automatically without any card styles.
  */}
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

        {/* 4. Simple Footer */}
        <div className="mt-24 pt-12 border-t border-white/5 flex justify-center">
          <Link
            to="/courses"
            className="text-gray-500 hover:text-white transition-colors font-mono text-[10px] uppercase tracking-[0.3em]"
          >
            End of Module — Return to Overview
          </Link>
        </div>
      </div>
    </Section>
  );
}
