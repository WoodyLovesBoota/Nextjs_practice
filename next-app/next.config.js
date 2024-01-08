/** @type {import('next').NextConfig} */

const API_KEY = process.env.REACT_APP_APIKEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/old/:path*", destination: "/new/:path*", permanent: false }];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?language=ko-KR&api_key=${API_KEY}`,
      },
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
