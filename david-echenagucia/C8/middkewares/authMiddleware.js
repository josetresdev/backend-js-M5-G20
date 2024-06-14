const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === "mysecrettoken") {
    next();
  } else {
    res.status(403).json({ error: "Forbidden: Invalid or missing token" });
  }
};

export default authMiddleware;
