export const courses = [
  {
    title: "React Basics",
    description: "Learn the fundamentals of React",
    rate: 4.5,
    ratings: 45782,
    students: 260192,
    lastUpdated: "03/2025",
    language: "English",
    subtitles: ["Arabic", "Spanish", "French"],
    category: { name: "Development" },
    price: 49.99,
    instructor: { name: "Sara Doe", photo: "/image/user/Sara.jpg" },
    image: { url: "/image/course/react-course-image.jpg" },
    topics: [
      {
        title: "Introduction to React",
        description:
          "This lesson will introduce you to the basics of React, including its core concepts like components and JSX.",
      },
      {
        title: "State and Props",
        description:
          "This lesson covers the concept of state and props, the two key aspects of React component functionality.",
      },
      {
        title: "Event Handling",
        description:
          "This lesson explains how to handle user interactions in React using events.",
        subtopics: [
          {
            title: "Handling Events in React",
            description:
              "Learn how to handle mouse clicks, keyboard input, and other events in React.",
          },
          {
            title: "Event Binding",
            description:
              "Understand how to bind event handlers to components in React.",
          },
        ],
      },
      {
        title: "React Router Basics",
        description:
          "Learn how to implement client-side routing in React applications using React Router.",
        subtopics: [
          {
            title: "Setting Up React Router",
            description:
              "Learn how to install and configure React Router in your React project.",
          },
          {
            title: "Using Router Components",
            description:
              "Understand how to use Route, Switch, and Link components to navigate through your application.",
          },
        ],
      },
    ],
    documentation: {
      title: "React Documentation",
      description:
        "Comprehensive guide to React, including API references and tutorials.",
      content: `
# **React Documentation**
## Introduction
React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data, without reloading the page.
## Getting Started
To get started with React, you need to have Node.js and npm installed on your machine. You can create a new React application using the following command:
\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`
## Core Concepts
- **Components**: React is all about components. A component is a JavaScript function or class that optionally accepts inputs (props) and returns a React element that describes how a section of the UI should appear.
- **JSX**: JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements in your JavaScript code.
- **State**: State is a built-in object that stores property values that belong to a component. When the state object changes, the component re-renders.
- **Props**: Props (short for properties) are read-only attributes used to pass data from one component to another.
- **Lifecycle Methods**: Lifecycle methods are hooks that allow you to run code at specific points in a component's life cycle, such as when it mounts or unmounts.
## Conclusion
React is a powerful library for building user interfaces. With its component-based architecture and virtual DOM, it allows for efficient updates and rendering of UI components. For more information, visit the [official React documentation](https://reactjs.org/docs/getting-started.html).
## Additional Resources
- [React Official Website](https://reactjs.org/)
      `,
    },
  },
  {
    title: "JavaScript Basics",
    description: "Learn the fundamentals of JavaScript",
    category: { name: "Development" },
    price: 59.99,
    rate: 3.5,
    ratings: 45782,
    students: 20192,
    lastUpdated: "03/2015",
    language: "English",
    subtitles: ["Arabic", "Spanish", "French"],
    instructor: { name: "John Smith", photo: "/image/user/John.jpg" },
    image: { url: "/image/course/javascript-course-image.jpg" },
    topics: [
      {
        title: "Introduction to JavaScript",
        description:
          "This lesson will introduce you to the basics of JavaScript, including variables, data types, and syntax.",
      },
      {
        title: "Control Structures",
        description:
          "Learn about conditional statements, loops, and how they control the flow of execution in JavaScript.",
      },
      {
        title: "Functions",
        description:
          "This lesson covers how to define and use functions in JavaScript, including parameters and return values.",
      },
      {
        title: "Objects and Arrays",
        description:
          "Learn how to work with objects and arrays, which are fundamental data structures in JavaScript.",
      },
    ],
    documentation: {
      title: "JavaScript Documentation",
      description:
        "Comprehensive guide to JavaScript, including syntax, API references, and tutorials.",
      content: `
  # **JavaScript Documentation**
  ## Introduction
  JavaScript is a programming language that allows you to create interactive effects within web browsers. It is an essential part of the modern web development stack.
  ## Getting Started
  To start using JavaScript, simply include it in your HTML file:
  \`\`\`html
  <script>
    console.log('Hello, World!');
  </script>
  \`\`\`
  ## Core Concepts
  - **Variables**: Variables store data that can be accessed and manipulated.
  - **Functions**: Functions are reusable blocks of code that can take input and return output.
  - **Objects**: Objects are collections of key-value pairs.
  - **Arrays**: Arrays are ordered lists of values.
  ## Conclusion
  JavaScript is an essential language for web development. Mastering its core concepts will open the door to building interactive and dynamic web applications.
  ## Additional Resources
  - [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
        `,
    },
  },
  {
    title: "Python Basics",
    description: "Learn the fundamentals of Python",
    category: { name: "Development" },
    price: 49.99,
    rate: 5.0,
    ratings: 45782,
    students: 260392,
    lastUpdated: "01/2022",
    language: "English",
    subtitles: ["Arabic", "Spanish", "French"],
    instructor: { name: "Alice Johnson", photo: "/image/user/Alice.jpg" },
    image: { url: "/image/course/python-course-image.jpg" },
    topics: [
      {
        title: "Introduction to Python",
        description:
          "This lesson will introduce you to Python, including basic syntax, variables, and data types.",
      },
      {
        title: "Control Structures",
        description:
          "Learn how to use if statements, loops, and functions to control the flow of your Python programs.",
      },
      {
        title: "Data Structures in Python",
        description:
          "This lesson covers the basic data structures in Python, including lists, dictionaries, and sets.",
      },
      {
        title: "Working with Functions",
        description:
          "Learn how to define and call functions in Python, and understand the importance of parameters and return values.",
      },
    ],
    documentation: {
      title: "Python Documentation",
      description:
        "Comprehensive guide to Python, including syntax, standard libraries, and tutorials.",
      content: `
  # **Python Documentation**
  ## Introduction
  Python is a high-level programming language used for a wide range of applications, from web development to data science.
  ## Getting Started
  To run Python, install the interpreter from [python.org](https://www.python.org/). You can run Python programs from the command line or within an IDE.
  \`\`\`bash
  python hello.py
  \`\`\`
  ## Core Concepts
  - **Variables**: Variables store data values, and you can use them in calculations or logic.
  - **Functions**: Functions are blocks of code designed to perform a specific task.
  - **Data Structures**: Lists, dictionaries, and tuples are the fundamental data structures in Python.
  ## Conclusion
  Python is easy to learn and highly versatile, making it a popular choice for beginners and experts alike. For more information, visit the [official Python documentation](https://docs.python.org/3/).
  ## Additional Resources
  - [Python Official Website](https://www.python.org/)
        `,
    },
  },
  {
    title: "React Basics",
    description: "Learn the fundamentals of React",
    rate: 4.5,
    ratings: 45782,
    students: 260192,
    lastUpdated: "03/2025",
    language: "English",
    subtitles: ["Arabic", "Spanish", "French"],
    category: { name: "Development" },
    price: 49.99,
    instructor: { name: "Sara Doe", photo: "/image/user/Sara.jpg" },
    image: { url: "/image/course/css-course-image.jpg" },
    topics: [
      {
        title: "Introduction to React",
        description:
          "This lesson will introduce you to the basics of React, including its core concepts like components and JSX.",
      },
      {
        title: "State and Props",
        description:
          "This lesson covers the concept of state and props, the two key aspects of React component functionality.",
      },
      {
        title: "Event Handling",
        description:
          "This lesson explains how to handle user interactions in React using events.",
        subtopics: [
          {
            title: "Handling Events in React",
            description:
              "Learn how to handle mouse clicks, keyboard input, and other events in React.",
          },
          {
            title: "Event Binding",
            description:
              "Understand how to bind event handlers to components in React.",
          },
        ],
      },
      {
        title: "React Router Basics",
        description:
          "Learn how to implement client-side routing in React applications using React Router.",
        subtopics: [
          {
            title: "Setting Up React Router",
            description:
              "Learn how to install and configure React Router in your React project.",
          },
          {
            title: "Using Router Components",
            description:
              "Understand how to use Route, Switch, and Link components to navigate through your application.",
          },
        ],
      },
    ],
    documentation: {
      title: "React Documentation",
      description:
        "Comprehensive guide to React, including API references and tutorials.",
      content: `
# **React Documentation**
## Introduction
React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data, without reloading the page.
## Getting Started
To get started with React, you need to have Node.js and npm installed on your machine. You can create a new React application using the following command:
\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`
## Core Concepts
- **Components**: React is all about components. A component is a JavaScript function or class that optionally accepts inputs (props) and returns a React element that describes how a section of the UI should appear.
- **JSX**: JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements in your JavaScript code.
- **State**: State is a built-in object that stores property values that belong to a component. When the state object changes, the component re-renders.
- **Props**: Props (short for properties) are read-only attributes used to pass data from one component to another.
- **Lifecycle Methods**: Lifecycle methods are hooks that allow you to run code at specific points in a component's life cycle, such as when it mounts or unmounts.
## Conclusion
React is a powerful library for building user interfaces. With its component-based architecture and virtual DOM, it allows for efficient updates and rendering of UI components. For more information, visit the [official React documentation](https://reactjs.org/docs/getting-started.html).
## Additional Resources
- [React Official Website](https://reactjs.org/)
      `,
    },
  },
  {
    title: "JavaScript Basics",
    description: "Learn the fundamentals of JavaScript",
    category: { name: "Development" },
    price: 59.99,
    rate: 3.5,
    ratings: 45782,
    students: 20192,
    lastUpdated: "03/2015",
    language: "English",
    subtitles: ["Arabic", "Spanish", "French"],
    instructor: { name: "John Smith", photo: "/image/user/John.jpg" },
    image: { url: "/image/course/vue-course-image.jpg" },
    topics: [
      {
        title: "Introduction to JavaScript",
        description:
          "This lesson will introduce you to the basics of JavaScript, including variables, data types, and syntax.",
      },
      {
        title: "Control Structures",
        description:
          "Learn about conditional statements, loops, and how they control the flow of execution in JavaScript.",
      },
      {
        title: "Functions",
        description:
          "This lesson covers how to define and use functions in JavaScript, including parameters and return values.",
      },
      {
        title: "Objects and Arrays",
        description:
          "Learn how to work with objects and arrays, which are fundamental data structures in JavaScript.",
      },
    ],
    documentation: {
      title: "JavaScript Documentation",
      description:
        "Comprehensive guide to JavaScript, including syntax, API references, and tutorials.",
      content: `
  # **JavaScript Documentation**
  ## Introduction
  JavaScript is a programming language that allows you to create interactive effects within web browsers. It is an essential part of the modern web development stack.
  ## Getting Started
  To start using JavaScript, simply include it in your HTML file:
  \`\`\`html
  <script>
    console.log('Hello, World!');
  </script>
  \`\`\`
  ## Core Concepts
  - **Variables**: Variables store data that can be accessed and manipulated.
  - **Functions**: Functions are reusable blocks of code that can take input and return output.
  - **Objects**: Objects are collections of key-value pairs.
  - **Arrays**: Arrays are ordered lists of values.
  ## Conclusion
  JavaScript is an essential language for web development. Mastering its core concepts will open the door to building interactive and dynamic web applications.
  ## Additional Resources
  - [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
        `,
    },
  },
];

export const valutes = "₸";
