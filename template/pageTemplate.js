const pageTemplate = `
    <header>Discord Webhook Messenger</header>
    <div id="content-box">
        <label for="token">Token da API</label>
        <input id="token" autocomplete=off v-model="apiToken">

        <label for="channel">ID do Chat</label>
        <input id="channel" autocomplete=off v-model="channelId">

        <label for="message">Mensagem</label>
        <textarea id="message" autocomplete=off v-model="message">

        <button class="btn btn-success">Enviar Mensagem</button>
    </div>
`

exports = {pageTemplate}