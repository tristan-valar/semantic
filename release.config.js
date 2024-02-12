const config = {
  release: {
    branches: ["master"],
  },
  plugins: [
    "@semantic-release/commit-analyzer", // analizes commits to determine the type of release
    "@semantic-release/release-notes-generator", // generates release notes
    // [
    //   "@semantic-release/git",
    //   {
    //     assets: [
    //     //   "dist/**/*",
    //       "package.json",
    //       "package-lock.json",
    //       "CHANGELOG.md",
    //     ],
    //     message:
    //       "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
    //   },
    // ],
    "@semantic-release/github", // publishes the release to GitHub
  ],
};

export default config;
