const db = require("../models");
const User = db.user;
const Role = db.role;

exports.allAccess = (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).send({ users: users });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  User.findAll({
    include: [
      {
        model: Role,
        through: { attributes: [] },
        attributes: {
          include: ["name"],
          exclude: ["createdAt", "updatedAt",],
        },
      },
    ],
    attributes: {
      include: ["username"],
      exclude: ["id", "password"],
    },
  })
    .then((users) => {
      // for (let i = 0; i < users.length; i++) {
      //   users[i].getRoles().then((roles) => {
      //     //   console.log(roles);

      //     users[0]["dataValues"]["roles"] = roles;
      //     console.log(users);

      //     res.status(200).send({ users: users });
      //   });
      // }

      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
