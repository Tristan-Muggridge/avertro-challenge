
import { ILocalStorage } from "../types";

class LocalStorage implements ILocalStorage {
    get<T>(key:string): T | null {
                
        const value = localStorage.getItem(key);
        return value
            ? JSON.parse(value) as T
            : null;
    }

    set<T>(key:string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    delete(key:string):void {
        localStorage.removeItem(key);
    }

    clear():void {
        localStorage.clear();
    }

    private static instance: LocalStorage;
    private constructor() {}
    public static getInstance(): LocalStorage {
        if (!LocalStorage.instance) {
            LocalStorage.instance = new LocalStorage();
        }
        return LocalStorage.instance;
    }
}

export default LocalStorage;