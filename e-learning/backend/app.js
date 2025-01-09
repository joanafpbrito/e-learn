import fs from "node:fs/promises";
import bodyParser from "body-parser";
import express from "express";
import jwt from "jsonwebtoken";
import http from "http";
import { Server } from "socket.io";
const path = require('path')


const SECRET_KEY = "your_secret_key";

// Generate a JWT token
const createJSONToken = (email) => {
  return jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
};

const app = express();
app.use(express.static("./data/front-image-courses/"));
app.use(express.static("./data/courses-videos/"));
app.use(express.static("./data/courses-videos/"))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
    next();
});

//--------------------------------------------------------------------

const server = http.createServer(app);

const io = new Server(server, {
  // Configurações adicionais do Socket.IO, se necessário.
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
}); // Configure o Socket.IO no servidor

io.on('connection', (socket) => {
  console.log('Usuário conectado', socket.id);

  socket.on('sendMessage', (messageData) => {
      console.log(messageData);
      io.emit('receiveMessage', messageData); // Broadcast de mensagens
  });

  socket.on('disconnect', () => {
      console.log('Usuário desconectado', socket.id);
  });
});

app.get("/chat", (req, res) => {
    res.send("Servidor está funcionando");
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

  const login = users.find((u) => u.email === email);
  
  if (!login) {
    return res.status(400).json({ error: "Utilizador não encontrado." });
  }

  if (login.password !== password) {
    return res.status(400).json({ error: "Senha incorreta." });
  }


  if (login) {
  const token = createJSONToken(email);

  const user = {
    token: token,
    name: login.firstName,
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


app.get("/coursesModules", async (req, res) => {
  const content = await fs.readFile("./data/coursesModules.json");
  const coursesModules = JSON.parse(content);
  res.status(200).json({ coursesModules });
});

//_______________-_____


//--------------------------------------------------------------------------------------

app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
      return next();
    }
    res.status(404).json({ message: "404 - Not Found" });
  });
  
app.listen(3700);