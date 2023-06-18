const ProductModel = require("../models/ProductModel");

exports.CreateProduct = (req, res) => {
  const reqBody = req.body;
  ProductModel.create(reqBody)
    .then((data) => res.status(200).send({ status: "success", data: data }))
    .catch((err) => res.status(401).send({ status: "fail", message: err }));
};

exports.GetProducts = (req, res) => {
  ProductModel.find({})
    .then((data) => res.status(200).send({ status: "success", data: data }))
    .catch((err) => res.status(401).send({ status: "fail", message: err }));
};
