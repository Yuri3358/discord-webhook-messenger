const pageComponent = {
    template: pageTemplate,
    data() {
        return {
            apiToken: "",
            channelId: "",
            message: ""
        }
    },
    methods: {
        sendMessage() {
            fetch(`https://discord.com/api/webhooks/${this.channelId}/${this.apiToken}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    content: this.message
                })
            }).then(this.message = "")
        }
    }
}

exports = {pageComponent}