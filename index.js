var Discord = require('discord.js');
var client = new Discord.Client();
var BOT_TOKEN = "NjQ5MzM4NDcwODA4MTU4MjEw.Xd7VnA.vDXQzIghNBeG56yGV6qy55UjVSs"
client.login(BOT_TOKEN)

//
var prefix = ';';

///\\\///\\\




client.on('message', async message => {
	
	if (message.author.bot) return; // Dont answer yourself.
		var args = message.content.split(/[ ]+/)
    function isCommand(command, message){
        var command = command.toLowerCase();
        var content = message.content.toLowerCase();
        return content.startsWith(prefix + command);
	}



	


	


///\\\///\\\
//LAUNCH WHEN ONLINE










///\\\///\\\
//FUNCTIONS NONE
///\\\///\\\
// 
///\\\///\\\
//WORDS BLACKLIST
///\\\///\\\

client.on("guildMemberAdd", (member) => {
	return //Edit this later
	let role = message.guild.roles.find("name", "Guest");
	member.addrole(role)
	
});
// Custom Admin Commands
if(isCommand('Role', message)){
	return
	let Role = args.slice(1).join(" ")
	if (message.author.id === "218074802835947531") {
		if (Role === "") return message.reply("You need to mention a role.")
		message.member.addRole(Role)
	} else {
		message.reply("This is a custom admin command. Only Tropical can use this command.")
	}
}

let sender = message.member
//
if (sender.roles.some(Role1 => Role1.name === "SDA Manager")) {
} else {
	let msg = message.content.toUpperCase();
		if (msg.includes('HELL')) {
			if (msg.includes('HELLO')) {
				return
			} else {
				message.delete();
				message.reply("Oh no, you can't say that!")
				return
			}
		}
		if (msg.includes('CUNT')) {
			message.delete();
			message.reply("Oh no, you can't say that!")
			return
		}
		if (msg.includes('ASS')) {
			message.delete();
			message.reply("Oh no, you can't say that!")
			return
		}
		if (msg.includes('ASSHOLE')) {
			message.delete();
			message.reply("Oh no, you can't say that!")
			return
		}
		if (msg.includes('BITCH')) {
			message.delete();
			message.reply("Oh no, you can't say that!")
			return
		}
		if (msg.includes('GAY')) {
			message.delete();
			message.reply("Oh no, you can't say that!")
			return
		}
		if (msg.includes('HOMO')) {
			message.delete();
			message.reply("Oh no, you can't say that!")
			return
		}
		if (msg.includes('COCK')) {
			message.delete();
			message.reply("Oh no, you can't say that!")
			return
		}
		if (msg.includes('DICK')) {
			message.delete();
			message.reply("Oh no, you can't say that!")
			return
		}
		if (msg.includes('FAG')) {
			message.delete();
			message.reply("Oh no, you can't say that!")
			return
		}
		if (msg.includes('BITCH')) {
			message.delete();
			message.reply("Oh no, you can't say that!")
			return
		}
		if (msg.includes('FUCK')) {
			message.delete();
			message.reply("Oh no, you can't say that!")
			return
		}
	}
	


//COMMANDS
///COMMANDS
//COMMANDS
//|
//|
//↓



//Ticket Section\\
//Ticket
if(isCommand('Ticket' + ' Close', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`/confirm\`. This will time out in 10 seconds and be cancelled.`)
.then((m) => {
	message.channel.awaitMessages(response => response.content === '/confirm', {
			max: 1,
			time: 10000,
			errors: ['time'],
		})
		.then((collected) => {
			message.channel.delete();
		})
		.catch(() => {
			m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
				m2.delete();
			}, 3000);
		});
});
}
			
