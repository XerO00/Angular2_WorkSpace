export class FoodItem{

    constructor(
        public name: string,
        public group?:string,
        public description?:string,
        public servingSize?:string,
        public unit?:string,
        public calories?:string,
        public fat?:string,
        public protein?:string,
        public carbs?:string,
    ){}
}
