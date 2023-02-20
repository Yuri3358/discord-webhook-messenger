const pageComponent = {
    template: pageTemplate,
    data() {
        return {
            webhookURL: "",
            message: ""
        }
    },
    methods: {
        sendMessage() {
            fetch(this.webhookURL, {
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