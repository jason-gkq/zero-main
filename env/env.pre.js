module.exports.defineConfig = () => ({
  ENV: "pre",
  apps: [
    {
      name: "admin",
      entry: "http://pre.com/admin",
      container: "#subapp-container",
      activeRule: "/admin",
    },
  ],
});
