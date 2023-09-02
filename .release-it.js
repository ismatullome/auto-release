const fs = require("fs");

const commitTemplate = fs.readFileSync("template.hbs").toString();

module.exports = {
  npm: {
    publish: false,
  },
  plugins: {
    "@release-it/conventional-changelog": {
      writerOpts: {
        commitPartial: commitTemplate,
      },
    },
  },
};