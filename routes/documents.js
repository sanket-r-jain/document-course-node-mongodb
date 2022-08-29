const express = require("express");
const router = express.Router();
const Document = require("../models/document");

router.get("/", async (req, res) => {
    try {
        const documents = await Document.find();
        res.json(documents);
    } catch (err) {
        res.send("Error " + err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        res.json(document);
    } catch (err) {
        res.send("Error " + err);
    }
});

router.post("/", async (req, res) => {
    const document = new Document({
        documentType: req.body.documentType,
        documentPath: req.body.documentPath,
        courseId: req.body.courseId,
    });

    try {
        const newDocument = await document.save();
        res.json(newDocument);
    } catch (err) {
        res.send("Error " + err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const documentToBeUpdated = await Document.findById(req.params.id);
        documentToBeUpdated.documentType = req.body.documentType;
        documentToBeUpdated.documentPath = req.body.documentPath;
        documentToBeUpdated.courseId = req.body.courseId;

        const updatedDocument = await documentToBeUpdated.save();
        res.json(updatedDocument);
    } catch (err) {
        res.send("Error " + err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Document.deleteOne({ _id: req.params.id });
        res.json({ message: "deleted successfully" });
    } catch (err) {
        res.send("Error " + err);
    }
});

module.exports = router;
