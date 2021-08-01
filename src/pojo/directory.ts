class Directory{
    private _relative_path : string; 
    private _absolute_path : string; 

    constructor(relative_path: string, absolute_path: string = ""){
        this._relative_path = relative_path;
        this._absolute_path = absolute_path;
    }

    get relative_path(): string{
        return this._relative_path; 
    }

    set relative_path(relative_path: string){
        this._relative_path = relative_path; 
    }

    get absolute_path(): string{
        return this._absolute_path;
    }

    set absolute_path(absolute_path: string){
        this._absolute_path = absolute_path;
    }

}