class BotCommand extends BotEvent{
    constructor(name: string, description: string, action: Function){
        super(name, description, action); 
    }
}