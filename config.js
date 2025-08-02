

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1182360385865666650", ""], 
  mongodbUri : "mongodb+srv://bilguun5675:<db_password>@shiro.ka6d2zw.mongodb.net/?retryWrites=true&w=majority&appName=shiro",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/SVV76Sjypv",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "5.39.63.207",
      port:  8262,
      secure: false
    }
  ]
}
