export const createQueryMutation = (name, obj, tc) => {
    let result = {}
    for (const item in obj) {
        result[`${name}${item}`] = tc.getResolver(obj[item])
    }

    return result
}
