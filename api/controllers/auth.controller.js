import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //HASH THE PASSWORD

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    //CREATE THE NEW USER AND SAVE IT TO DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);

    res.status(201).json({ message: "User created successfully " });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create User " });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // CHECK IF THE USER EXIST OR NOT ?

    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // CHECK IF THE PASSWORD IS CORRECT ?
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    // IF THE USER AND PASSWORD IS CORRECT GENERATE THE COOKIE TOKEN AND SEND TO THE USER

    // res.setHeader("Set-Cookie", "test=" + "myValue").json("success");
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: age,
      }
    );

    const { password: userPassword, ...userInfo } = user;
    res
      .cookie("token", token, {
        httpOnly: true,
        // secure: true,
        maxAge: age,
      })
      .status(200)
      .json(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to login " });
  }
};
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout successfully" });
};
