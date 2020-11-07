import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'editor-grid-button',
    templateUrl: 'editor-grid-button.component.html',
    styleUrls: ['editor-grid-button.component.css']
})
export class EditorGridButtonComponent {
  public isGridShown = true;
  public zoomFactor = 1.0;

  public showGrid(): void {
    this.isGridShown = true;
  }

  public hideGrid(): void {
    this.isGridShown = false;
  }

  public zoomIn(): void {
    if(this.zoomFactor > 4||this.zoomFactor == 4){
      this.zoomFactor = this.zoomFactor / 1.1;
    }
      else{
        this.zoomFactor = this.zoomFactor * 1.1;
    }
  }

  public zoomOut(): void {
    if(this.zoomFactor < 0.4||this.zoomFactor == 0.4){
      this.zoomFactor = this.zoomFactor * 1.1;
    }
      else{
        this.zoomFactor = this.zoomFactor / 1.1;
      }
  }

  public resetZoom(): void {
    this.zoomFactor = 1.0;
  }

  public getBackgroundSize(): string {
    return (150 * this.zoomFactor) + 'px';
  }

}
