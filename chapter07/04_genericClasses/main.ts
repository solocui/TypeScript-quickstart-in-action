class Friend {
    constructor(public firstName: string) { }
}
interface IRepository<T> {
    getAll(): T[];
    insert(item: T): void;
}

class GenericRepo<T> implements IRepository<T> {
    private _items = new Array<T>();
    getAll() {
        return this._items;
    }
    insert(item: T): void {
        this._items.push(item);
    }
}
let numberRepo = new GenericRepo<number>();

let repo = new GenericRepo<Friend>();
repo.insert(new Friend("Thomas"));
repo.insert(new Friend("Julia"));
repo.insert(new Friend("Anna"));
for (let friend of repo.getAll()) {
    console.log(friend.firstName);
}