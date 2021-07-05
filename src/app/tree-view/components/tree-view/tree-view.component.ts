import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { TreeNode } from "../../interfaces/node.interface";
import { TreeViewService } from "../../servises/tree-view.service";

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})

export class TreeViewComponent implements OnInit {
  @Input() public nodes?: Array<TreeNode>;
  constructor(private treeViewService: TreeViewService, private cdr: ChangeDetectorRef) { }


  ngOnInit() {

  }
  public selectNode(node: TreeNode, value: boolean) {
    this.check(node, value)
    this.recursivellySetState(this.treeViewService.nodeTree, node);
    this.cdr.detectChanges();
  }

  private recursivellySetState(nodes: TreeNode[], node: TreeNode): any {
    for (let index = 0; index < nodes.length; index++) {
      const element = nodes[index];
      if (element.id === node.parentId) {
        this.setState(element);
        return true
      } else {
        const foundedNode = this.recursivellySetState(element.children || [], node);
        if (foundedNode) {
          this.setState(element);
          break;
        }
      }
    }
  }

  private setState(element: TreeNode){
    if (element.children?.every(x => x.checked)) {
      element.checked = true;
      element.indeterminate = false;
    } else if (element.children?.every(x => !x.checked) && element.children.every(x=>!x.indeterminate)) {
      element.checked = false
      element.indeterminate = false;
    } else {
      element.checked = false;
      element.indeterminate = true;
    }
  }

  private check(node: TreeNode, value: boolean) {
    node.checked = value;
    node.children?.forEach(x => this.check(x, value))
  }
}