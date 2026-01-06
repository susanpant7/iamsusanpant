import diagram from "./ccaimage.webp";

function CleanCodeArch() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-900 dark:text-gray-100 space-y-8 leading-relaxed">
      {/* Title */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">
          Clean Architecture in .NET – A Practical Guide
        </h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-400">
          Understanding Layers, Responsibilities, and the Flow of Dependencies
        </h2>
      </header>

      {/* Introduction */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">What is Clean Architecture?</h3>
        <p>
          In simple terms,{" "}
          <strong>Clean Architecture is the separation of concerns</strong>. It
          organizes your code into layers so that each has a single
          responsibility, making your project maintainable, testable, and
          flexible.
        </p>
      </section>

      {/* Diagram Section */}
      <section className="text-center relative">
        <h3 className="text-2xl font-semibold mb-4">
          Architecture Layers Diagram
        </h3>
        <div className="relative inline-block">
          <img
            src={diagram}
            alt="Clean Architecture Diagram"
            className="mx-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 w-full max-w-md"
          />
        </div>

        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm italic">
          Dependencies flow inward:{" "}
          <strong>Presentation → Application → Domain</strong>.
        </p>
      </section>

      {/* Linking Application and Infrastructure */}
      <section className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold">
          How Layers Link Up (The Interface Pattern)
        </h3>
        <p>
          The <strong>Application</strong> layer defines the contracts
          (interfaces), and the <strong>Infrastructure</strong> layer provides
          the implementation.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase text-blue-500">
              Application Layer
            </span>
            <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded font-mono text-xs">
              // Defines WHAT needs to happen
              <br />
              public interface INotificationService {"{"}
              <br />
              &nbsp;&nbsp;void Send(string msg);
              <br />
              {"}"}
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase text-green-500">
              Infrastructure Layer
            </span>
            <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded font-mono text-xs">
              // Defines HOW it happens (e.g. Email)
              <br />
              public class EmailSender : INotificationService {"{"}
              <br />
              &nbsp;&nbsp;public void Send(string msg) {"{"} /* SMTP Logic */{" "}
              {"}"}
              <br />
              {"}"}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          In this way, the Application layer says a notification needs to be
          sent, but <strong>how</strong> it is sent belongs to Infrastructure.
        </p>
      </section>

      {/* Setup Guide */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">
          Creating a Simple Clean Architecture Project in .NET
        </h3>
        <p>
          You can quickly set up a basic Clean Architecture project in .NET by
          following these steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>
            <strong>Create a new solution:</strong>{" "}
            <code>CleanCodeProject.sln</code>
          </li>
          <li>
            <strong>Create the folders:</strong> <code>src</code> and{" "}
            <code>tests</code>
          </li>
          <li>
            <strong>
              Add an API project under the <code>src</code> folder:
            </strong>{" "}
            <code>CleanCodeProject.Api</code> (or{" "}
            <code>CleanCodeProject.Presentation</code>)
          </li>
          <li>
            <strong>Create class library projects:</strong>{" "}
            <code>CleanCodeProject.Application</code>,{" "}
            <code>CleanCodeProject.Domain</code>,{" "}
            <code>CleanCodeProject.Infrastructure</code>
          </li>
          <li>
            <strong>Add project references:</strong>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>
                <code>
                  CleanCodeProject.Application → CleanCodeProject.Domain
                </code>
              </li>
              <li>
                <code>
                  CleanCodeProject.Infrastructure →
                  CleanCodeProject.Application, CleanCodeProject.Domain
                </code>
              </li>
              <li>
                <code>
                  CleanCodeProject.Api → CleanCodeProject.Infrastructure,
                  CleanCodeProject.Application
                </code>
              </li>
            </ul>
          </li>
        </ol>
        <p>
          Now you have the basic structure of a Clean Architecture project in
          .NET. You can start organizing your entities, use cases, controllers,
          and infrastructure implementations according to the layer they belong
          to.
        </p>
      </section>

      {/* Why Use Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Why Use Clean Architecture?</h3>
        <ul className="list-disc list-inside space-y-4 ml-4">
          <li>
            <strong>Independent Layers:</strong> You can work on each layer
            independently without affecting the others. Changes in Presentation,
            Application, or Infrastructure do not break the core business rules
            in the Domain layer.
          </li>
          <li>
            <strong>Easier Testing:</strong> Each module or layer can be tested
            in isolation. Unit tests for Domain and Application layers do not
            require running APIs or databases, making testing faster and more
            reliable.
          </li>
          <li>
            <strong>Infrastructure Changes Are Safe:</strong> For example,
            switching from SQL Server to PostgreSQL only requires updates in the
            Infrastructure layer. Domain and Application layers remain
            completely untouched.
          </li>
          <li>
            <strong>Presentation Changes Are Safe:</strong> For example,
            switching from a REST API to gRPC affects only the Presentation
            layer. Application and Domain layers remain unchanged if the layers
            are properly separated.
          </li>
          <li>
            <strong>Application Layer Flexibility:</strong> Business workflows
            can be changed, combined, or reused without modifying Domain or
            Presentation layers. Multiple Presentation layers can call the same
            use case, ensuring consistent behavior.
          </li>
          <li>
            <strong>Domain Layer Protection:</strong> The Domain layer is
            framework-independent and technology-proof. Core business rules
            remain pure, consistent, testable, and independent of UI or
            technical implementation details.
          </li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-2 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
        <h3 className="text-2xl font-semibold">Summary</h3>
        <p>
          Clean Architecture organizes your project by layers. Dependencies
          always point inward, protecting the core. Each layer has a single
          responsibility, making the system modular, maintainable, and testable.
          Changes in Infrastructure or Presentation rarely affect Application or
          Domain.
        </p>
      </section>

      {/* Footer Links */}
      <footer className="pt-4 text-center">
        <p className="mb-4">
          For a full example and more details, check the GitHub repository:
        </p>
        <a
          href="https://github.com/susanpant7/clean-code-project"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline font-semibold"
        >
          CleanCodeProject GitHub Repo
        </a>
      </footer>
    </div>
  );
}

export default CleanCodeArch;
