import React from "react";

const About = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-purple-700 dark:text-purple-300">
        About Prompt Wallet
      </h1>

      <p className="bg-purple-700 dark:bg-purple-500 text-black dark:text-white border-4 border-black rounded-2xl p-6 shadow-lg max-w-3xl mx-auto">
        Prompt Wallet was born from EverydayLLM’s desire to simplify the daily workflow
        of developers working with artificial intelligences such as ChatGPT, Claude, or Mistral.
      </p>

      <div className="bg-purple-700 dark:bg-purple-500 text-black dark:text-white border-4 border-black rounded-2xl p-6 shadow-lg max-w-3xl mx-auto space-y-4">
        <h3 className="text-2xl font-semibold">Development Context</h3>
        <p>
          This project was developed as a team effort by Guinildo and Alicia,
          students at L’École Multimédia, in response to the growing need for
          managing personalized prompt libraries.
        </p>
      </div>
    </div>
  );
};

export default About;
