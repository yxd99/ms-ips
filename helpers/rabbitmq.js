class Rabbit {
    constructor(config){
        this.host = config.host;
        this.port = config.port;
        this.exchange = config.exchange;
        this.typeExchange = config.typeExchange;
        this.queue = config.queue;
        this.setup = config.setup;
        this.amqp = require('amqplib/callback_api');
    }

    connect(){
        this.amqp.connect(this.host, (function(errorConnection, connection){
            if(errorConnection) throw errorConnection;

            connection.createChannel((function(errorChannel, channel){
                if(errorChannel) throw errorChannel;

                channel.assertExchange(this.exchange, this.typeExchange, this.config.exchange);


            }).bind(this));
        }).bind(this));
    }

    sendMessage(message){

    }
}

module.exports = Rabbit;