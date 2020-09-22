var TelegramBot=require('node-telegram-bot-api');
var token='1150213591:AAGNg8g06A6hFYSyugVS56MPnd_1oEDYyXE';
var bot=new TelegramBot(token,{polling:true});
var request=require('request');

bot.onText(/\/movie (.+)/,function(msg,match){
    var chatId=msg.chat.id;
    
    var  movie=match[1];
   
    
    
    request(`http://www.omdbapi.com/?apikey=59022c1b&t=${movie}`,function(error,response,body){
      if(!error&&response.statusCode==200){
        var name=msg.chat.first_name;
        bot.sendMessage(chatId,"Welcome in MoviesFinder "+name);
  bot.sendMessage(chatId,'_looking for _'+movie+'...',{parse_mode:'Markdown'})
  .then(function(msg){
  var res=JSON.parse(body);
  
    bot.sendPhoto(chatId,res.Poster,{caption:'Result: \nTitle: '+res.Title+ '\nYear: '+res.Year+ '\nRated: '+res.Rated+'\nReleased: '+res.Released});
  })
 
}
    });
});
*/

 
