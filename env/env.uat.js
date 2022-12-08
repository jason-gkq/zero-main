module.exports.defineConfig = () => ({
  ENV: "uat",
  apps: [
    {
      name: "admin",
      entry: "http://uat.com/admin",
      container: "#subapp-container",
      activeRule: "/admin",
    },
  ],
});
