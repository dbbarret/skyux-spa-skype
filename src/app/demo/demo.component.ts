import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'my-demo',
    templateUrl: 'demo.component.html'
})
export class MyDemoComponent {
    @Input()
    public message: string;
}
