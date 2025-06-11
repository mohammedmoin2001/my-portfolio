const projects = [
  {
    title: "Online DJ Booking Management System",
    description:
      "Built using SQL, PHP, and XAMPP to manage DJ bookings with features like user authentication, event scheduling, and admin control panel.",
    tech: ["PHP", "SQL", "XAMPP"],
  },
  {
    title: "Password Manager",
    description:
      "Browser-based tool using HTML, CSS, and JavaScript to store and retrieve passwords securely with basic encryption logic.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Blink Sync Wheelchair",
    description:
      "An IoT solution to help quadriplegic patients using eye-ball movement detection for wheelchair control.",
    tech: ["IoT", "Eye-Tracking", "Arduino"],
  },
];

export function Projects() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-600">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border-2 border-blue-500 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 space-y-4"
          >
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
