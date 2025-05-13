Markdown PreviewerProject DescriptionThis project is a web application that allows users to type in Markdown and see a live preview of the rendered HTML. It's a single-page application built with React, providing a dynamic and user-friendly experience.FeaturesLive Preview: As you type Markdown in the input area, the preview updates instantly.Markdown Support: The application supports standard Markdown syntax, including:Headers (H1-H6)ParagraphsBold and italic textBlockquotesOrdered and unordered listsCode snippets (inline and block)Horizontal rulesLinksImagesResponsive Design: The application is designed to work well on various screen sizes.User StoryI can see a textarea where I can enter my markdown.I can see a preview of the output of my markdown that is updated as I type.Technical DetailsBuilt with React: The application's user interface is built using React.Markdown Rendering: The marked library is used to convert Markdown text into HTML.CSS Styling: Custom CSS is used to style the input area and the preview.InstallationClone the repository:git clone https://github.com/ChitraSiddharthan/Markdown-Previewer.git
Navigate to the project directory:cd Markdown-Previewer
Install dependencies:npm install
UsageStart the development server:npm start
Open the application in your browser:The application will be accessible at http://localhost:3000.Type Markdown:Enter Markdown text in the input area on the left, and the rendered HTML preview will be displayed on the right.File Structuremarkdown-previewer/
├── public/
│   └── index.html
└── src/
    ├── components/
    │   └── App.js      # Main application component
    ├── index.js        # Entry point of the application
    └── styles.css      # Styles for the application
ContributingContributions are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request.LicenseThis project is licensed under the MIT License.
