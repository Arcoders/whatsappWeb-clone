'use strict'

const Message = use('App/Models/Message')

class MessageController {

    async send({ request, auth, response }) {

        const message = await Message.send(request, auth)

        response.json(message)
    }

    async messages ({ params, response }) {
        
        const message = await Message.getMessages(params)
        
        response.json(message)

    }

    async typing({ request, auth}) {

        await Message.typing(request, auth)

    }

}

module.exports = MessageController
