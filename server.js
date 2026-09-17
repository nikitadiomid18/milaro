const { createServer } = require("node:http");
const next = require("next");

const port = Number(process.env.PORT || 3000);
const app = next({ dev: false, hostname: "127.0.0.1", port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => handle(req, res)).listen(port);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
