import { Braces, TextCursorInput, SwatchBook, Rss } from "lucide-react";

function DecisionTree() {
  return (
    <section className="mb-20 ">
      <div className="text-center max-w-3xl mx-auto">
        <h2 id="test" className="text-5xl font-bold gradient-text mb-6">
          Decision Tree
        </h2>
        <p className="text-xl text-gray-400 mb-16">
          Decision trees are inherently interpretable as they provide a simple
          explanation (based on decision rules) of their decision-making
          process, making them essential tools for data scientists. However,
          when dealing with massive datasets, training algorithms can generate
          unnecessarily complex trees where the decision-making process becomes
          obscured by an overabundance of rules. Is it possible to find a
          representative subset of the data that would produce simpler yet
          equally effective decision trees? This is the question we aim to
          answer in this research project.
        </p>
        <section className="mb-20">
          <h2 className="text-3xl font-bold gradient-text text-center mb-12">
            The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <TextCursorInput className="w-8 h-8" />,
                title: "Théophile Berteloot",
                description: "", // Add the description
              },
              {
                icon: <SwatchBook className="w-8 h-8" />,
                title: "Loïc Baret",
                description: "", // Add the description
              },
              {
                icon: <Rss className="w-8 h-8" />,
                title: "Xavier Legault",
                description: "", // Add the description
              },
              {
                icon: <Braces className="w-8 h-8" />,
                title: "And others",
                description: "",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-red-800/10 border border-red-950/90 hover:border-red-900/70 transition-colors text-center"
              >
                <div className="text-red-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default DecisionTree;