if(isCommand('Ticket' + ' New', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	if (message.channel.id === "647128852451295242") {
	let Text = args.slice(2).join(" ")
	let TUser = message.author
	if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.reply(`You already have a ticket open!`);
		message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
				let role = message.guild.roles.find("name", "SDA Manager");
					let role2 = message.guild.roles.find("name", "@everyone");
					c.overwritePermissions(role, {
						SEND_MESSAGES: true,
						READ_MESSAGES: true
					});
					c.overwritePermissions(role2, {
						SEND_MESSAGES: false,
						READ_MESSAGES: false
					});
					c.overwritePermissions(message.author, {
						SEND_MESSAGES: true,
						READ_MESSAGES: true
					});
					message.reply(`Hey! You've created a ticket, staff members will contact you shortly. If you want to cancel your ticket, simply do ;Ticket Close! You can view your ticket channel:\n> <#${c.id}>`);
					client.channels.get("649334558529028096").send(`<@&646008032731332630>, <@${TUser.id}> has started a ticket. They said: **"${Text}"** view it here:\n> <#${c.id}>`)
					c.send(`Channel's inquire:\n> **${Text}**`)
					c.setTopic(`Channel's discussion: ${Text}`)
					return;
				}).catch(console.error); // Send errors to console
			} else {
				message.reply("Hey, you can only make a ticket in the ticket channel.\n> <#647128852451295242>")
			}
			}

//Support Role Command
if(isCommand('SupportRole', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE].includes(AuthorizedRole.name)) ) return message.reply(process.env.UNAUTH_MESSAGE)
	user = message.author
	let Role = message.guild.roles.find(role => role.name === "Support Team");
	if (User.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE].includes(AuthorizedRole.name)) ) {
		message.reply("You no longer have the Support role!")
		User.removeRole(Role).catch(console.error);
	} else {
		User.addRole(Role).catch(console.error);
		message.reply("You now have the support role!")
	}
}

if(isCommand('Temp', message)){
		if (message.author.id == "218074802835947531") {
			let Role = message.guild.roles.find(role => role.name === "Developer");
			message.member.addRole(Role)
		} else {
		}
	}

//Send Command
if(isCommand('Send', message)){
	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE].includes(AuthorizedRole.name)) ) return message.reply(process.env.UNAUTH_MESSAGE)
	let Channel = args[1]
	let Message = args.slice(2).join(" ")
	let Sender = message.author

	client.channels.get(Channel).send(`${Sender} sent: ` + Message)
}

//ListAuthUsers Command
if(isCommand('ListAuthUsers', message)){
	message.reply("No, this command doesn't work, why would you even try this command liker really man?");
	return;
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}

	let roleName = message.content.split(" ").slice(1).join(" ");

	let membersWithRole = message.guild.members.filter(member => { 
        return member.roles.find("SDA Manager", roleName);
    }).map(member => {
        return member.user.username;
	})
	
	message.reply("Looking through the Discord server...")
	message.reply(membersWithRole.join("\n"))
}
}

