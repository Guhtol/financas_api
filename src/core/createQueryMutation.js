import { has } from 'ramda'
export const createQueryMutation = (name, obj, tc, midleaware) => {
    let result = {}
    for (const item in obj) {
        if (has(item, midleaware)) {
            result[`${name}${item}`] = tc.getResolver(
                obj[item],
                midleaware[item]
            )
            continue
        }

        result[`${name}${item}`] = tc.getResolver(obj[item])
    }

    return result
}
