const CodingClub = ({ onJoinProject }) => {
  const projects = [
    {
      id: 1,
      name: "PhishShield",
      description:
        "Browser extension that detects phishing attempts in real-time using ML",
      tech: ["JavaScript", "TensorFlow.js", "Chrome API"],
      members: 4,
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      domain: "Cybersecurity",
      repo: "github.com/team-phish/shield",
    },
    {
      id: 2,
      name: "DataViz Dashboard",
      description:
        "Interactive visualization tool for exploring COVID-19 datasets",
      tech: ["Python", "Dash", "Pandas"],
      members: 3,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      domain: "Data Science",
      repo: "github.com/covid-viz/dashboard",
    },
    {
      id: 3,
      name: "EduChain",
      description: "Blockchain platform for verifiable academic credentials",
      tech: ["Solidity", "IPFS", "React"],
      members: 5,
      image:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      domain: "Blockchain",
      repo: "github.com/edu-chain/core",
    },
    {
      id: 4,
      name: "CodeGuard",
      description:
        "GitHub bot that scans pull requests for security vulnerabilities",
      tech: ["Node.js", "OWASP ZAP", "GitHub API"],
      members: 3,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      domain: "Cybersecurity",
      repo: "github.com/codeguard/bot",
    },
    {
      id: 5,
      name: "PredictHQ",
      description: "Flight delay prediction using weather and historical data",
      tech: ["Python", "Scikit-learn", "Flask"],
      members: 4,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      domain: "Data Science",
      repo: "github.com/predict-hq/flights",
    },
    {
      id: 6,
      name: "Email Validator",
      description: "Check if email addresses are properly formatted",
      tech: ["JavaScript", "Regex"],
      members: 1,
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
      domain: "Cybersecurity",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#6f4e37] mb-2">
          Code & Collaborate
        </h2>
        <p className="text-gray-600 mb-6">
          Join open-source projects and collaborate with developers worldwide
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row gap-6 border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="md:w-1/3 h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
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
                    className="px-4 py-2 bg-[#6f4e37] text-white rounded-lg hover:bg-[#5a3d2a] transition-colors"
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
