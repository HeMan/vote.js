// tslint:disable

const fs = require("fs");

const cwd = process.cwd();

if (fs.existsSync(`${cwd}/.env`)) {
  console.log(".env file already exists");
} else {
  console.log("Creating .env file");
  fs.createReadStream(`${cwd}/.env.default`).pipe(
    fs.createWriteStream(`${cwd}/.env`)
  );
}
