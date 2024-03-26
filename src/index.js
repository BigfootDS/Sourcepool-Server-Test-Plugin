const scopedPackageJson = require('../package.json');

const installerProcess = require("node:child_process");

async function pluginCode(){
	const cowsay = require("cowsay");


	console.log(`Sourcepool plugin ${scopedPackageJson.name} loading.`);


	console.debug(JSON.stringify({
		availableModels: global.modelUtils || "No models available.",
		serverDatabaseDirectory: global.databasePath || "No server database path available.",
		serverPluginsDirectory: global.serverPlugins || "No server plugins path available."
	}, null, 4));

	console.log(cowsay.say({text:"Hello, I'm a cow!"}));

	console.log(`Sourcepool plugin ${scopedPackageJson.name} completed loading.`)
}

/**
 * Starting a plugin assumes that it has been downloaded with its entire
 * node_modules and any other dependent files all as part of the download.
 * The plugin system does not install dependencies, so everything must be provided
 * in the plugin's download!
 */
async function startPlugin(){
	pluginCode();
}


module.exports = {
	startPlugin
}