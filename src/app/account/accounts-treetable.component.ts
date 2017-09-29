import { Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import { TreeNode, ButtonModule ,MenuItem, Message, InputTextModule } from 'primeng/primeng';
import { NodeService } from './nodeservice.service';

@Component ({
    selector: 'app-treetable',
    templateUrl: './accounts-treetable.component.html',
    providers: [NodeService]
})

export class AccountsTreeTableComponent implements OnInit {

    addClicked: boolean = false;
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
                {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFiles[0])},
                {label: 'Add',  command: (event) => this.addNode()}
            ];
        }

        nodeSelect(event) {
            this.msgs = [];
            this.msgs.push({severity: 'info',
            summary: 'Node Selected ' + this.selectedFiles[0].data.adminName
            , detail: event.node.data.name});
            if (this.selectedFiles.length === 2) {
                this.items[2] = {label: 'Merge', icon: 'fa-plus',
                 command: (e) => this.mergeNodes(this.selectedFiles[0], this.selectedFiles[1])};
            } else {
                this.items[2] = null;
            }
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

    mergeNodes(nodeFirst: TreeNode, nodeSecond: TreeNode) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'TTT Node 1:' +
                nodeFirst.data.adminName + 'Node 2:' + nodeSecond.data.adminName,
                 detail: nodeSecond.data.name});

        const newNode: TreeNode = {
            data: {
                adminName: 'TEST',
                accountArea: 'TEST2',
            },
            children: [nodeFirst, nodeSecond
            ]
        };
        nodeFirst.parent = newNode;
        nodeSecond.parent = newNode;
        this.files.push(newNode);
    }

    addClickedEvent(){
        this.addClicked = !this.addClicked;
    }

    addNode(){

        this.files.push(this.files[0]);
        this.msgs = [];
    }

    add(accountArea: string, adminName: string,
      minCreditValue: number, maxCreditValue: number, moneyChannel: number,
       otherNotes: string){
           const newNode: TreeNode ={
               data: {
                   id : 100,
                   accountArea,
                   adminName,
                   minCreditValue,
                   maxCreditValue,
                   moneyChannel,
                   otherNotes
               }
           }
            this.files.push(newNode);
           this.addClicked = false;
        }
    
}

