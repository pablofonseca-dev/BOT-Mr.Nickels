import { SystemResourcePath } from "./system_resource";
import fs from 'fs';
import { Directory } from "./directory";

export class File extends SystemResourcePath {
    public file_extension: String;

    constructor(
        resource_name: String,
        resource_location: Directory,
        file_extension: String,
        resource_status?: fs.Stats) {

        super(resource_name, resource_location, resource_status);
        this.file_extension = file_extension;
    }
}