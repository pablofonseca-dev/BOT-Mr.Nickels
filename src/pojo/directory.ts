export class Directory{
    public _relative_path : string; 
    public _absolute_path : string; 

    constructor(relative_path: string, absolute_path: string = ""){
        this._relative_path = relative_path;
        this._absolute_path = absolute_path;
    }
}