module.exports = {
  // VUE_APP_B_URL: "232"
  // baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/',
  publicPath:
    process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  pages: {
    index: {
      entry: "src/index/main.ts",
      template: "public/index.html",
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    post: {
      entry: "src/post/main.ts",
      template: "public/post.html",
      filename: "post.html",
      title: "Post Page",
      chunks: ["chunk-vendors", "chunk-common", "post"]
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: "src/post/main.ts"
  }
};
