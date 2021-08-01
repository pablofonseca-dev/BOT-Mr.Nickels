class File{
    private _name : string;
    private _extension : string; 
    private _location: Directory | undefined;
    private _status: string | undefined; 

    constructor(name: string, extension: string, location?: Directory, status?: string){
        this._name = name; 
        this._extension = extension;
        this._location = location; 
        this._status = status; 
    }

    get name(): string{
        return this._name; 
    }

    get extension(): string{
        return this._extension;
    }

    get location(): Directory | undefined{
        return this._location;
    }

    get status(): string | undefined{
        return this._status; 
    }

    set name(name: string){
        this._name = name;
    }

    set extension(extension: string){
        this._extension = extension;
    }

    set location(location: Directory | undefined){
        this._location =  location;
    }

    set status(status: string | undefined){
        this._status = status; 
    }
}