export interface IRepository<T> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[] | null>;
    create(t: T): Promise<T>;
    delete(id: number): Promise<boolean | number>;
    update(t: T, id: number): Promise<boolean | number>;
}

export interface IRepositoryMail<T> {
    findByMail(t: string): Promise<T | null>;
}


export interface IRepositoryToken<T, D> {
    findAll(): Promise<T[] | null>;
    create(t: string, d: D): Promise<T>;
    delete(id: number): Promise<boolean | number>;
}