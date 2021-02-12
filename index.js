export default class discord_webHook{
	constructor(webHook_url){
		this.whURL = webHook_url;
	}
	sendMsg(message){
		this.msg = message;
		fetch(this.whURL, {
			"method": "POST",
			"headers": {
				"content-type": "application/json"
			},
			"body": JSON.stringify({"content": this.msg})
		});
	}
}


