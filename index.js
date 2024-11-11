module.exports = (router) => {
  router.get("uc-agent-template", (req, res) => {
    const serviceName = "UC Plugin";
    res.render("/uc-agent-template.njk", { serviceName });
  });
};
