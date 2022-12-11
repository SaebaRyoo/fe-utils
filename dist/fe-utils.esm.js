function sum(...args) {
    return args.reduce((prev, total) => total + prev, 0);
}

export { sum };
