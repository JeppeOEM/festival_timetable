module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeimg.com",
        port: "",
        pathname: "/720/480/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
    ],
  },
};
