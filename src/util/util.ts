export const prt = (obj: any) => {
    console.log(obj);
    return obj;
}

export const thenPrt = (promise: Promise<any>) => {
    promise.then((res) => {
        console.log(res);
    })
    return promise;
}