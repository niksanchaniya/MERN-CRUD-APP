// import express from "express";
// import { getUsers } from "../controller/usercontroller";
const express = require("express");

const controller = require("../controller/usercontroller");
const route = express.Router();

route.get("/", controller.getUsers);
route.get("/:id", controller.getUsersById);
route.post("/add", controller.addUsers);
route.put("/:id", controller.editUsers);
route.delete("/:id", controller.deleteUsers);

module.exports = route;