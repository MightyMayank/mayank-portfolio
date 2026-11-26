import React from "react";
import cross from "../../assets/cross.svg";

const ExperienceModal = (props) => {
  const isDarkMode = props?.mode;

  return (
    <div className="fixed inset-0 z-[1000] w-[90%] md:w-[75%] lg:w-[50%] mx-auto my-auto h-full grid place-items-center overflow-auto">
      <div
        className={`relative backdrop-blur-lg py-8 px-6 md:px-10 ${
          isDarkMode
            ? "text-white border border-gray-500 bg-gradient-to-br from-gray-700 to-gray-900"
            : "text-black border border-gray-200 bg-gradient-to-br from-white to-blue-50"
        } shadow-lg rounded-lg w-full`}
      >
        <img
          src={cross}
          alt="Close"
          className="absolute top-5 right-5 w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
          onClick={() => props?.onClose()}
        />
        <div
          className={`text-3xl font-bold text-center border-b mx-6 pb-4 mb-6 ${
            isDarkMode
              ? "border-gray-400 text-teal-300"
              : "border-gray-300 text-blue-600"
          }`}
        >
          Experience
        </div>
        <div className="space-y-8">
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xl font-semibold">Cyber Infrastructure Services (CIS)</p>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Role: Junior Software Developer
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-gray-800 text-white"
                  : "bg-blue-100 text-blue-700"
              }`}
              >
                Full-time
              </span>
            </div>
            <ul className={`list-disc list-inside space-y-2 text-sm leading-6 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Developed and maintained full-stack web applications from scratch using Python, Django, Django REST Framework, React.js, and PostgreSQL.</li>
              <li>Designed relational database schemas and optimized SQL queries to improve backend performance and data integrity.</li>
              <li>Engineered secure RESTful APIs with authentication and authorization, integrating them with responsive React frontend components.</li>
              <li>Authored Functional Requirement Documents (FRDs), Non-Functional Requirement Documents (NFRDs), and technical planning specifications to align business requirements with development workflows.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xl font-semibold">Cyber Infrastructure Services (CIS)</p>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Role: Software Development Intern
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-gray-800 text-white"
                  : "bg-blue-100 text-blue-700"
              }`}
              >
                Internship · 6 Months
              </span>
            </div>
            <ul className={`list-disc list-inside space-y-2 text-sm leading-6 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
              <li>Built and tested RESTful APIs using Python, Django, and Django REST Framework while collaborating with senior developers on feature delivery.</li>
              <li>Assisted in database modeling, debugging backend logic, and validating API endpoints using Postman.</li>
              <li>Participated in code reviews, requirement analysis, and sprint planning to maintain clean, scalable codebases.</li>
            </ul>
          </section>
        </div>
        <div className="mx-auto flex justify-center mt-6">
          <button
            onClick={() => props?.onClose()}
            className={`px-6 py-2 font-semibold rounded-md shadow-md transition-all duration-200 ease-in-out ${
              isDarkMode
                ? "bg-teal-500 text-white hover:bg-teal-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
