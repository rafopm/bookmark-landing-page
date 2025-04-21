// next.config.js
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'bookmark-landing-page'; 

module.exports = {
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
  images: {
    unoptimized: true,  
  },
};
