import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const projects = [
  {
    title: "FlapEEG",
    image: "/flappycard.jpg",
    description: "A mind controlled video game",
    link: "/flapeeg",
    github: "https://github.com/cia-ulaval/FlapEEG_interface_v1",
  },
  {
    title: "F1Tenth",
    image: "/f1cover.png",
    description: "EMG racing with 1/10th scale F1 cars",
    link: "/f1tenth",
  },
  {
    title: "MangaAI",
    image: "/mangaai2.png",
    description: "Automatic manga translation and analysis",
    link: "/mangaai",
    github: "https://github.com/cia-ulaval/MangaAutoTranslator",
  },
  {
    title: "Decision Tree",
    image: "/decisiontree.jpg",
    description: "Research and development of decision trees",
    link: "/decisiontree",
  },
  {
    title: "Lenia",
    image: "/lenia.png",
    description: "Autonomous cellular automata",
    link: "/lenia",
    github: "https://github.com/cia-ulaval/LENIA-frontend",
  },
];

function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white tracking-wide">
          Our <span className="text-red-500">Projects</span>
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Explore the innovative projects our team is working on.
        </p>
      </header>

      <Row xs={1} sm={2} md={3} className="g-3 justify-content-center">
        {projects.map((project, index) => (
          <Col key={index} className="d-flex justify-content-center">
            <Card
              className="bg-red-900/80 border custom-border-red custom-hover-border-red text-white mb-24"
              style={{ width: "18rem" }} // Increased width
            >
              <Card.Img
                variant="top"
                src={project.image}
                style={{ height: "250px", objectFit: "cover" }} // Increased height
              />
              <Card.Body>
                <Card.Title className="text-gray-200">
                  {project.title}
                </Card.Title>
                <Card.Text className="text-gray-400">
                  {project.description}
                </Card.Text>
                <div className="mt-4 flex space-x-3">
                  <Link
                    to={project.link}
                    className="px-4 py-1.5 text-sm text-white font-medium rounded-lg bg-red-600 transition-all duration-300 hover:bg-red-500 flex items-center"
                  >
                    Learn More →
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-sm text-white font-medium rounded-lg bg-gray-800 transition-all duration-300 hover:bg-gray-700 flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Projects;
