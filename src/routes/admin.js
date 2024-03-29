const express = require("express");

const crawlingController = require("../controllers/crawling.controller");

const router = express.Router();

router.get("/streamCrawling", crawlingController.streamCrawling);
router.get("/startCrawling", crawlingController.startCrawling);
router.get("/stopCrawling", crawlingController.stopCrawling);
router.get("/verifyYoutubeUrl", crawlingController.verifyYoutubeUrl);
router.post("/autoCrawling", crawlingController.autoCrawling);
router.post("/saveVideoId", crawlingController.saveVideoId);
router.post("/pageRanking", crawlingController.pageRanking);
router.post("/combineAllScores", crawlingController.combineAllScores);

module.exports = router;
