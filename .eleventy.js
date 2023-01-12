const markdownIt = require("markdown-it");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('source/**/*.css')
  eleventyConfig.addPassthroughCopy('source/**/*.mp3')
  eleventyConfig.addPassthroughCopy('source/**/*.png')
  
  eleventyConfig.setLibrary("md", markdownIt({ html: true }))
  
  // eleventyConfig.addTemplateFormats('css')

  // eleventyConfig.addExtension('css', {
  //   outputFileExtension: 'css',
  //   compile: (inputContent, inputPath) => {
  //     return async (data) => {
  //       return data.css
  //     }
  //   }
  // })

  return {
    dir: {
      layouts: '_layouts',
      input: 'source',
      output: 'public',
    },
  }  
}