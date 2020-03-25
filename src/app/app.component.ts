import { Component } from '@angular/core';
import {TreeNode} from "./widgets/tree-view/models/tree-node";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appMakerAngular';

  treedata: TreeNode[] = [
    { name: "Node 1", children: [], showChildren: false, icon: "ri-arrow-right-s-line" },
    { name: "Node 2", children: [
        { name: "Node 2.1", children: [], showChildren: false, icon: "ri-arrow-right-s-line" },
        { name: "Node 2.2", children: [
            { name: "Node 2.2.1", children: [], showChildren: false, icon: "ri-arrow-right-s-line" },
            { name: "Node 2.2.2", children: [], showChildren: false, icon: "ri-arrow-right-s-line" },
          ], showChildren: false, icon: "ri-arrow-right-s-line" },
      ], showChildren: false, icon: "ri-arrow-right-s-line" },
    { name: "Node 3", children: [], showChildren: false, icon: "ri-arrow-right-s-line" }
  ];
}
