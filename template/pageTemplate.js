const pageTemplate = `
    <header>
        <h1>Discord Webhook Messenger</h1>
    </header>
    <div id="content-box" @keyup.enter="sendMessage">
        <label for="token">Token da API</label>
        <input id="token" autocomplete=off v-model="apiToken">

        <label for="channel">ID do Chat</label>
        <input id="channel" autocomplete=off v-model="channelId">

        <label for="message">Mensagem</label>
        <textarea id="message" autocomplete=off v-model="message"></textarea>
        <button class="btn btn-success" @click="sendMessage">Enviar Mensagem</button>
    </div>
`

exports = {pageTemplate}