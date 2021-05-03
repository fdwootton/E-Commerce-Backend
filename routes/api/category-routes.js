const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll(
    {
      // be sure to include its associated Products
      include: {
        model: Product,
        attributes: ['product_name'],
      }
    }
  )
  .then((categoryData) => {
    res.json(categoryData)
  })
  .catch((error) => {
    res.status(500).json(error);
    console.log(error);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne(
    {
      where: {
        id: req.params.id,
      },
      // be sure to include its associated Products
      include: {
        model: Product,
        attributes: ['category_id'],
      }
    }
  )
  .then((categoryData) => {
    res.json(categoryData)
  })
  .catch((error) => {
    res.status(500).json(error);
    console.log(error);
  });
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
