const { request } = require("express");
const User = require("../model/userSchema");

exports.getUsers = async(req, res) => {
    try {
        let user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
}


exports.addUsers = async(req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (e) {
        res.status(404).json({ message: e.message });
    }

}
exports.getUsersById = async(req, res) => {
    try {
        let user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (e) {
        res.status(404).json({ message: e.message });
        console.log(e);

    }
}
exports.editUsers = async(req, res) => {
    let user = await User.findById(req.params.id);
    user = req.body;
    const editUser = new User(user);
    try {
        await User.updateOne({ _id: req.params.id }, editUser);
        res.status(201).json(editUser);
    } catch (e) {
        res.status(404).json({ message: e.message });
        console.log(e);

    }
}

exports.deleteUsers = async(req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id });
        res.status(201).send("user deleted successfully")
    } catch (e) {
        res.status(404).json({ message: e.message });
        console.log(e)
    }

}