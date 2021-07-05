export interface TreeNode {
  id: number;
	name: string;
	children?: Array<TreeNode>;
	parentId: number | null;
  checked: boolean;
  indeterminate?: boolean;
}