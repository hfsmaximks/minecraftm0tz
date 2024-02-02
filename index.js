const mineflayer = require("mineflayer");

for (let i = 0; i < 2; i++) {
  const bot = mineflayer.createBot({
    host: "survivalpro9078.aternos.me",
    port: "21171",
    version: "1.20.2",
    username: `MyBot${i}`
  });

  bot.on("login", () => {
    console.log(`Bot${i} logged in`);
  });

  bot.on("error", (err) => {
    console.error(`Error with Bot${i}: ${err}`);
  });
}
