import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";


@Component({
    selector: 'app-services',
    standalone: true,
    templateUrl: './services.component.html',
    styleUrl: './services.component.css',
    imports: [CardComponent]
})
export class ServicesComponent {

}
