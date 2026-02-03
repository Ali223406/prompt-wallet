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
        <h3 className="text-2xl font-semibold">Development Team</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold">Guinildo</h4>
            <p className="text-sm">Full-Stack Developer - Lead Developer</p>
            <p className="text-sm">Specialized in React and Electron applications</p>
          </div>
          <div>
            <h4 className="font-semibold">Alicia</h4>
            <p className="text-sm">Full-Stack Developer - UI/UX Focus</p>
            <p className="text-sm">Specialized in user interface design and experience</p>
          </div>
        </div>
      </div>

      <div className="bg-purple-700 dark:bg-purple-500 text-black dark:text-white border-4 border-black rounded-2xl p-6 shadow-lg max-w-3xl mx-auto space-y-4">
        <h3 className="text-2xl font-semibold">Development Context</h3>
        <p>
          This project was developed as a team effort by Guinildo and Alicia,
          students at <strong>L'École Multimédia</strong>, in response to the growing need for
          managing personalized prompt libraries.
        </p>
        <p>
          Created in 2026, Prompt Wallet is part of EverydayLLM's initiative to 
          provide innovative tools for developers working with Large Language Models.
        </p>
      </div>
    </div>
  );
};

export default About;
