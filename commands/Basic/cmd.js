/* 
    Steps of making new commands:
    1. Create a new folder in the commands folder.
    2. Create a new file in the folder.
    3. Use a 'module.exports' to export the command (so you can call it in the main file using 'require').
    4. Make any needed object properties and methods.
    5. The 'Run' method can be named whatever you like, be sure to call it the same name in the main file.
    6. Code away!
*/

module.exports = {
    name: 'name',
    description: 'description',
    //Note: You must call the client, message, args, and cmd object in the exec method.
    Run: async function Run(client, message, args, cmd) {
        //code
    }
}
