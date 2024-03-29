const keywordsRouter = require("../routes/keywords");
const autoCompletionsRouter = require("../routes/autoCompletions");
const videosRouter = require("../routes/videos");
const authRouter = require("../routes/auth");
const adminRouter = require("../routes/admin");
const extractionRouter = require("../routes/extraction");

async function routerLoader(app) {
  app.use("/keywords", keywordsRouter);
  app.use("/auto-completions", autoCompletionsRouter);
  app.use("/videos", videosRouter);
  app.use("/auth", authRouter);
  app.use("/admin", adminRouter);
  app.use("/extraction", extractionRouter);
}

module.exports = routerLoader;
