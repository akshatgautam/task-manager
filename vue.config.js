module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/task-manager/'
    : '/',
  css: {
    loaderOptions: {
      less: {
        prependData: `@import "~@/variables.less";
                      @import "~@/styles.less";`,
      },
    },
  },
};
