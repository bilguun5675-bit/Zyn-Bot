

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1182360385865666650", ""], 
  mongodbUri : "mongodb+srv://bilguun5675:<db_password>@shiro.ka6d2zw.mongodb.net/?retryWrites=true&w=majority&appName=shiro",
  spotifyClientId : "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret : "199a619d22dd4e55a4a2c1a7a3d70e63",
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
