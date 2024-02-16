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
        "$ gh pr status Relevant pull requests in cli/cli Current branch There is no pull request associated with [fix-homepage-bug] Created by you You have no open pull requests Requesting a code review from you #100 Fix footer on homepage [fix-homepage-footer] ✓ Checks passing - Review pending",
        "$ gh pr checkout 12 remote: Enumerating objects: 66, done. remote: Counting objects: 100% (66/66), done. remote: Total 83 (delta 66), reused 66 (delta 66), pack-reused 17 Unpacking objects: 100% (83/83), done. From https://github.com owner/repo * [new ref] refs/pull/8896/head -> patch-2'",


    ],
    typeSpeed: 0,
    backSpeed: 0,
    backDelay: 3000,
    loop: true,
    cursorChar: "",
  });
