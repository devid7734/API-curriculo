const { Router } = require("express");
const controller = require('./controller'); 

const router = Router();

router.get("/", controller.getCurriculo);
router.get("/:id", controller.getCurriculoById)
router.post("/", controller.addCurriculo);
router.put("/:id", controller.updateCurriculo);
router.delete("/:id", controller.removeCurriculo);

module.exports = router;

