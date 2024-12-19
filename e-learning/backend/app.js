import fs from "node:fs/promises";
import bodyParser from "body-parser";
import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.static("./front-image-courses"));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
    next();
});

//--------------------------------------------------------------------
app.post("/signup", async (req, res) => {
    const fileContent = await fs.readFile("./data/users.json");
    const users = JSON.parse(fileContent);

    const newUser = req.body;
    users.push(newUser);

    await fs.writeFile("./data/users.json", JSON.stringify(users, null, 2));
    res.status(200).json({ message: "User Inserted!" });
});

app.get("/users", async (req, res) => {
    const fileContent = await fs.readFile("./data/users.json");
    const users = JSON.parse(fileContent);
    res.status(200).json({ users });
  });

app.post("/login", async (req, res) => {
  const fileContent = await fs.readFile("./data/users.json");
  const users = JSON.parse(fileContent);

  const email = req.body.email;
  const password = req.body.password;

  const login = users.find((u) => u.email === email && u.password === password);

  if (!login) {
    return res.status(422).json({
      message: "Dados de utilizador incorretos!",
      errors: { credentials: "E-mail ou password inválidos!" },
    });
  }

  if (login) {
  const token = createJSONToken(email);

  const user = {
    token: token,
    name: login.name,
    role: login.role,
  };

  res.json(user);
  }
});
  
//--------------------------------------------------------------------------------------

app.get("/courses", async (req, res) => {
  const content = await fs.readFile("./data/courses.json");
  const coursesData = JSON.parse(content);
  res.status(200).json({ coursesData });
});



//--------------------------------------------------------------------------------------

app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
      return next();
    }
    res.status(404).json({ message: "404 - Not Found" });
  });
  
app.listen(3700);