import CombinationService from "../services/combination.service.js";

class CombinationsController {
  constructor() {
    this.combinationService = new CombinationService();
  }

  createCombination = async (req, res, next) => {
    try {
      const postData = req.body;
      const result = await this.combinationService.createCombination(
        postData.data
      );
      res.status(201).json({ result });
    } catch (error) {
      next(error);
    }
  };
}

export default CombinationsController;
