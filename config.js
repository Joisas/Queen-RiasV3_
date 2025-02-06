const fs = require("fs"); 
require("dotenv").config();

module.exports = {
    prefix: process.env.PREFIX || ".",
    ownerName: process.env.OWNER_NAME || "Japhet",
    ownerNumber: process.env.OWNER_NUMBER || "243892839065",
    mode: process.env.MODE || "privé",
    region: process.env.REGION || "Lubumbashi",
    botName: process.env.BOT_NAME || "Gaillard",
    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES",
    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic",
    timeZone: process.env.TIME_ZONE || "Africa/congo",
    presenceStatus: process.env.PRESENCE_STATUS || "yes",
    autoRead: process.env.AUTO_READ === "not",
    autoViewStatus: process.env.AUTO_VIEW_STATUS === "yes",
    autoReact: process.env.AUTO_REACT === "yes",
    sessionId: process.env.SESSION_ID || "Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01UREN3dUYvY0tIeTRwcFlYQ1BucFV0Sk4rdzEwZ2t4UlhYNzhDRGRWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkp6bURhN1FZK0txek1lR3djZzhnSlVYZUltKzM5eWI5MGVPcWtKMWp3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTkV5R1BEcjg2OGxpa3FlZTlaTlFTL0xqS1k5WGxPTG1QZW9TNUZIVlZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRVVV3UUdSRDM1Y0dmdDFGR1ZhZHNUVDhSNnYrNnQ3Vzk0WStjRDlINDFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZHd1k1V1lhQ1ZQQjZGeGh5aG5sSVF6enYyQWpPR3A5M0pnbytpTTZMbUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFtT2wyOW1RZWlZbWRlRzkrR3pPOU1GVG93UFJwM0NUN2NJclNGQW1rUnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0FjelVjQm9FSjkrSUQwRnF6K3RKeFpIajZNblF5TldqM0ZvUVg3ZUxrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGpSekZUMk1qNXpYNWh3SElnOWpKUGMrY1hhQTgzY3RNckZ2Zk5WNjFIaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZEdDFYaVpVN3E5VFZMcHdqU2sxVlNZVTdjQ0pEaTJBUHlpRC9OVGl2ekExUEJUOFE4dmhMOVlNWmZOQXd2SUdGbnNFYUlzWUpvL3hLRTN5RGsveWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6IkNhR0hiL0NNYklRdVVESytweXoxNGlrbHBkYkxrOWdsbWU0VklFRVc3amM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjoxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJSR0FENlkzMSIsIm1lIjp7ImlkIjoiMjQzODkyODM5MDY1OjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01USjF6c1E5ZWZndXdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFTSjRqUXdPZThTUEFzd2JOaWJ1dmp5eEdhWE8wWkdJbFVRalBPT0NaVVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZ3MkFjaFFweXdiSFFPYU5DeDllTGs0S0F4dVVPYlhzcU5UZXJWZVdPQWhESmFwdnZpRmI4WlI3ZE5Va0EwVXhKVTlVbHhwaXVVWjJ4QWhCbzBaY0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWTE02V05SRzRpbCthdnhaZks4eVJORGJta2d0U2tVbTJMSGlFZ0lLcnVRbnNtdlRwMDA5QjRCYkhwZHY5YWpUdzZ1TjF0S3E3Y2tIQUJneC9PdlRqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0Mzg5MjgzOTA2NToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVFaWVJME1EbnZFandMTUd6WW03cjQ4c1JtbHp0R1JpSlZFSXp6amdtVkcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQifQ==",
    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false",
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => {
    fs.unwatchFile(file); 
    console.log(`Update '${__filename}'`); 
    delete require.cache[file];
    require(file); 
});
