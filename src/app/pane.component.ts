import { Component, Input } from '@angular/core';

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min)) + min;
  }

const types = {
    keys: {
        id: 'keys',
        name: 'Keys',
        min: 0,
        max: 10,
        values: ['A', 'Ab', 'C#', 'E#']
    },
    letters: {
        id: 'letters',
        name: 'Alphabet',
        min: 0,
        max: 25,
        values: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
        'X', 'Y', 'Z']
    },
    numbers: {
        id: 'numbers',
        name: 'Numbers',
        min: 0,
        max: 100,
        values: []
    }
};

interface Type {
    name: string;
    id: string;
    min: number;
    max: number;
    values: Array<any>;
}

@Component({
  selector: 'app-pane',
  templateUrl: './pane.component.html',
  styleUrls: ['./pane.component.css']
})

export class PaneComponent {
    title = 'Some New Pane';
    displayValue = '';
    displayTypes: Array<Type> = [];
    @Input() pane: {
        type: 'letters';
    };
    constructor() {
        this.displayTypes = Object.values(types);
    }

    onClick(nextType: string) {
        const t = types[nextType] as Type;
        const index = getRandomInt(t.min, t.max);
        this.displayValue = t.id === 'numbers' ? index : t.values[index];
    }
}
