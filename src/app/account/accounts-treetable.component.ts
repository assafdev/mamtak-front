import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { NodeService } from './nodeservice.service';

@Component ({
    selector: 'app-treetable',
    templateUrl: './accounts-treetable.component.html',
    providers: [NodeService]
})

export class AccountsTreeTableComponent implements OnInit {

    files: TreeNode[];
    selectedFiles: TreeNode[];

        constructor(private nodeService: NodeService) {
        }

        ngOnInit() {
            this.nodeService.getFileSystem().then(files => this.files = files);
        }

}

