class BotEvent {
    private _eventName!: string;
    private _eventDescription!: string;
    private _eventFunction!: Function;

    constructor(name: string, description: string, eventFunction: Function){
        this._eventName = name;
        this._eventDescription = description;
        this._eventFunction = eventFunction;
    }

    get eventName() : string{
        return this._eventName;        
    }

    get eventDescription() : string{
        return this._eventDescription;
    }

    get eventFunction() : Function{
        return this._eventFunction;
    }

    set eventName(eventName: string){
        this._eventName = eventName;
    }

    set eventDescription(eventDescription: string){
        this._eventDescription = eventDescription;
    }

    set eventFunction(eventFunction: Function){
        this._eventFunction = eventFunction;
    }
}

module.exports = BotEvent;