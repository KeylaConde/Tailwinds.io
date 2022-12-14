/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  buildOptions: {
    baseUrl: 'https://keylaconde.github.io/Tailwinds.io/public/index.html',
  },
}