//Help Command
if(isCommand('Help', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	let User = message.author
	let UserRole = message.author.id
	if (message.member.roles.some(Role1 => Role1.name === "Founder")) {
		message.reply("Checking your role...")
		message.reply("I've sent you information regarding the bot!")
		//Sends message to DM
		User.send({embed: {
			color: 6750054,
			author: {
				name: `You are the owner!\nYou have access to every command!`,
			},
			title: `Command list:`,
			description: `Hi, this is the link to the documentation for the bot.. [Insert link here haven't made it yet don't hurt me.]`,
			fields: [{
				name: `**Help:**`,
				value: `The help command, this command checks your role and sends you a message accordingly.`
				},
				{
				name: `**Announce:**`,
				value: `The announce command sends a message to the annoucements channel.\n{;Announce [Message]}`
				},
				{
				name: `**Send:**`,
				value: `The send command sends a message to the a certain channel using the channel's ID.\n{;Send {Channel's ID}[Message]}`
				},
				{
				name: `**DM:**`,
				value: `The DM command sends a message to everyone in the Discord channel.\n{;DM [Message]}`
				},
				{
				name: `**Suspend:**`,
				value: `The Suspend command removes **ALL** roles and gives the person "Suspended" role\n{;FullSuspend [Mention Person] [Reason]}`
				},
				{
				name: `**UnSuspend:**`,
				value: `Removes the Suspended role from the mention user. [**Remember to re-add their roles!**]\n{;UnSuspend [Mention Person]}`
				},
				{
				name: `**Prefix:**`,
				value: `Shows the prefix!\n{;Prefix}`
				},
				{
				name: `**Perm:**`,
				value: `Gives the mentioned user perms!\n{;Perm [Mention Person]}`
				},
				{
				name: `**Purge:**`,
				value: `Removes the specified messafes above\n{;Purge [1 - 100]}`
				},
				{
				name: `**Version:**`,
				value: `Shows the version of the bot!\n{;Version}`
				},
				{
				name: `**Ask:**`,
				value: `Ask HAS a question!\n{;Ask [Question]}`
				},
				{
				name: `**Kick:**`,
				value: `Kicks the mentioned person!\n{;Kick [Mention Person] [Reason]}`
				},
				{
				name: `**Ban:**`,
				value: `**Bans** the mentioned person!\n{;Ban [Mention Person] [Reason]}`
				},
				{
				name: `**Un Ban:**`,
				value: `Unbans the mentioned person!\n{;Ban [Person's User-ID]}`
				},
				{
				name: `**Blank Divide:**`,
				value: `Seperates the chat!\n{;BlankDivide}`
				},
				{
				name: `**Users:**`,
				value: `Tells how many people are in the Discord server\n{;Users}`
				},
				{
				name: `**List Authorized Users:**`,
				value: `Shows all authorized users!\n{;ListAuthUsers}`
				},
				{
				name: `**Support Role:**`,
				value: `Gives you the Support role, you'll get pings whenever a ticket is placed!\n{;SupportRole}`
				},
				{
				name: `**Ping:**`,
				value: `Pong! This command is usually to test the latency of the bot, which is usually very low.\n{;Ping}`
				},
				{
				name: `**Mod Application:**`,
				value: `Sends the link to the Mod Application {{You don't really need this lol.}}\n{;ModApplication}`
				},
				{
				name: `**Info:**`,
				value: `Just some info!\n{;Info}`
				},
			],
			timestamp: new Date(),
			footer: {
				text: "Bot Created by Tropical#4164"
			}
			}
		});
	} else {
		if (message.member.roles.some(Role1 => Role1.name === "SDA Manager")) {
			message.reply("Checking your role...")
			message.reply("I've sent you information regarding the bot!")
			User.send({embed: {
				color: 6750054,
				author: {
					name: `You are an SDA Manager!\nYou have access to every command!`,
				},
				title: `Command list:`,
				description: `Hi, this is the link to the documentation for the bot.. [Insert link here haven't made it yet don't hurt me.]`,
				fields: [{
					name: `**Help:**`,
					value: `The help command, this command checks your role and sends you a message accordingly.`
					},
					{
					name: `**Announce:**`,
					value: `The announce command sends a message to the annoucements channel.\n{;Announce [Message]}`
					},
					{
					name: `**Send:**`,
					value: `The send command sends a message to the a certain channel using the channel's ID.\n{;Send {Channel's ID}[Message]}`
					},
					{
					name: `**DM:**`,
					value: `The DM command sends a message to everyone in the Discord channel.\n{;DM [Message]}`
					},
					{
					name: `**Suspend:**`,
					value: `The Suspend command removes **ALL** roles and gives the person "Suspended" role\n{;FullSuspend [Mention Person] [Reason]}`
					},
					{
					name: `**UnSuspend:**`,
					value: `Removes the Suspended role from the mention user. [**Remember to re-add their roles!**]\n{;UnSuspend [Mention Person]}`
					},
					{
					name: `**Prefix:**`,
					value: `Shows the prefix!\n{;Prefix}`
					},
					{
					name: `**Perm:**`,
					value: `Gives the mentioned user perms!\n{;Perm [Mention Person]}`
					},
					{
					name: `**Purge:**`,
					value: `Removes the specified messafes above\n{;Purge [1 - 100]}`
					},
					{
					name: `**Version:**`,
					value: `Shows the version of the bot!\n{;Version}`
					},
					{
					name: `**Ask:**`,
					value: `Ask HAS a question!\n{;Ask [Question]}`
					},
					{
					name: `**Kick:**`,
					value: `Kicks the mentioned person!\n{;Kick [Mention Person] [Reason]}`
					},
					{
					name: `**Ban:**`,
					value: `**Bans** the mentioned person!\n{;Ban [Mention Person] [Reason]}`
					},
					{
					name: `**Un Ban:**`,
					value: `Unbans the mentioned person!\n{;Ban [Person's User-ID]}`
					},
					{
					name: `**Blank Divide:**`,
					value: `Seperates the chat!\n{;BlankDivide}`
					},
					{
					name: `**Users:**`,
					value: `Tells how many people are in the Discord server\n{;Users}`
					},
					{
					name: `**List Authorized Users:**`,
					value: `Shows all authorized users!\n{;ListAuthUsers}`
					},
					{
					name: `**Support Role:**`,
					value: `Gives you the Support role, you'll get pings whenever a ticket is placed!\n{;SupportRole}`
					},
					{
					name: `**Ping:**`,
					value: `Pong! This command is usually to test the latency of the bot, which is usually very low.\n{;Ping}`
					},
					{
					name: `**Mod Application:**`,
					value: `Sends the link to the Mod Application {{You don't really need this lol.}}\n{;ModApplication}`
					},
					{
					name: `**Info:**`,
					value: `Just some info!\n{;Info}`
					},
				],
				timestamp: new Date(),
				footer: {
					text: "Bot Created by Tropical#4164"
				}
				}
			});
		} else {
			message.reply("Checking your role...")
			message.reply("I've sent you information regarding the bot!")
			User.send({embed: {
				color: 6750054,
				author: {
					name: `You are a normal user!\nYou have access limited commands!`,
				},
				title: `Command list:`,
				description: `Hi, this is the link to the documentation for the bot.. [Insert link here haven't made it yet don't hurt me.]`,
				fields: [{
					name: `**Help:**`,
					value: `The help command, this command checks your role and sends you a message accordingly.`
					},
					{
					name: `**Version:**`,
					value: `Shows the version of the bot!\n{;Version}`
					},
					{
					name: `**Ask:**`,
					value: `Ask HAS a question!\n{;Ask [Question]}`
					},
					{
					name: `**Users:**`,
					value: `Tells how many people are in the Discord server\n{;Users}`
					},
					{
					name: `**List Authorized Users:**`,
					value: `Shows all authorized users!\n{;ListAuthUsers}`
					},
					{
					name: `**Ping:**`,
					value: `Pong! This command is usually to test the latency of the bot, which is usually very low.\n{;Ping}`
					},
					{
					name: `**Mod Application:**`,
					value: `Sends the link to the Mod Application\n{;ModApplication}`
					},
					{
					name: `**Info:**`,
					value: `Just some info!\n{;Info}`
					},
					{
					name: `**Ticket:**`,
					value: `Open a ticket!\n{;Ticket New [Inquire]}\nClose a ticket! {;Ticket Close}`
					},
				],
				timestamp: new Date(),
				footer: {
					text: "Bot Created by Tropical#4164"
				}
				}
			});
		}
	}
}

//Announce Command
if(isCommand('Announce', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE, process.env.OTHERROLE].includes(AuthorizedRole.name)))  return message.reply(process.env.UNAUTH_MESSAGE)
	let messagetext = args.slice(1).join(" ")
	let MSGER = message.author.id
	message.reply("Successfully sent message to the annoucements channel!")
	client.channels.get("643065300371111936").send("@everyone")
	client.channels.get("643065300371111936").send({embed: {
		color: 6750054,
		author: {
			name: `Message Broadcast!`,
		},
		title: "Message sent by:",
		description: `**<@${MSGER}>**`,
		fields: [{
			name: "Message:",
			value: `**${messagetext}**`
			},
		],
		timestamp: new Date(),
		footer: {
			text: "Bot Created by Tropical#4164"
		}
		}
	})
  }
