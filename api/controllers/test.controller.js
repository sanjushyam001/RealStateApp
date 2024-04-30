import jwt from "jsonwebtoken";
export const shouldBeLoggedIn = (req, res) => {
  console.log(req.userId);

  return res.status(200).json({ message: "You are Authenticated" });
};

export const shouldBeAdmin = async (req, res) => {
  console.log(req.userId);

  return res.status(200).json({ message: "You are Authenticated" });
};
