/*==================== typed js ====================*/

const typed = new Typed(".cli-title", {
  strings: [
    "gh pr status",
    " gh pr checkout",
    "gh pr create",
    " gh pr checks",
    "gh alias set",
  ],
  typeSpeed: 100,
  backSpeed: 0,
  backDelay: 6000,
  loop: true,
  cursorChar: "",
});
const type2 = new Typed(".cli-title-detail", {
  strings: [
    "Status of your pull requests.",
    "Check out pull request",
    "Create a new release",
    "Shortcut for a gh command.",
  ],
  typeSpeed: 30,
  backSpeed: 0,
  backDelay: 6000,
  loop: true,
  cursorChar: "",
});
const type3 = new Typed(".interface-text", {
  strings: [
    "$ <span class='blue-text'>gh</span> pr <span class='yellow-text'>status</span> Relevant pull requests in cli/cli Current branch There is no pull request associated with [fix-homepage-bug] Created by you You have no open pull requests Requesting a code review from you <span class='green-text'>#100</span> Fix footer on homepage [fix-homepage-footer] ✓ Checks passing - Review pending",

    "$ <span class='blue-text'>gh</span> pr checkout <span class='green-text'>12</span> remote: Enumerating objects: 66, done. remote: Counting objects: 100% (66/66), done. remote: Total 83 (delta 66), reused 66 (delta 66), pack-reused 17 Unpacking objects: 100% (83/83), done. From <span class='green-text'>https://github.com</span> owner/repo * [new ref] refs/pull/8896/head -> patch-2'",

    "$ <span class='blue-text'>gh</span> pr create Creating pull request for feature-branch into main in ampinsk/test ? Title My new pull request ? Body[(e) to launch vim, enter to skip] ? What's next? Submit",
    "$ <span class='blue-text'>gh</span> pr checks All checks were successful 1 failing, 3 successful, and 1 pending checks- CodeQL 3m43s <span class='green-text'>https://github.com</span> build (macos-latest) 4m18s <span class='green-text'>https://github.com</span>/cli/cli build (ubuntu-latest)",
    "$ <span class='blue-text'>gh</span> alias set bugs 'issue li - Adding alias for bugs: issue list --label= bugs ✓ Added alias.$ <span class='blue-text'>gh</span> bugs Showing 2 of 7issues in cli/cli that match your search <span class='green-text'>#19</span> Pagination request returns empty JSON (bug) <span class='green-text'>#21</span> Error raised when passing valid parameters (bug)",
  ],
  typeSpeed: 0,
  backSpeed: 0,
  backDelay: 3000,
  loop: true,
  cursorChar: "",
  onStringTyped: function (arrayPos, self) {
    // After typing each string, we'll modify the HTML to change colors
    const interfaceTextElement = document.querySelector(
      ".interface-text .typed-cursor"
    ); // Get the element containing the typed text
    if (interfaceTextElement) {
      interfaceTextElement.previousSibling.innerHTML =
        interfaceTextElement.previousSibling.innerHTML.replace(
          /gh/g,
          '<span class="blue-text">gh</span>'
        ); // Change color of "gh" to blue
      interfaceTextElement.previousSibling.innerHTML =
        interfaceTextElement.previousSibling.innerHTML.replace(
          /status/g,
          '<span class="yellow-text">status</span>'
        ); // Change color of "status" to yellow
      interfaceTextElement.previousSibling.innerHTML =
        interfaceTextElement.previousSibling.innerHTML.replace(
          /\[#?(\d+)\]/g,
          '[<span class="green-text">$1</span>]'
        ); // Change color of numbers within brackets to green
      interfaceTextElement.previousSibling.innerHTML =
        interfaceTextElement.previousSibling.innerHTML.replace(
          /https?:\/\/\S+/g,
          '<span class="green-text">$&</span>'
        ); // Change color of links to green
    }
  },
});
