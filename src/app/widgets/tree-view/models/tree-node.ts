export interface TreeNode {
  name: string;
  showChildren: boolean;
  children: TreeNode[];
  icon?: string;
}
