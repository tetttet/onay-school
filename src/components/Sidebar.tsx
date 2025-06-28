import React, { useState } from "react";

interface Course {
  title: string;
  description: string;
  category: { name: string };
  price: number;
  instructor: { name: string; photo: string };
  image: { url: string };
  topics: {
    title: string;
    description: string;
    subtopics?: { title: string; description: string }[];
  }[];
  documentation: {
    title: string;
    description: string;
    link: string;
  };
}

interface SidebarProps {
  course: Course;
}

const Sidebar: React.FC<SidebarProps> = ({ course }) => {
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  const handleTopicClick = (index: number) => {
    setActiveTopic(activeTopic === index ? null : index);
  };

  return (
    <div className="flex flex-col bg-linear-to-b from-black/10 to-black/55 dark:from-white/15 dark:to-black/40 text-white rounded-lg shadow-lg">
      <div className="bg-linear-to-t from-background via-background/80 to-background/20 p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Courses</h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">{course.title}</h3>
          <p className="text-sm mb-4">{course.description}</p>
          <ul className="space-y-3">
            {course.topics.map((topic, topicIdx) => (
              <li key={topicIdx} className="border-b border-gray-700 pb-3">
                <div
                  className="text-lg font-medium cursor-pointer hover:text-blue-400"
                  onClick={() => handleTopicClick(topicIdx)}
                >
                  {topic.title}
                </div>
                {activeTopic === topicIdx && (
                  <p className="text-sm mt-2">{topic.description}</p>
                )}
                {activeTopic === topicIdx && topic.subtopics && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {topic.subtopics.map((subtopic, subIdx) => (
                      <li key={subIdx} className="text-xs">
                        <div className="font-medium">{subtopic.title}</div>
                        <p className="text-xs">{subtopic.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
