//Задание №1
function concat(first: string, second: string): string{
    return first + second;
}

//Задание №2
interface IHomeTask{
    howIdoIt: string,
    simeArray: any[],
    withData?: IHomeTask[],
}

let myHomeTask: IHomeTask = {
    howIdoIt: "I Do It Well",
    simeArray: ["string one", "string two", 42],
    withData: [{howIdoIt: "I Do It Well", simeArray: ["string one", 23]}],
}
//Задание №3
interface MyArray<T>{
    [N: number]: T;
    reduce<T>(reducer: () => T): T;
}