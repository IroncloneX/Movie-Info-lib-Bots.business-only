function movie(movie, key){
if(movie==undefined){
Bot.sendMessage("Movie name is not defined")
return
}
if(key==undefined){
Bot.sendMessage("Api Key is not defined")
}else{
HTTP.get({
  url: "http://www.omdbapi.com/?apikey=" + key + "&t=" + movie + "&y=" + message + "",
  success: "56"
})
}}


