const scopedPackageJson = require('../package.json');

const cowsay = require("cowsay");


console.log(`Sourcepool plugin ${scopedPackageJson.name} loading.`);


console.debug(JSON.stringify({
	availableModels: global.modelUtils || "No models available.",
	serverDatabaseDirectory: global.databasePath || "No server database path available.",
	serverPluginsDirectory: global.serverPlugins || "No server plugins path available."
}, null, 4));

console.log(cowsay.say({text:"Hello, I'm a cow!"}));

console.log(`Sourcepool plugin ${scopedPackageJson.name} completed loading.`)