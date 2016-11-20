export function isNullOrUndefined(object: any): boolean {
    return typeof object === "undefined" || object === null;
}

export function shallowCopy<T>(fromObject: T, toObject?: any): T {
    if (isNullOrUndefined(fromObject) || typeof fromObject !== "object") {
        throw `Argument fromObject must be of type object. Its type is '${typeof fromObject}'.`;
    }

    if (isNullOrUndefined(toObject)) {
        toObject = {};
    }

    if (typeof toObject !== "object") {
        throw `Argument fromObject must be of type object. Its type is '${typeof toObject}'.`;
    }

    for (const prop in fromObject) {
        toObject[prop] = fromObject[prop];
    }
    return toObject;
}