const fs = require('fs');

const commitTemplate = fs.readFileSync('template.hbs').toString();

module.exports = {
  plugins: {
    '@release-it/conventional-changelog': {
      writerOpts: {
        commitPartial: commitTemplate
      }
    }
  }
};