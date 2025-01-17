**# Decision Tree Interactive Module**

An interactive learning module built with React, designed to help students understand decision trees in a fun and engaging way. This module allows users to visualize decision trees, interact with them, and even create their own custom decision trees.

**## Features**

- **Interactive Decision Tree**: Visualize and interact with decision trees, answering questions at each node.
- **Animated Nodes**: Adds animations to the decision nodes for a more dynamic user experience.
- **Create Your Own Tree**: A form that allows users to create and customize their own decision tree.
- **Scoring and Rewards**: Based on user choices, the app handles scoring and rewards logic.
- **Predefined Trees**: A set of predefined decision trees to explore.
  
## Live Demo

You can view the live demo of this project: https://github.com/Likhithagudla/Decision-Tree-Interactive-Module .

**Output Screens**

![DALL·E 2025-01-05 13 30 55 - A minimalistic home screen design for an educational module about decision trees for children in Class 6 and 7  The screen features a clean layout wit](https://github.com/user-attachments/assets/212f30b2-54e2-4cec-8847-914aefdd4f15)
![DALL·E 2025-01-05 13 31 43 - A visually engaging screen for an interactive decision tree module for children in Class 6 and 7  The screen features a question prominently displayed](https://github.com/user-attachments/assets/4ead2889-bf64-494c-a1a2-e00487d99940)
![DALL·E 2025-01-05 13 34 45 - A collapsible sidebar menu designed for an educational decision tree module for children in Class 6 and 7  The sidebar is located on the left side of ](https://github.com/user-attachments/assets/db3048d2-87a1-417e-93b1-88ccc58ad4c7)

**## Project Structure**

```bash
/decision-tree-interactive-module
│
├── /public/                    # Public assets (images, icons, static files)
│   └── /assets/
│
├── /src/                       # All source code files
│   ├── /components/            # Reusable UI components
│   │   ├── DecisionNode.js     # Decision node component (question/answer)
│   │   ├── AnimatedNode.js     # Animated decision node component
│   │   ├── TreeStructure.js    # For visual tree structure
│   │   └── CreateTreeForm.js   # For allowing user to create their own tree
│   │
│   ├── /styles/                # Styling files (CSS, SASS, etc.)
│   │   └── main.css            # Main stylesheet
│   │
│   ├── /data/                  # Static data (predefined decision trees)
│   │   └── decisionTreeData.js # Default decision tree structure
│   │
│   ├── /utils/                 # Helper functions (animations, scoring)
│   │   ├── animations.js       # For animations using React-spring or GSAP
│   │   └── scoring.js          # For handling scoring and rewards logic
│   │
│   ├── App.js                  # Main React component (handles the app logic)
│   ├── index.js                # Main entry file for the app
│   └── App.css                 # Global CSS styles for the app
│
└── /package.json               # Node.js dependencies and configurations

**Installation**
To run this project locally, follow these steps:

**Clone this repository:**

bash
Copy code
git clone https://github.com/your-username/decision-tree-interactive-module.git
Navigate to the project folder:

bash
Copy code
cd decision-tree-interactive-module

**Install dependencies:**
bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open your browser and go to http://localhost:3000 to see the app in action.

**Technologies Used**
React.js
CSS (for styling)
React-spring or GSAP (for animations)
JavaScript
Node.js
**Contributing**
If you'd like to contribute to this project, please fork the repository and submit a pull request. Ensure your code adheres to the project's coding standards and includes tests where applicable.

**License**
This project is licensed under the MIT License 



