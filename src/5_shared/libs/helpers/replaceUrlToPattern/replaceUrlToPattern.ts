// TODO: AddTests
const replaceUrlToPattern = (inputString: string) => {
    if (!inputString.includes('/')) {
        return inputString;
    }

    if (!inputString.endsWith('/')) {
        const parts = inputString.split('/');
        parts[parts.length - 1] = ':slug';
        return parts.join('/');
    }

    return inputString;
};

export {
    replaceUrlToPattern,
};
