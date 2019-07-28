export class Hero {
    id: number;
    name: string;
    height: number;
    weight: number;
    power: number;

    constructor(id: number, name: string, height: number, weight: number, power: number){
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.power = power;
    }
}