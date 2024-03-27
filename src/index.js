const scopedPackageJson = require('../package.json');

async function pluginCode(){
	const cowsay = require("cowsay");
	console.log(cowsay.say({text:"Hello, I'm a Sourcepool plugin!"}));

	console.debug(JSON.stringify({
		availableModels: global.modelUtils || "No models available.",
		serverDatabaseDirectory: global.databasePath || "No server database path available.",
		serverPluginsDirectory: global.serverPlugins || "No server plugins path available."
	}, null, 4));

	console.log(`Sourcepool plugin ${scopedPackageJson.name} completed.`)

}

/**
 * Starting a plugin assumes that it has been downloaded with its entire
 * node_modules and any other dependent files all as part of the download.
 * The plugin system does not install dependencies, so everything must be provided
 * in the plugin's download!
 */
async function startPlugin(){
	console.log(`Sourcepool plugin ${scopedPackageJson.name} starting.`);

	await pluginCode();


}


module.exports = {
	startPlugin
}