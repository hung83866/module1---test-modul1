class Animal{
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(newName){
        this.name = newName;
    }

    setWeight(newWeight){
        this.weight = newWeight;
    }

    getName(){
        return this.name;
    }

    getWeight(){
        return this.weight;
    }

    tostring(){
        return 'name : '+this.name +','+'weight :'+this.weight;
    }
}