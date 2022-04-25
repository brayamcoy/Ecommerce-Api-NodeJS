const { ProductCategory } = require('../models');

const get = async (req, res, next) => {
  try {
    return await ProductCategory.findAll();
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
const create = async(req, res, next) => {
  try {
    await ProductCategory.create({...req.body});
    return res.status(201).json({ message: 'Created' });
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    await ProductCategory.update({...req.body}, { where: { id } });
    res.status(200).json({ message: 'Updated'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await ProductCategory.destroy({ where: { id } });
    res.status(201).json({ message: 'Removed'});
  } catch (error) {
    res.status(500).json({ error: error.message}); 
  }
};

module.exports = {
  get,
  create,
  update,
  remove,
};
