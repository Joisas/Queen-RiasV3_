const fs = require("fs"); 
require("dotenv").config();

module.exports = {
    prefix: process.env.PREFIX || ".",
    ownerName: process.env.𝕁𝔸ℙℍ𝔼𝕋_𝔾𝔸𝕀𝕃𝕃𝔸ℝ𝔻 || "Toxxic-Boy",
    ownerNumber: process.env.0892839065 || "2348165846414",
    mode: process.env.MODE || "privé",
    region: process.env.REGION || "Nigeria",
    botName: process.env.BOT_NAME || "𝔾𝔸𝕀𝕃𝕃𝔸ℝ𝔻",
    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES",
    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic",
    timeZone: process.env.TIME_ZONE || "Africa/Lagos",
    presenceStatus: process.env.PRESENCE_STATUS || "unavailable",
    autoRead: process.env.AUTO_READ === "true",
    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true",
    autoReact: process.env.AUTO_REACT === "true",
    sessionId: process.env.SESSION_ID || "",
    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false",
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => {
    fs.unwatchFile(file); 
    console.log(`Update '${__filename}'`); 
    delete require.cache[file];
    require(file); 
});
