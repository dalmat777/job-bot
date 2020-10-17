const Scene = require('telegraf/scenes/base');
const findWork = new Scene('findWork');
const { whereFindWorkKeyboard, categoryKeyboard } = require('../../util/keyboards');

findWork.enter(async ctx => {
  const keyboard = whereFindWorkKeyboard();
  ctx.reply('✅ Где вы ищите работу?', keyboard);
});

findWork.hears(/\sобласть/, ctx => {
  const keyboard = categoryKeyboard();
  ctx.reply('👨‍💻 Выберите направление', keyboard);
});

module.exports = findWork;
