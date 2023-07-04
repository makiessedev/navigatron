import "dotenv/config";
import app from "./app";

const port = Number(process.env.SERVER_PORT);

app.listen(port, () =>
  console.log(`Server running\n-> http://localhost:${port}`)
);
