
module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('source/**/*.css')
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
    }
  }  
}