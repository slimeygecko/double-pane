import { Component } from '@angular/core';

const defaultPane = {
  type: 'letters'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  panes = [ defaultPane ];
  isSinglePane = true;
  isOverlayOpen = true;

  onStart = function() {
    this.isOverlayOpen = false;
  };

  onSelectPanes = function(value) {
    const isSingle = value === 'single';

    this.isSinglePane = isSingle;

    this.panes = isSingle ?
      [ defaultPane ] :
      [
        defaultPane,
        defaultPane
      ];
  };
}
