export function getSensitiveDataClasses(path, regexToSensitiveData) {
    return regexToSensitiveData
        .filter(([pathRegex, sensitiveData]) => {
            return path.match(pathRegex);
        })
        .map(([pathRegex, sensitiveData]) => sensitiveData)
        .flat();
}

export function getTotalSenstiveData(path, regexToNumSensitiveData) {
    return regexToNumSensitiveData
        .filter(([pathRegex, total]) => {
            return path.match(pathRegex);
        })
        .map(([pathRegex, total]) => total)
        .reduce((a, b) => a + b, 0);
}
