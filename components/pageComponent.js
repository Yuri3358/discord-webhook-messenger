const pageComponent = {
    template: pageTemplate,
    data() {
        return {
            webhookURL: "",
            message: "",
            showEmbed: false,
            embedTitle: "",
        }
    },
    methods: {
        sendMessage() {
            fetch(this.webhookURL, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(this.useEmbed())
            }).then(this.message = this.embedTitle = "")
        },
        useEmbed() {
            if (this.showEmbed) {
                return {
                    embeds: [{
                        title: this.embedTitle,
                        description: this.message,
                    }]
                }
            } else {
                return {content: this.message}
            }
        }
    }
}

exports = {pageComponent}