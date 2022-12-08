module.exports.defineConfig = () => ({
  ENV: "local",
  apps: [
    {
      name: "admin",
      entry: "http://localhost:3200/admin",
      container: "#subapp-container",
      activeRule: "/admin",
    },
  ],
});
