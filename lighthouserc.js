module.exports = {
  ci: {
    collect: {
      staticDistDir: "./public"
    },
    upload: {
      target: "temporary-public-storage"
    },
    assert: {
      preset: "lighthouse:recommended"
    }
  }
};
