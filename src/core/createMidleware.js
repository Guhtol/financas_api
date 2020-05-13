import { curry, has } from 'ramda'
import { createPromiseError } from './createPromiseError'

const middleware = (obj, resolve, source, args, context, info) => {
    let result = has('getProperty',obj) ? obj.getProperty(context) : {}
    
    if(has('has',obj) && !obj.has(result))  return  createPromiseError(obj.msg)
     
    if(has('notHas',obj) && !obj.notHas(result)) return createPromiseError(obj.msg)
 
    return resolve(source, args, context, info)
}

export const createMiddleware = curry(middleware)
