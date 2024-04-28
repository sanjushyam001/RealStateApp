import express from "express";

const router = express.Router();
router.get("/test", (req, res) => {
  res.send("post works");
});
router.post("/test", (req, res) => {
  res.send("post works");
});
router.put("/test", (req, res) => {
  res.send("post works");
});
router.delete("/test", (req, res) => {
  res.send("post works");
});
export default router;
