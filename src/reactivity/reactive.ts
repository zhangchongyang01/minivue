import { mutableHandler, readonlyHandlers } from './baseHandlers';
export const enum ReactiveFlags {
  IS_REACTIVE = "_v_isReactive",
  IS_READONLY = "_v_isReadonly"
}

export function reactive(raw){
  return createActiveObject(raw,mutableHandler)
}

export function readonly(raw){
  return createActiveObject(raw,readonlyHandlers);
}

export function isReactive (value) {
  return !!value[ReactiveFlags.IS_REACTIVE];
}

export function isReadonly (value) {
  return !!value[ReactiveFlags.IS_READONLY]
}

function createActiveObject(raw: any, baseHandlers){
  return new Proxy(raw,baseHandlers);
}
