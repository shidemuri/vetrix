const discord = require("discord.js-self") //discord.js nerfed selfbots because idk maybe its because its agains tos
const self = new discord.Client();
const chalk = require("chalk") //colorz

let _token = require(`./shit.json`)
let aaaa = require(`./random_login_msg.json`)

let _math = Math.floor(Math.random() * aaaa.length) //random msg


//----------------------------------------------------------------------------------

function logolol(){
    console.log(`\n██╗   ██╗███████╗████████╗██████╗ ██╗██╗  ██╗`)
    console.log(`██║   ██║██╔════╝╚══██╔══╝██╔══██╗██║╚██╗██╔╝`)
    console.log(`██║   ██║█████╗     ██║   ██████╔╝██║ ╚███╔╝ `)
    console.log(`╚██╗ ██╔╝██╔══╝     ██║   ██╔══██╗██║ ██╔██╗ `)
    console.log(` ╚████╔╝ ███████╗   ██║   ██║  ██║██║██╔╝ ██╗`)
    console.log(`  ╚═══╝  ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝\n`)

}

function main(wwww){
    console.clear()
    logolol()
    console.log(chalk.blue(aaaa[_math]) + `\n`)
    console.log(wwww)
}

console.clear()
main(chalk.green(`waiting to login`))

self.login(_token.token)
    
self.on("ready", (idk) =>{
    main(`Tip: works better on premade destiny servers\nNot recommended on main servers with too much roles/channels/emojis\n`)
    if(!self.guilds.cache.get(_token.mainserver)){
        main('\n[' + chalk.red(`ERROR`) + ']: Invalid main server\n')
        process.exit()
    }
    if(!self.guilds.cache.get(_token.destinyserver)){
        main('\n[' + chalk.red(`ERROR`) + ']: Invalid destiny server\n')
        process.exit()
    }
    var mainserver = self.guilds.cache.get(_token.mainserver)
    var destinyserver = self.guilds.cache.get(_token.destinyserver)
    // -------------------------------------------------------------
    //--------------------------------------------------------------
    destinyserver.setName(mainserver.name)
    destinyserver.setIcon(mainserver.iconURL());
    destinyserver.setVerificationLevel(mainserver.verification)
    
    destinyserver.channels.cache.forEach(ch => ch.delete('Vetrix wwww'))
    destinyserver.roles.cache.forEach(r => r.delete('Vetrix wwww'))
    destinyserver.emojis.cache.forEach(e => e.delete('Vetrix wwww'))
    mainserver.channels.cache.forEach(ch =>{
        try{    
            destinyserver.channels.create(`${ch.name}`, {type: `${ch.type}`,reason: `Vetrix fazendo porra`}).then(chh =>{
                if(chh.type == 'text'){
                    if(ch.topic !== null) chh.setTopic(`${ch.topic}`)
                }
                if(chh.type == 'voice'){
                    chh.setBitrate(ch.bitrate)
                    chh.setUserLimit(ch.userLimit)
                }
            })
        } catch(e) { return;}
    })
    mainserver.roles.cache.forEach(r =>{
        try{
            destinyserver.roles.create({data: {name: `${r.name}`, color: `${r.hexColor}`, hoist: `${r.hoist}`, mentionable: `${r.mentionable}`}})
        } catch(e) { return;}
    })
    mainserver.emojis.cache.forEach(e =>{
        destinyserver.emojis.create(`${e.url}`, `${e.name}`)
    })
    destinyserver.channels.create(`Done`).then(c => {
        c.send(`Cloned using Vetrox \n-padero`)
        console.log(chalk.greenBright(`done lol`))
        process.exit()
    })
})