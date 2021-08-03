import fs from 'fs';
import { Directory } from './directory';

export abstract class SystemResourcePath {
    public resource_name: String;
    public resource_location: Directory;
    public resource_status?: fs.Stats;
    constructor(resource_name: String, resource_location: Directory, resource_status?: fs.Stats) {
        this.resource_name = resource_name;
        this.resource_location = resource_location;
        this.resource_status = resource_status;
    }

}