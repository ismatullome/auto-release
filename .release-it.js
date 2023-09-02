const fs = require("fs");

const commitTemplate = fs.readFileSync("template.hbs").toString();

module.exports = {
  git: {
    commitMessage: "chore(release): v${version}",
    changelog: 'git log --pretty=format:"* %s (%h)" ${from}...${to}',
    requireCleanWorkingDir: true,
    requireBranch: false,
    requireUpstream: true,
    requireCommits: false,
    requireCommitsFail: true,
    commitsPath: "",
    addUntrackedFiles: false,
    commit: true,
    commitArgs: [],
    tag: false,
    tagExclude: null,
    tagName: null,
    tagMatch: null,
    getLatestTagFromAllRefs: false,
    tagAnnotation: "Release ${version}",
    tagArgs: [],
    push: true,
    pushArgs: ["--follow-tags"],
    pushRepo: "",
  },
  npm: {
    publish: false,
  },
  plugins: {
    "@release-it/conventional-changelog": {
      infile: "CHANGELOG.md",
      header: "# Changelog",
      context: {
        linkCompare: false,
      },
      gitRawCommitsOpts: {
        merges: null,
      },
      parserOpts: {
        mergePattern: "^Merge pull request #(\\d+) from (.*)$",
      },
      preset: {
        name: "conventionalcommits",
        types: [
          {
            type: "feat",
            section: "Features",
          },
          {
            type: "fix",
            section: "Bug Fixes",
          },
          {},
        ],
      },
      writerOpts: {
        commitPartial: commitTemplate,
      },
    },
  },
};
