import { Component } from '@angular/core';
import { TreeViewService } from './tree-view/servises/tree-view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public treeViewService: TreeViewService) {}
}
