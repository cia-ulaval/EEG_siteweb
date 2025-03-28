import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InfiniteScrollBanner from "../components/Carousel";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  const projects = [
    {
      title: "Brain Controlled Video Game",
      image: "/project/FlappyBrain.png",
      description: "EEG controlled retro video game",
      link: "/flapeeg",
    },
    {
      title: "Muscle controlled race car",
      image: "/project/f1tenthcar.png",
      description: "EMG racing with 1/10th scale F1 cars",
      link: "/f1tenth",
    },
    {
      title: "Manga automatic translator",
      image: "/project/mangaai2.png",
      description: "AI tool that translates manga in real time",
      link: "/mangaai",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
            C.I.A
          </span>
        </motion.h1>
        <motion.p
          className="text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to the Club d'Intelligence Artificielle (CIA) of Laval
          University!
        </motion.p>
      </header>

      <div className="hero-card mb-16">
        <div className="video-container mb-4 relative">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-rose-500/70 hover:bg-rose-500/60 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-rose-500/70 hover:bg-rose-500/60 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16 pt-20">
        <motion.div
          className="p-6 rounded-xl bg-red-800/10 border custom-border-red custom-hover-border-red transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4 gradient-text pl-4">
            About Us
          </h2>
          <p className="text-gray-400 text-lg text-justify p-3">
            The CIA is the artificial intelligence club of Laval University. We
            are a group of students exploring AI and machine learning through
            various hands-on projects. Join us to learn and collaborate on
            exciting AI endeavors!
          </p>
        </motion.div>
      </div>

      <section className="mb-20 pt-20">
        <motion.h2
          className="text-4xl font-bold gradient-text text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Some of our work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 * index }}
            >
              <img
                src={project.image}
                alt={`Image of ${project.title}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Link
                  to={project.link}
                  className="inline-flex items-center text-red-400 hover:text-orange-800 transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="text-center mb-20 pt-20">
        <motion.h2
          className="text-4xl font-bold gradient-text mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Interested in collaborating?
        </motion.h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Sponsors help us achieve our goals and bring our projects to life.
          Interested in collaborating with us? Check out our plans.
        </p>
        <Link
          to="/collaboration"
          className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition-colors"
        >
          View our plans
        </Link>
      </section>
      <InfiniteScrollBanner />
    </div>
  );
}

export default Home;
