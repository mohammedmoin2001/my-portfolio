const skills = [
  { name: 'C/C++', icon: '/skill_icons/C.png' },
  { name: 'Java', icon: '/skill_icons/java.png' },
  { name: 'Python Basics', icon: '/skill_icons/python.png' },
  { name: 'Data Structures and Algorithms', icon: '/skill_icons/dsa.png' },
  { name: 'DBMS, SQL', icon: '/skill_icons/sql.png' },
  { name: 'HTML, CSS, JavaScript', icon: '/skill_icons/html.png' },
  { name: 'React JS', icon: '/skill_icons/react.png' },
];

export function Skills() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-600">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white border-2 border-blue-500 rounded-xl p-6 shadow-md hover:shadow-xl
             transition-all duration-300 flex items-center space-x-4 hover:scale-105"
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
            <span className="text-lg font-medium text-gray-800">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}