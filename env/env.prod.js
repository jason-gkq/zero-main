module.exports.defineConfig = () => ({
  ENV: "prod",
  apps: [
    {
      name: "admin",
      entry: "http://prod/admin",
      container: "#subapp-container",
      activeRule: "/admin",
    },
  ],
});