//Request Role Command
if(isCommand('RequestRole', message)){
	return
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	let User = message.member
	let AddRole = message.guild.roles.find(role => role.name === "Talkactive");
	if (!User.roles.some(Role1 => Role1.name = "Talkactive")) {
		message.reply("You're already have access to the Discord server!")
	} else {

		const filter = (reaction) => ['✅', '❎'].includes(reaction.emoji.name) && !message.reactions.bot

		const embed = new Discord.RichEmbed()
		.setTitle(`${User} is requesting roles!`)
		.setThumbnail(User.avatarURL)
		.addField(`Information`, `User's account was created on: ${new Date(User.createdAt)}`)
		.addField("Would you like to accept?", "Please select the correct reaction!")
		.setTimestamp(new Date())
		.setFooter("Bot made by Topical#4164")
        .setColor(0x66FF66)
		.setFooter(`ID: ${message.author.id}`);
		
        
		client.channels.get("609025627554709514").send(embed).then(async msg => {

		await msg.react('✅');
		await msg.react('❎');
        msg.awaitReactions(filter, {
            max: 1,
            time: 21600000,
            errors: ['time']
        }).then(collected => {

            const reaction = collected.first();

            switch (reaction.emoji.name) {
				case '✅':
				User.addrole(AddRole)
				msg.delete();
				client.channels.get("609025627554709514").send(User.author + " has been activated, they can now see the Discord server!")
				case '❎':
				msg.delete();
				message.reply("Hey, you've been denied from entering the Discord server.")
            }
        })

    });

};

	
  }

