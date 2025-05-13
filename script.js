document.addEventListener('DOMContentLoaded', () => {

    // Get references to the DOM elements
    const markdownInput = document.getElementById('markdown-input');
    const htmlOutput = document.getElementById('html-output');

    // Initial default Markdown content
    const defaultMarkdown = `# Welcome to My Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Type some Markdown on the left, and see it rendered on the right.

**Features:**
* Real-time preview
* Uses the [Marked.js](https://marked.js.org/) library
* Styled with [Tailwind CSS](https://tailwindcss.com/) (and its 'prose' plugin)

**Code Example:**
\`\`\`javascript
// This is a JavaScript code block
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Markdown User");
\`\`\`

**Inline code:** \`const example = true;\`

**Blockquote:**
> Dorothy followed her through many of the beautiful rooms in her castle.

**Table Example:**
| Feature         | Support | Notes                            |
|-----------------|---------|----------------------------------|
| Headers         | Yes     | H1 to H6                         |
| Emphasis        | Yes     | *italic*, **bold**, \`monospace\` |
| Lists           | Yes     | Unordered & Ordered              |
| Links           | Yes     | [Google](https://google.com)     |
| Images          | Yes     | \`![Alt text](URL)\` (use placeholder for now) |
| Code Blocks     | Yes     | Fenced with backticks            |
| Blockquotes     | Yes     | \`> Blockquote\`                  |

**Placeholder Image:**
![Placeholder Image](https://placehold.co/600x200/3b82f6/ffffff?text=Cool+Image)

Let's try a task list:
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
`;

    // Function to render Markdown to HTML
    function renderMarkdown() {
        if (markdownInput && htmlOutput) { // Ensure elements exist
            const markdownText = markdownInput.value;

            // Configure marked.js
            marked.setOptions({
                breaks: true,        // GFM line breaks (CRLF, CR, LF -> <br>)
                gfm: true,           // GitHub Flavored Markdown (tables, strikethrough, etc.)
                pedantic: false,     // Don't be overly strict
                sanitize: false      // IMPORTANT: For production with untrusted input, use a sanitizer
                                     // like DOMPurify: htmlOutput.innerHTML = DOMPurify.sanitize(marked.parse(markdownText));
            });

            htmlOutput.innerHTML = marked.parse(markdownText);
        } else {
            // This should not happen if IDs in HTML are correct
            console.error("Markdown input or HTML output element not found in the DOM.");
        }
    }

    // Check if markdownInput exists before setting its value or adding event listener
    if (markdownInput) {
        // Set initial content
        markdownInput.value = defaultMarkdown;
        
        // Initial render
        renderMarkdown();

        // Add event listener for input changes on the textarea
        markdownInput.addEventListener('input', renderMarkdown);
    } else {
        console.error("Markdown input element (#markdown-input) not found. Cannot set initial value or add event listener.");
    }
});
