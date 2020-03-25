import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from "./models/tree-node";

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  @Input() treeData: TreeNode[];

  constructor() { }

  ngOnInit() {
  }

  toggleChild(node: TreeNode) {
    node.showChildren = !node.showChildren;
    this.getNodeIcon(node);
  }

  getNodeIcon(node: TreeNode): void {
    if(node.children != null) {
      node.showChildren ? node.icon = "ri-arrow-down-s-line" : node.icon = "ri-arrow-right-s-line";
    }
  }

  addNodeTo(node: TreeNode) {
    node.children.push({ name: "Node", children: [], icon: "ri-arrow-down-s-line", showChildren: false });
    node.showChildren = true;
    this.getNodeIcon(node);
  }

}
