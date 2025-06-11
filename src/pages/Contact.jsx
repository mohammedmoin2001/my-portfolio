export function Contact() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-600">Contact Me</h2>

      {/* Contact Info Only */}
      <div className="bg-white border-2 border-blue-500 rounded-xl p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Email:</h3>
          <p className="text-gray-600">moinmohammed830@gmail.com</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">Phone:</h3>
          <p className="text-gray-600">7204871617</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">LinkedIn:</h3>
          <a
            href="https://www.linkedin.com/in/mohammed-moin-920802204"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Profile
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">GitHub:</h3>
          <a
            href="https://github.com/mohammedmoin2001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

