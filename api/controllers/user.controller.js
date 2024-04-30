import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
export const getUsers = async (req, res) => {
  console.log("getUsers works");
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "failed to get users" });
  }
};
export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: { id },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "failed to get user" });
  }
};
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const tokenId = req.userId;
    const { username } = req.body;
    const { password, avatar, ...inputs } = req.body;

    if (id !== tokenId)
      return res.status(403).json({ message: "Not Authorized" });

    const existingUser = await prisma.user.findFirst({
      where: {
        username: username,
        NOT: {
          id: id, // Exclude the current user
        },
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }
    let updatedPassword = null;
    if (password) updatedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(updatedPassword && { password: updatedPassword }),
        ...(avatar && { avatar }),
      },
    });
    console.log(updatedUser);
    const { password: userPassword, ...rest } = updatedUser;
    res.status(200).json(rest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to update user" });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const tokenId = req.userId;

    if (id !== tokenId)
      return res.status(403).json({ message: "Not Authorized" });

    await prisma.user.delete({
      where: { id },
    });
    res.status(200).json({ message: "user deleted" });
  } catch (error) {
    res.status(500).json({ message: "failed to delete user" });
  }
};
