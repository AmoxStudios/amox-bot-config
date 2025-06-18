/**
 * This script file will (or atleast should) run before the main script file runs.
 * This file should contain stuff like options, global variables (etc.) to be used by the main script.
 */

// Options

// URL options can override the options below.
// Options set through the menu can override both until the page is refreshed.
options = {
    username: 'Amox Bot',
    avatar: 'https://cdn.discordapp.com/icons/1227329814307016814/a_30efe06fa93052036341a24931b34439.gif',
    verified: false,
    noUser: false,
    data: mull,
    guiTabs: [],
    useJsonEditor: false,
    reverseColumns: false,
    allowPlaceholders: true,
    autoUpdateURL: false,
    autoParams: false,
    hideEditor: false,
    hidePreview: false,
    hideMenu: true,
    single: false,
    noMultiEmbedsOption: false,
    sourceOption: false, // Display link to source code in menu.
}

// Default JSON object

json = {
    content: ""
}


// Write any code under the 'DOMContentLoaded' event to run after the page has loaded.
addEventListener('DOMContentLoaded', () => {
    // console.log('Hello 👋');

    // Remove the colour picker
    // document.querySelector('.colors').remove()
})