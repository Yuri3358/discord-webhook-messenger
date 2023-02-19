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
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    content: this.message
                })
            })
        }
    }
}

exports = {pageComponent}