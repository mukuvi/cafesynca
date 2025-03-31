const CodingClub = () => {
  const projects = [
    { id: 1, name: "Coffee Shop Website", language: "HTML/CSS/JS" },
    { id: 2, name: "Brew Timer App", language: "React Native" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-dark mb-4">Coding Club</h2>
      <p className="text-gray-700 mb-6">
        Collaborate on coffee-related coding projects with other developers.
      </p>

      <h3 className="text-xl font-semibold mb-4">Current Projects</h3>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li
            key={project.id}
            className="flex justify-between items-center p-3 bg-gray-50 rounded"
          >
            <div>
              <h4 className="font-medium">{project.name}</h4>
              <p className="text-gray-600 text-sm">{project.language}</p>
            </div>
            <button className="px-3 py-1 bg-primary text-white text-sm rounded hover:bg-dark transition">
              Join Project
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodingClub;
