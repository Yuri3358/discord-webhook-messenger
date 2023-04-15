const pageTemplate = `
    <header>
        <h1>Discord Webhook Messenger</h1>
        <a target="_blank" href="https://github.com/Yuri3358" id="creatormark">Made by Yuri</a>  
    </header>

    <div id="content-box" @keyup.enter="sendMessage">
        <label for="url">Link da Webhook</label>
        <input id="url" autocomplete=off v-model="webhookURL">

        <div id="embed-input" v-show="showEmbed">
            <label for="embed-title">Título</label>
            <input id="embed-title" v-model="embedTitle">
        </div>

        <label for="message">Mensagem</label>
        <textarea id="message" autocomplete=off v-model="message"></textarea>
        
        <label class="form-check-label" for="form-check-input">Embeds</label>
        <input class="form-check-input" type="checkbox" v-model="this.showEmbed">

        <label class="form-check-label" for="form-check-input">Modo Eval</label>
        <input class="form-check-input" type="checkbox" v-model="evalExpression">
        <button class="btn btn-success" @click="sendMessage">Enviar Mensagem</button>
    </div>
`

exports = {pageTemplate}