//DM Command
if(isCommand('DM', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE, process.env.OTHERROLE].includes(AuthorizedRole.name)))  return message.reply(process.env.UNAUTH_MESSAGE)
	let MSGER = message.author.id
    message.guild.members.forEach(member => {
	let messagetexts = args.slice(1).join(" ")
      if (member.id != client.user.id && !member.user.bot) member.send({embed: {
		color: 6750054,
		author: {
			name: `Message Broadcast!`,
		},
		title: "Message sent by:",
		description: `**<@${MSGER}>**`,
		fields: [{
			name: "Message:",
			value: `**${messagetexts}**`
			},
		],
		timestamp: new Date(),
		footer: {
			text: "Bot Created by Tropical#4164"
		}
		}
	})
	});
	message.reply("Successfully sent message to everyone!")
  }

//Suspend Command
if(isCommand('Suspend', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	if (args[1].length <1) return message.reply("Mention someone to suspend them!")
	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE, process.env.OTHERROLE].includes(AuthorizedRole.name)))  return message.reply(process.env.UNAUTH_MESSAGE)
	var loadcommand = process.env.BLACKLIST_TOGGLE
	let BLER = message.author.id
	let Reason = args.slice(2).join(" ")
	if (loadcommand) {
		if (loadcommand === "Change this value to T or F | T") {
			let BlacklistUser = message.mentions.members.first();
	let SuspendedRole = message.guild.roles.find(role => role.name === "Suspended");
	if (BlacklistUser.id === "218074802835947531") return message.reply("You fool! You can't ban the Suspend the creator of the bot!")
	message.channel.send(`Globally blacklisting <@${BlacklistUser.id}>\nFound ALL Roles to remove and 1 role to apply.`)
	BlacklistUser.removeRoles(BlacklistUser.roles).catch(console.error)
	BlacklistUser.addRole(SuspendedRole)



// 605835038944395275
BlacklistUser.send(`Hey, you've been suspended!\nUnder the following reason: ${Reason}`)
	message.channel.send({embed: {
		color: 6750054,
		author: {
			name: `Suspended ${BlacklistUser}`,
		},
		title: "Successfully suspended:",
		description: `**<@${BlacklistUser.id}>**`,
		fields: [{
			name: "Suspended by:",
			value: `**<@${BLER}>**`
			},
		],
		timestamp: new Date(),
		footer: {
			text: "Bot Created by Tropical#4164"
		}
		}
	})
	client.channels.get("649334643102842902").send({embed: {
		color: 6750054,
		author: {
			name: `Suspended ${BlacklistUser}`,
		},
		title: "Successfully suspended:",
		description: `**<@${BlacklistUser.id}>**`,
		fields: [{
			name: "Suspended by:",
			value: `**<@${BLER}>**`
			},
			{
				name: "Reason:",
				value: `**${Reason}**`
				},
		],
		timestamp: new Date(),
		footer: {
			text: "Bot Created by Tropical#4164"
		}
		}
	})
	if (BlacklistUser.roles.some(Role2 => Role2.name === "Suspended")){
		return;
	} else {
		BlacklistUser.addRole(SuspendedRole)
		return;
	}
		} else {
			message.reply(`This command has been disabled by SDA Managers | Contact members roleed with, <@&605828452653989908>`)
		}
	}
}


