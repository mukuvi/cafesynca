const CodingClub = ({ onJoinProject }) => {
  const projects = [
    {
      id: 1,
      name: "Coffee Shop Locator",
      description: "Interactive map of specialty coffee shops",
      tech: ["React", "Mapbox", "Firebase"],
      members: 12,
      image:
        "https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    },
    {
      id: 2,
      name: "Brew Timer App",
      description: "Perfect your pour-over technique with smart timers",
      tech: ["React Native", "Expo"],
      members: 8,
      image:
        "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#6f4e37] mb-2">
          Code & Coffee
        </h2>
        <p className="text-gray-600 mb-6">
          Collaborate on coffee-related tech projects with developers worldwide
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row gap-6 border rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="md:w-1/3 h-48 md:h-auto object-cover"
              />
              <div className="p-4 flex-1">
                <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#f5f5f5] text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    👥 {project.members} members
                  </span>
                  <button
                    onClick={() => onJoinProject(project.name)}
                    className="px-4 py-2 bg-[#6f4e37] text-white rounded-lg hover:bg-[#5a3d2a] transition"
                  >
                    Join Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingClub;
