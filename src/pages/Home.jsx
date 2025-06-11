import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="flex flex-col md:flex-row items-center justify-between
                      max-w-6xl mx-auto px-8 py-20">
        
        <div className="text-center md:text-left mb-10 md:mb-0 bg-white border-2 border-blue-500 rounded-xl p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600">
            Mohamad Moin Chisti
          </h1>
          <p className="mt-2 text-xl font-medium text-gray-700">
            Full Stack and Web Developer&nbsp;|&nbsp;Software Engineer
          </p>

          
          <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          I’m a Full Stack and Web Developer with a passion for creating seamless digital experiences. I focus on building responsive, user-centered applications that solve real-world problems and deliver value through thoughtful design and functionality.

          </p>

          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium
                         hover:bg-blue-700 shadow-md transition"
            >
              Download Resume
            </a>
            <button
              onClick={() => navigate('/projects')}
              className="px-6 py-3 rounded-md bg-white text-gray-800 font-medium border border-blue-500 hover:bg-gray-100 shadow-md transition"
            >
              View Projects
            </button>
          </div>
        </div>

        
        <div className="shrink-0">
          <img
            src="/moin.jpg"
            alt="Mohamad Moin Chisti"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover
                       border-4 border-blue-600 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}