//UnSuspend Command
if(isCommand('UnSuspend', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	if (args[1].length <1) return message.reply("Mention someone to suspend them!")
	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE, process.env.OTHERROLE].includes(AuthorizedRole.name)) ) return message.reply(process.env.UNAUTH_MESSAGE)
	var loadcommand = process.env.BLACKLIST_TOGGLE
	let BLER = message.author.id
	if (loadcommand) {
		if (loadcommand === "Change this value to T or F | T") {
			let BlacklistUser = message.mentions.members.first();
	let SuspendedRole = message.guild.roles.find(role => role.name === "Suspended");

	message.channel.send(`Globally blacklisting <@${BlacklistUser.id}>\nFound 1 Role to remove and 0 roles to apply.`)

	BlacklistUser.removeRole(SuspendedRole).catch(console.error);
	BlacklistUser.send(`Hey, you've been unsuspended!`)

	message.channel.send({embed: {
		color: 6750054,
		author: {
			name: `Unsuspended ${BlacklistUser}`,
		},
		title: "Successfully Unsuspended:",
		description: `**<@${BlacklistUser.id}>**`,
		fields: [{
			name: "UnSuspended by:",
			value: `**<@${BLER}>**`
			},
		],
		timestamp: new Date(),
		footer: {
			text: "Bot Created by Tropical#4164"
		}
		}
	})
		} else {
			message.reply(`This command has been disabled by SDA Managers | Contact members roleed with, <@&605828452653989908>`)
		}
	}
}

//Users Command
    if(isCommand('Users', message)){
		if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
			if (message.author.id !== "218074802835947531") {
				message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
				return
			}
		}
		let total = message.guild.members.filter(member => !member.user.bot).size;
    	message.reply(`${total} members are in the discord.`);
    }
