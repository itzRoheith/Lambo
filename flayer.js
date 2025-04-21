// bot.js
import mineflayer from 'mineflayer';

let bot;

function createBot() {
  bot = mineflayer.createBot({
    host: 'your.server.ip',
    port: 25565,
    username: 'ForeverBot',
    version: '1.21.4'
    
    
  });

  bot.on('spawn', () => {
    console.log('✅ Bot spawned!');
    // Anti-AFK: Look around
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2;
      bot.look(yaw, 0);
    }, 60000);
  });

  bot.on('end', () => {
    console.log('❌ Disconnected. Reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => console.log('⚠️ Error:', err));
  bot.on('kicked', reason => console.log('👢 Kicked:', reason));
}

createBot();
