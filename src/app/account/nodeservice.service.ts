import { TreeNode } from 'primeng/primeng';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Component, Input } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()
export class NodeService {


    constructor(private http: Http) {
    }

    public getFileSystem(): Promise<TreeNode[]> {
                return this.http.get('assets/filesystem.json')
                            .toPromise()
                            .then(res => <TreeNode[]> res.json().data);
            }

}