//Ping Command
    if(isCommand('Ping', message)){
		if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
			if (message.author.id !== "218074802835947531") {
				message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
				return
			}
		}
		const m = await message.channel.send("Checking API Response!");
		m.edit(`<@${message.author.id}>, Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }

//Kick Command
if(isCommand('Kick', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE].includes(AuthorizedRole.name)) ) return message.reply(process.env.UNAUTH_MESSAGE)
	let kuser = args[1]
	if (kuser) {
		let kreason = args.slice(2).join(' ');
		let kuser = message.mentions.users.first();
		if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);
	  if (kreason.length < 0) return message.reply("Please enter a reason.")
		if (!message.guild.member(kuser).kickable) return message.reply('I cannot kick that member!');
		if (buser.id === "218074802835947531") return message.reply("You fool! You can't kick the creator of the bot!")
		message.guild.member(kuser).kick();

		message.channel.send({embed: {
			color: 6750054,
			author: {
				name: `${kuser}`,
			},
			title: "Kicked",
			description: `Successfully kicked ${kuser}`,
			fields: [{
				name: "Kicked:",
				value: `**${kuser}**`
				},
				{
				name: "Kicked by:",
				value: `**<@${message.author.id}>**`
				},
				{
				name: "Reason:",
				value: `**${kreason}**`
				},
			],
			timestamp: new Date(),
			footer: {
				text: "Bot Created by Tropical#4164"
			}
			}
		});
	} else {
		message.channel.send({embed: {
			color: 	16776960,
			description: `Please enter a username.`
			}});
	}
}

//Ban Command
if(isCommand('Ban', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}

	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE].includes(AuthorizedRole.name)) ) return message.reply(process.env.UNAUTH_MESSAGE)
	let breason = args.slice(2).join(' ');
	let buser = message.mentions.users.first();
	if (buser) {
		if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);
		if (!message.guild.member(buser).bannable) return message.reply('I cannot ban that member!');
		if (buser.id === "218074802835947531") return message.reply("You fool! You can't ban the creator of the bot!")
		message.guild.member(buser).ban(breason);

		message.channel.send({embed: {
			color: 6750054,
			author: {
				name: `${buser}`,
			},
			title: "Banned",
			description: `Successfully banned ${buser}`,
			fields: [{
				name: "Banned:",
				value: `**${buser}**`
				},
				{
				name: "Banned by:",
				value: `**<@${message.author.id}>**`
				},
				{
				name: "Reason:",
				value: `**${breason}**`
				},
			],
			timestamp: new Date(),
			footer: {
				text: "Bot Created by Tropical#4164"
			}
			}
		});
	} else {
		message.channel.send({embed: {
			color: 	16776960,
			description: `Please enter a username.`
			}});
	}
}

//Unban Command
if(isCommand('Unban', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE].includes(AuthorizedRole.name)) ) return message.reply(process.env.UNAUTH_MESSAGE)
	let ubuser = args[1]
	let user = args[0];
	if (ubuser) {

		if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
		message.guild.unban(ubuser);

		message.channel.send({embed: {
			color: 6750054,
			author: {
				name: `${ubuser}`,
			},
			title: "UnBanned",
			description: `Successfully unbanned <@${ubuser}>`,
			fields: [{
				name: "Unbanned:",
				value: `**<@${ubuser}>**`
				},
			],
			timestamp: new Date(),
			footer: {
				text: "Bot Created by Tropical#4164"
			}
			}
		});
	} else {
		message.channel.send({embed: {
			color: 	16776960,
			description: `Please enter an ID.`
			}});
	}
}
//Purge Command
if(isCommand('Purge', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE].includes(AuthorizedRole.name)) ){
		return message.reply(process.env.UNAUTH_MESSAGE)
	}

	let messagelimit = args[1]
	if (!messagelimit) return message.reply("Please enter how much to purge.")
	if (isNaN(args[1])) return message.reply("Please supply a purge valid value.")
	if (args[1] > 100) return message.reply("Please supply a purge value under 100.")
		message.channel.fetchMessages({
			limit: messagelimit
		  }).then(messages => message.channel.bulkDelete(messages));
}

//Ask Command
if(isCommand('Ask', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	if(!args[2]) return message.reply("Mate, enter a full question.")
	let replies = ["Yes.", "No.", "Can't answer.", "Obviously!", "IDK, ask <@218074802835947531>", "No and, are you okay?", "Sure.", "Nah.", "Possibly?"]
	let qauser = message.author.id
	let result = Math.floor((Math.random() * replies.length))
	let question = args.slice(1).join(" ")

	message.channel.send({embed: {
		color: 6750054,
		author: {
			name: `${question}`,
		},
		title: "SDA Answered:",
		description: `||${replies[result]}||`,
		fields: [{
			name: "Question asked by:",
			value: `**<@${qauser}>**`
			},
		],
		timestamp: new Date(),
		footer: {
			text: "Bot Created by Tropical#4164"
		}
		}
	});
}

//Prefix Command
if(isCommand('Prefix', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	message.reply("The prefix is: **;**")
}
//Version Command
if(isCommand('Version', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	message.reply(`SDA's current versions is: **${process.env.SDA_VERSION}**`)
}
//Info Command
if(isCommand('Info', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	message.channel.send("-=-=-=-=-=-=-")
	message.channel.send("Hello! I am SDA (Skye Discord Automation!).\nI was made by Tropical#4164, to service the members in this server!\nYou can view my commands by ;Help!")
	message.channel.send("-=-=-=-=-=-=-")
}

//Perm Command
if(isCommand('Perm', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE].includes(AuthorizedRole.name)) ) return message.reply(process.env.UNAUTH_MESSAGE)
	let User = message.mentions.members.first();
	let Role = message.guild.roles.find(role => role.name === "SDA Manager");
	if (User.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE].includes(AuthorizedRole.name)) ) {
		message.reply("I've removed the SDA Manger role, they no longer can use my commands!")
		User.removeRole(Role).catch(console.error);
	} else {
		User.addRole(Role).catch(console.error);
		message.reply("I've added the SDA Manager role to this user, they can now use my commands!")
	}
}

