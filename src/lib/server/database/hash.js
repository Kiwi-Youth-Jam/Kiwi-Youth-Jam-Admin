// @ts-nocheck
import bcrypt from "bcrypt";

import { SALT_ROUNDS } from "$app/env/public";

export class BcryptCache {
    constructor(string, hash) {
        this.string = string;
        this.hash = hash;
    }
}

export class BcryptManager {
    constructor() {
        this.cache = [];
    }

    getCache() {
        return this.cache;
    }

    async hash(string) {
        return await bcrypt.hash(string, Number(SALT_ROUNDS));
    }

    async compareHashes(string, hash) {
        for (let cache_instance of this.cache)
            if (cache_instance.string == string && cache_instance.hash == hash)
                return true;

        let result = await bcrypt.compare(string, hash);

        if (result)
            this.cache.push(new BcryptCache(string, hash));

        return result;
    }
}