import { Component, OnInit } from '@angular/core';
import { TreeNode, MenuItem, Message , ButtonModule } from 'primeng/primeng';
import { NodeService } from './nodeservice.service';
@Component ({
    selector: 'app-treetable',
    templateUrl: './accounts-treetable.component.html',
    providers: [NodeService]
})

export class AccountsTreeTableComponent implements OnInit {
    addClicked = false;
    isEditable = false;
    files: TreeNode[];
    selectedFiles: TreeNode[];
    msgs: Message[];
    items: MenuItem[];

        constructor(private nodeService: NodeService) {
        }

        ngOnInit() {
            this.nodeService.getFileSystem().then(files => this.files = files);

            this.setUpContextMenu(false);
        }

        nodeSelect(event) {
            if (this.selectedFiles.length === 2 &&
             this.isMergeAllowed(this.selectedFiles[0], this.selectedFiles[1])) {

                this.setUpContextMenu(true);
            } else {
                this.setUpContextMenu(false);
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

    filterID(node: TreeNode, id: number) {
        return node.data.id !== id;
  }

  deleteNode(node: TreeNode) {
      const tempNodeName = node.data.name;
      if (node.parent != null) {
        node.parent.children = node.parent.children.filter( n => n.data !== node.data);
      } else {
        this.files = this.files.filter(a => this.filterID(a, node.data.id));
      }
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'Node Deleted', detail: tempNodeName});
  }

    mergeNodes(nodeFirst: TreeNode, nodeSecond: TreeNode) {

        const newNode: TreeNode = {
            data: {
                accountArea: this.combinedAreaName(nodeFirst.data.accountArea, nodeSecond.data.accountArea),
                adminName: nodeFirst.data.adminName,
                minCreditValue: Math.min(nodeFirst.data.minCreditValue, nodeSecond.data.minCreditValue),
                maxCreditValue: Math.max(nodeFirst.data.maxCreditValue, nodeSecond.data.maxCreditValue),
                moneyChannel: nodeFirst.data.moneyChannel,
                otherNotes: nodeFirst.data.otherNotes,
                level: nodeFirst.data.level
            },
            children: [nodeFirst, nodeSecond]
        };

        nodeFirst.parent = newNode;
        nodeFirst.data.level += 1;

        nodeSecond.parent = newNode;
        nodeSecond.data.level += 1;

        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'New:' + newNode.data.level + '\n' +
        'First:' + nodeFirst.data.level + '\n' +
        'Second:' + nodeSecond.data.level + '\n'
         , detail: nodeFirst.data.name});
         this.msgs.push({severity: 'info', summary: nodeFirst.parent + ' '
          , detail: nodeFirst.data.name});


            this.files.splice(this.files.indexOf(nodeFirst), 0, (newNode));
            this.files.splice(this.files.indexOf(nodeFirst), 1);
            this.files.splice(this.files.indexOf(nodeSecond), 1);

    }

    isMergeAllowed(nodeFirst: TreeNode, nodeSecond: TreeNode) {
            return nodeFirst.data.level === nodeSecond.data.level &&
             nodeFirst.parent === nodeSecond.parent;
    }
    setUpContextMenu(showMerge: boolean) {
        this.items = [
            {label: 'View', icon: 'fa-search', command: (event) => this.viewNode(this.selectedFiles[0])},
            {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFiles[0])},
            {label: 'Edit', icon: 'fa-edit', command: (event) => this.editNode(this.selectedFiles[0])}
        ];
        if (showMerge) {
            this.items.push ( {label: 'Merge', icon: 'fa-compress',
            command: (e) => this.mergeNodes(this.selectedFiles[0], this.selectedFiles[1])});
        }
    }

    combinedAreaName(firstName: string, secondName: string) {
        return firstName + ' ' + secondName;
    }

    addClickedEvent() {
        this.addClicked = !this.addClicked;
    }

    addNode() {
        this.files.push(this.files[0]);
        this.msgs = [];
    }

    add(accountArea: string, adminName: string,
      minCreditValue: number, maxCreditValue: number, moneyChannel: number,
       otherNotes: string) {
           const newNode: TreeNode = {
               data: {
                   id : 100,
                   accountArea,
                   adminName,
                   minCreditValue,
                   maxCreditValue,
                   moneyChannel,
                   otherNotes,
                   level: 0
               }
            };

            this.files.push(newNode);
            this.addClicked = false;
        }

        editNode(nodeFirst) {

        }
}

