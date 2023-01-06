export interface IService<T> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[] | null>;
    create(t: T): Promise<T>;
    delete(id: number): Promise<boolean | number>;
    update(t: T, id: number): Promise<boolean | number>;
}

export interface IServiceAuth<T, D> {
    login(t: T): Promise<T>;
    logout(t: T): Promise<T>;
    verifToken(t: D): Promise<D>;
}