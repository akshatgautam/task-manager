module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/task-manager/public/'
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
