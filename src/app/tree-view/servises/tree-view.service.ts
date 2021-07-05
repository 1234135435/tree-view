import { Injectable } from "@angular/core";
import { TreeNode } from "../interfaces/node.interface";

@Injectable({
  providedIn: 'root'
})
export class TreeViewService {
  private nodes:TreeNode[] = [
    {id: 1, parentId: null, name: 'Редактировать пользователя 1', checked: true},
    {id: 2, parentId: 1, name: 'Редактировать пользователя 2', checked: true},
    {id: 3, parentId: null, name: 'Редактировать пользователя 3', checked: true},
    {id: 4, parentId: 2, name: 'Редактировать пользователя 4', checked: true},
    {id: 5, parentId: 2, name: 'Редактировать пользователя 5', checked: true},
    {id: 6, parentId: 1, name: 'Редактировать пользователя 6', checked: true},
    {id: 7, parentId: null, name: 'Редактировать пользователя 7', checked: true},
    {id: 8, parentId: 7, name: 'Редактировать пользователя 8', checked: true},
    {id: 9, parentId: 7, name: 'Редактировать пользователя 9', checked: true},
    {id: 10, parentId: 3, name: 'Редактировать пользователя 10', checked: true}
  ]
  nodeTree = this.convertTree(this.nodes)

  private convertTree(arr: TreeNode[]):TreeNode[] {
    const map = new Map(arr.map(elem => [elem.id, elem]))
    for(let elem of map.values()) {
      if(!map.has(elem && elem['parentId'] as number)){ continue }
      const parentId = map.get(elem['parentId'] as number) as TreeNode
      parentId['children'] = [...parentId['children'] ?? [], elem]
    }
    return [...map.values()].filter(elem => !elem['parentId']) as TreeNode[];
  }
}