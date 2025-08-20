import express from "express";

import orderController from "../controllers/AlbumController.js";

const router = express.Router();

// Root/Index Routes
router.get("/", function (req, res, next) {
  res.json({
    message: "Call the /albums route to retrieve a list of albums",
  });
});

// get albums
router.get("/albums", orderController);

export default router;
