module.exports = function (eleventyConfig) {
    // copy images, css, and js from /assets
    eleventyConfig.addPassthroughCopy("./assets")
    return {
        dir: {
            passthroughFileCopy: true,
            // write to aspnet.core output directory
            output: "../wwwroot"
        }
    }
}