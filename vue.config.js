module.exports = {
  css: {
    loaderOptions: {
      less: {
        prependData: `@import "~@/variables.less";
                      @import "~@/styles.less";`,
      },
    },
  },
};
