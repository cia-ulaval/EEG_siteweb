import React from "react";

function Lenia() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-5xl font-bold gradient-text mb-6">Lenia</h1>
      <h2 className="text-4xl mb-6">What is Lenia?</h2>
      <p className="w-full md:w-3/4 mx-auto text-lg mt-4 text-gray-400 text-justify">
        Artificial intelligence isn't just about neural networks or traditional
        algorithms. Some systems, based on simple rules, can generate
        astonishingly complex behaviors. This is the case with Lenia, an
        advanced cellular automaton inspired by the famous Game of Life by John
        Conway. Unlike the Game of Life, where cells are either alive or dead
        and evolve in discrete steps, Lenia operates with continuous values and
        fluid time. This allows for the emergence of dynamic, self-organizing
        structures that behave in ways reminiscent of living organisms. Each
        pixel (or "cell") in Lenia has a numerical value, which can be thought
        of as the concentration of a chemical species. These cells interact with
        their surroundings using convolution filters, which determine how a cell
        "perceives" its neighbors. A convolution filter is essentially a
        weighted sum of nearby cell values, meaning that instead of just
        checking immediate neighbors, Lenia applies a structured pattern—often
        in the shape of a ring—to determine how different distances contribute
        to a cell’s evolution. The result is then passed through a growth
        function, which decides whether a cell's value increases or decreases
        based on the surrounding environment. When applied across the entire
        grid, this process generates complex, lifelike behaviors from simple
        mathematical rules.
      </p>

      <img
        className="object-cover mt-6 mx-auto w-50"
        src="/media/lenia.png"
        alt="lenia"
      />

      <p className="w-full md:w-3/4 mx-auto text-lg mt-4 text-gray-400 text-justify">
        Our team successfully implemented a single-channel version of Lenia,
        where only one "chemical species" exists. However, we faced challenges
        in extending it to three channels, where multiple interacting species
        (represented as RGB values in visualization) would dramatically expand
        the possibilities for emergent behaviors. Unlike the Game of Life, which
        has a well-documented "bestiary" of interesting starting configurations,
        Lenia lacks a standardized library of known patterns, making it harder
        to find stable and fascinating structures.
      </p>
      <p className="w-full md:w-3/4 mx-auto text-lg mt-4 text-gray-400 text-justify">
        This project offers an exciting opportunity to explore emergence in
        artificial intelligence, where complex behaviors arise from simple
        interactions. We invite students, researchers, and AI enthusiasts to
        join us in pushing the boundaries of self-organizing systems and
        discovering the hidden potential of Lenia.
      </p>
    </div>
  );
}

export default Lenia;
