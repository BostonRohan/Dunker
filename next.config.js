const nextConfig = {
  async rewrites() {
    return !process.env.NODE_ENV === "production"
      ? [
          {
            source: "/quiz/:slug",
            destination: `http://localhost:5000/quiz/:slug`,
          },
        ]
      : [];
  },
};
export default nextConfig;
