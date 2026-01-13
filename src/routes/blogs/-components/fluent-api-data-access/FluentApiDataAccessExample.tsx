export default function FluentApiDataAccessExample() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-zinc-100">
          Data Access Layer — What I Learned Using Code‑First
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          This example reflects how my approach to the data access layer evolved
          over time while using Entity Framework Core with a code‑first setup.
          Instead of treating this as a strict rulebook, it’s more about the
          lessons learned from maintaining and scaling real applications.
        </p>
      </div>

      {/* Approach Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium text-zinc-100">Why Code‑First</h2>
        <p className="text-zinc-400 leading-relaxed">
          I use the code‑first approach where the database schema is derived
          directly from the code. Entities are written first, configurations are
          applied, migrations are generated, and the database is updated based
          on those changes. Over time, this keeps the database aligned with how
          the domain actually evolves.
        </p>
      </div>

      {/* Entities Section */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60">
        <div className="p-6 space-y-4">
          <h2 className="text-lg font-medium text-zinc-100">Entity Classes</h2>
          <p className="text-zinc-400 leading-relaxed">
            The entity classes are intentionally kept simple. They describe the
            domain and relationships, but avoid database‑specific concerns like
            column lengths, delete behaviors, or join table details.
          </p>
          <pre className="rounded-xl bg-zinc-950 p-5 text-sm text-zinc-200 overflow-x-auto leading-relaxed">
            {`public class User : BaseAuditableEntity
{
    public int UserId { get; set; }

    public string FirstName { get; set; }

    public string MiddleName { get; set; }

    public string LastName { get; set; }

    public string MobileNumber { get; set; }

    public ICollection<Role> Roles { get; set; }
}

public class Role
{
    public int RoleId { get; set; }

    public string RoleName { get; set; } = string.Empty;

    public ICollection<User> Users { get; set; } = new List<User>();
}`}
          </pre>
        </div>
      </div>

      {/* Fluent API Explanation */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium text-zinc-100">
          Moving Everything to Fluent API
        </h2>
        <p className="text-zinc-400 leading-relaxed">
          Initially, I used a mix of data annotations and Fluent API. That
          worked for basic constraints, but as soon as relationships and
          behaviors became more complex, configuration logic started spreading
          across multiple places. Moving everything to Fluent API made the
          schema definition easier to read and reason about.
        </p>
      </div>

      {/* Configuration Section */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60">
        <div className="p-6 space-y-6">
          <h2 className="text-lg font-medium text-zinc-100">
            Fluent API Configuration Classes
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Each entity has its own configuration class. All table‑level rules
            live here—length constraints, required fields, and relationships.
            This keeps the `DbContext` clean and makes changes localized.
          </p>

          <pre className="rounded-xl bg-zinc-950 p-5 text-sm text-zinc-200 overflow-x-auto leading-relaxed">
            {`public class RoleConfiguration : IEntityTypeConfiguration<Role>
{
    public void Configure(EntityTypeBuilder<Role> builder)
    {
        builder.Property(r => r.RoleName)
               .HasMaxLength(20)
               .IsRequired();
    }
}`}
          </pre>

          <pre className="rounded-xl bg-zinc-950 p-5 text-sm text-zinc-200 overflow-x-auto leading-relaxed">
            {`public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.Property(u => u.FirstName)
               .HasMaxLength(100)
               .IsRequired();

        builder.Property(u => u.MiddleName)
               .HasMaxLength(100)
               .IsRequired(false);

        builder.Property(u => u.LastName)
               .HasMaxLength(100)
               .IsRequired();

        builder.Property(u => u.MobileNumber)
               .HasMaxLength(20)
               .IsRequired();

        builder.HasMany(u => u.Roles)
               .WithMany(r => r.Users)
               .UsingEntity(j => j.ToTable("UserRoles"));
    }
}`}
          </pre>
        </div>
      </div>

      {/* DbContext Section */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60">
        <div className="p-6 space-y-6">
          <h2 className="text-lg font-medium text-zinc-100">
            The "Magic" Link: Clean DbContext
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            By using <code>ApplyConfigurationsFromAssembly</code>, I no longer
            have to manually add every configuration class to the{" "}
            <code>OnModelCreating</code> method. EF Core automatically scans the
            project for any class implementing
            <code>IEntityTypeConfiguration</code> and applies the rules.
          </p>

          <pre className="rounded-xl bg-zinc-950 p-5 text-sm text-zinc-200 overflow-x-auto leading-relaxed">
            {`
public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options,
        AuditInterceptor auditInterceptor) : DbContext(options)
{

    public DbSet<User> Users => Set<User>();
    public DbSet<Role> Roles => Set<Role>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // This single line replaces dozens of manual configurations
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
    }
}`}
          </pre>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
          <h3 className="text-zinc-100 font-medium mb-2">Scalability</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            When the team adds 50 more entities, the DbContext file size stays
            exactly the same. No more merge conflicts in one massive file.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800">
          <h3 className="text-zinc-100 font-medium mb-2">
            Separation of Concerns
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Domain logic stays in the Entities, Database logic stays in the
            Configurations, and the Context acts only as the coordinator.
          </p>
        </div>
      </div>
      {/* Comparison Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium text-zinc-100">
          The Shift in Strategy
        </h2>
        <div className="overflow-hidden rounded-xl border border-zinc-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-900/80 text-zinc-200">
              <tr>
                <th className="px-4 py-3 font-medium">Feature</th>
                <th className="px-4 py-3 font-medium">Data Annotations</th>
                <th className="px-4 py-3 font-medium">Fluent API (Current)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 text-zinc-400">
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-300">
                  Location
                </td>
                <td className="px-4 py-3">Spread across Entity classes</td>
                <td className="px-4 py-3 text-emerald-400">
                  Centralized in Config classes
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-300">
                  Complexity
                </td>
                <td className="px-4 py-3">Limited to basic constraints</td>
                <td className="px-4 py-3 text-emerald-400">
                  Handles any complex relationship
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-300">
                  Entity Purity
                </td>
                <td className="px-4 py-3">Polluted with DB concerns</td>
                <td className="px-4 py-3 text-emerald-400">
                  Clean Domain Models
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Outcome */}
      <div className="space-y-3">
        <h2 className="text-xl font-medium text-zinc-100">Result</h2>
        <p className="text-zinc-400 leading-relaxed">
          With this structure, entity classes stay focused on the domain, schema
          rules are explicit, and the data access layer scales without becoming
          harder to understand. It’s a small structural decision, but it has
          paid off in long‑term maintainability.
        </p>
      </div>
    </div>
  );
}
