const express = require("express");
const router = express.Router();

const Pizza = require("../models/pizzaModel");

router.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    return res.status(400).json({ message: err });
  }
});

router.post("/addpizza", async (req, res) => {
  const pizza = req.body.pizza;

  try {
    const newPizza = new Pizza({
      name: pizza.name,
      image: pizza.image,
      varients: ["small", "medium", "large"],
      description: pizza.description,
      category: pizza.category,
      prices: [pizza.prices],
    });
    await newPizza.save();
    res.send("Pizza added successfully");
  } catch (error) {
    return res.status(400).json({ message: err });
  }
});

router.post("/getpizzabyid", async (req, res) => {
  const pizzaid = req.body.pizzaid;
  try {
    const pizza = await Pizza.findOne({ _id: pizzaid });
    res.send(pizza);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/editpizza", async (req, res) => {
  const editedpizza = req.body.editedpizza;

  try {
    const pizza = await Pizza.findOne({ _id: editedpizza._id });
    pizza.name = editedpizza.name;
    pizza.description = editedpizza.description;
    pizza.image = editedpizza.imageURL;
    pizza.category = editedpizza.category;
    pizza.name = editedpizza.name;
    pizza.prices = [editedpizza.prices];

    await pizza.save();
    res.send("Pizza Updated Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deletepizza", async (req, res) => {
  const pizzaid = req.body.pizzaid
 try {
  await Pizza.findOneAndDelete({_id: pizzaid})
  res.send("Success")
 } catch (error) {
  return res.status(400).json({ message: error }); 
 }
});

module.exports = router;
