import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TreeViewComponent } from "./components/tree-view/tree-view.component";

@NgModule({
  declarations: [TreeViewComponent],
  imports:[CommonModule, FormsModule],
  exports:[TreeViewComponent]
  
})

export class TreeViewModule {}