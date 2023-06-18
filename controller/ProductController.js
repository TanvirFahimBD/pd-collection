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

exports.GenerateToken = (req, res) => {
  let userId = req.params.id;
  let Payload = {
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
    data: { userId },
  };
  let token = jwt.sign(Payload, "SecretKey");
  res.status(200).send({ status: "success", token });
};

exports.UpdateProduct = (req, res) => {
  let id = req.params.id;
  let query = { _id: id };
  let reqBody = req.body;
  ProductModel.updateOne(query, reqBody)
    .then((data) => res.status(200).send({ status: "success", data: data }))
    .catch((err) =>
      res.status(401).send({ status: "Unauthorized error", message: err })
    );
};
