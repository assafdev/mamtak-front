import { Component, OnInit } from '@angular/core';
import { TreeNode, MenuItem, Message } from 'primeng/primeng';
import { NodeService } from './nodeservice.service';
@Component ({
    selector: 'app-treetable',
    templateUrl: './accounts-treetable.component.html',
    providers: [NodeService]
})

export class AccountsTreeTableComponent implements OnInit {

    files: TreeNode[];
    selectedFiles: TreeNode[];
    msgs: Message[];
    items: MenuItem[];

        constructor(private nodeService: NodeService) {
        }

        ngOnInit() {
            this.nodeService.getFileSystem().then(files => this.files = files);

            this.items = [
                {label: 'View', icon: 'fa-search', command: (event) => this.viewNode(this.selectedFiles[0])},
                {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFiles[0])}
            ];
        }

        nodeSelect(event) {
            this.msgs = [];
            this.msgs.push({severity: 'info', summary: 'Node Selected ' + this.selectedFiles[0].data.adminName
            , detail: event.node.data.name});
        }
        nodeUnselect(event) {
            this.msgs = [];
            this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.data.name});
        }

    viewNode(node: TreeNode) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: node.data.name});
    }

    deleteNode(node: TreeNode) {
        node.parent.children = node.parent.children.filter( n => n.data !== node.data);
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Deleted', detail: node.data.name});
    }
}