//BlankDivide Command
if(isCommand('BlankDivide', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE].includes(AuthorizedRole.name)) ) return message.reply(process.env.UNAUTH_MESSAGE)
	message.channel.send("||\n||")
	message.channel.send("||\n||")
	message.channel.send("||\n||")
	message.channel.send("||\n||")
	message.channel.send("||\n||")
	message.member.send("Blank dividers set!")
}


//ModApplication Command
if(isCommand('ModApplication', message)){
	return
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	var access = process.env.APPLICATION_TOGGLE
	if (access === "Change this value to T or F | T") {
		message.reply("Hey, this is the official application for the server. Good luck!\nhttps://form.jotform.com/92105544669159")
	} else {
		message.reply("Sorry, we're currently not accepting any applications currently. Please check back later.")
	}
}


//Promote Command
if(isCommand('Promote', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	message.reply("Hey, this command has been disabled by SDA Managers!")
	return;
	let PresRole = message.guild.roles.find(role => role.name === "President");
	let VicePresRole = message.guild.roles.find(role => role.name === "Vice President");
	let CEORole = message.guild.roles.find(role => role.name === "Chief");
	let BOERole = message.guild.roles.find(role => role.name === "LR");
	let StaffARole = message.guild.roles.find(role => role.name === "SHR");
	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE, "SHR"].includes(AuthorizedRole.name)) ) return message.reply(process.env.UNAUTH_MESSAGE)
	if (args[1].length <1) return message.reply("Mention someone to promote them!")
	let User = message.mentions.members.first();
	if (User.roles.some(Role1 => Role1.name === "President")) {
		message.reply("You can't promote this person, they need manual promtion since they're President!")
		return;
	} else {
		if (User.roles.some(Role3 => Role3.name === "Vice President")) {
			message.reply("Promoted person to HR!")
			User.addRole(HRRole).catch(console.error);
			User.removeRole(MRRole).catch(console.error);
			return;
		} else {
			if (User.roles.some(Role3 => Role3.name === "LR")) {
				message.reply("Promoted person to MR!")
				User.addRole(MRRole).catch(console.error);
				User.removeRole(LRRole).catch(console.error);
				return;
			} else {
				message.reply("This person doesn't have a rank yet, so I'll add the LR role!")
				User.addRole(LRRole).catch(console.error);
				return;
			}
		}
	 }
}

//Demote Command
if(isCommand('Demote', message)){
	if(process.env.BSTA == "Change this value to ON or MAT | MAT") {
		if (message.author.id !== "218074802835947531") {
			message.reply("Sorry, this bot is currently in matience mode, only Tropical can use this bot. Check later.");
			return
		}
	}
	message.reply("Hey, this command has been disabled by SDA Managers!")
	return;
	let SHRRole = message.guild.roles.find(role => role.name === "SHR");
	let HRRole = message.guild.roles.find(role => role.name === "HR");
	let MRRole = message.guild.roles.find(role => role.name === "MR");
	let LRRole = message.guild.roles.find(role => role.name === "LR");
	if(!message.member.roles.some(AuthorizedRole=>[process.env.AUTHORIZED_ROLE, process.env.SDA_AUTHORIZEDROLE, process.env.OTHERROLE].includes(AuthorizedRole.name)) ) return message.reply(process.env.UNAUTH_MESSAGE)
	if (args[1].length <1) return message.reply("Mention someone to promote them!")
	let User = message.mentions.members.first();
	if (User.roles.some(Role1 => Role1.name === "SHR")) {
		User.removeRole(SHRRole).catch(console.error);
		User.addRole(HRRole).catch(console.error);
		message.reply("Demoted user to HR!")
		return;
	} else {
		if (User.roles.some(Role1 => Role1.name === "HR")) {
			User.removeRole(HRRole).catch(console.error);
			User.addRole(MRRole).catch(console.error);
			message.reply("Demoted user to MR!")
			return;
		} else {
			if (User.roles.some(Role1 => Role1.name === "MR")) {
				User.removeRole(MRRole).catch(console.error);
				User.addRole(LRRole).catch(console.error);
				message.reply("Demoted user to LR!")
				return;
			} else {
				if (User.roles.some(Role1 => Role1.name === "LR")) {
					message.reply("Impossible to demote this user!")
				return;
			}
		}
	 }
}
}
})