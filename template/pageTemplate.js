const pageTemplate = `
    <header>
        <h1>Discord Webhook Messenger</h1>
        <a target="_blank" href="https://github.com/Yuri3358" id="creatormark">Made by Yuri</a>  
    </header>
    <div id="content-box" @keyup.enter="sendMessage">
        <label for="url">Link da Webhook</label>
        <input id="url" autocomplete=off v-model="webhookURL">

        <label for="message">Mensagem</label>
        <textarea id="message" autocomplete=off v-model="message"></textarea>
        <button class="btn btn-success" @click="sendMessage">Enviar Mensagem</button>
    </div>
`

exports = {pageTemplate}