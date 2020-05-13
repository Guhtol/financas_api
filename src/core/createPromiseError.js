import { compose } from 'ramda'

const createMsgError = (msg) => new Error(msg)

export const promiseError = (obj) => Promise.reject(obj)
export const createPromiseError = compose(promiseError, createMsgError)