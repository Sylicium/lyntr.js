<p align="center">
  <p align="center">
    <img src="assets/logo.svg" alt="Logo" width="128" />
  </p>
  <h1 align="center"><b>lyntr.js</b></h1>
</p>

## 💻 About

`lyntr.js` is a simple and lightweight JavaScript library that utilizes the [Lyntr API](https://lyntr.com) to interact with the Lyntr platform.
## About

 A package for developing bots for lyntr.

## 🚀 Installation
```bash
$ npm install lyntr.js
$ yarn add lyntr.js
$ pnpm add lyntr.js
```

## 📚 Usage
```javascript
import * as lyntrjs from 'lyntr.js';
import dotenv from 'dotenv';
dotenv.config();

const TOKEN = process.env.TOKEN; // The Lyntr httpOnly cookie named _TOKEN__DO_NOT_SHARE

let Bot = new lyntrjs.Client({
    baseURL: "https://lyntr.jnnj.xyz",
    verbose: 0 // 0 to 5
});

Bot.on('ready', (loggedAt, user) => {
    console.log(`Bot is ready, logged at ${loggedAt}`);
    console.log(`Connected as ${user.username} (${user.handle})`);
});

Bot.on('post', lynt => {

    console.log(`[BOT] new lynt (${lynt.id}): ${lynt.username} (${lynt.handle}): ${lynt.content}`, lynt);
    if(lynt.me) return console.log(`[BOT] Lyn is mine. Returning...`);

    lynt.relynt('Hey someone lynted this')
});


Bot.login(TOKEN);

```

## ✍ Contributing

Contributions are always welcome! Please fork the repository and create a pull request with your changes.


## Links

- [lyntr.com](https://lyntr.com) (shutted down)
- [lyntr.jnnj.xyz](https://lyntr.jnnj.xyz)
