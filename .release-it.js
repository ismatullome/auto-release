import { readFileSync } from "fs";

const commitTemplate = readFileSync("template.hbs").toString();

export const npm = {
  publish: false,
};
export const plugins = {
  "@release-it/conventional-changelog": {
    writerOpts: {
      commitPartial: commitTemplate,
    },
  },
};