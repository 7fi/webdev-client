// A tiny stand-in for react-redux: <ReduxProvider>, useSelector, and useDispatch.
// Redux itself doesn't depend on React; this file only connects a Redux store to Vue reactivity.
import type { Dispatch, Store } from '@reduxjs/toolkit'
import {
  defineComponent,
  inject,
  onScopeDispose,
  provide,
  shallowRef,
  type InjectionKey,
  type PropType,
  type Ref,
} from 'vue'

const StoreKey: InjectionKey<Store> = Symbol('ReduxStore')

// Like react-redux's <Provider store={store}>
export const ReduxProvider = defineComponent({
  name: 'ReduxProvider',
  props: {
    store: { type: Object as PropType<Store>, required: true },
  },
  setup(props, { slots }) {
    provide(StoreKey, props.store)
    return () => slots.default?.()
  },
})

function useStore<S>() {
  const store = inject(StoreKey, null)
  if (!store) {
    throw new Error('Redux hooks must be used inside ReduxProvider')
  }
  return store as Store<S>
}

// Like react-redux's useSelector, but returns a ref (use .value in script; templates unwrap it).
// The ref only changes when the selected value changes, so unrelated store updates don't re-render.
export function useSelector<S, R>(selector: (state: S) => R): Readonly<Ref<R>> {
  const store = useStore<S>()
  const selected = shallowRef(selector(store.getState()))
  const unsubscribe = store.subscribe(() => {
    const next = selector(store.getState())
    if (next !== selected.value) selected.value = next
  })
  onScopeDispose(unsubscribe)
  return selected
}

// Like react-redux's useDispatch
export function useDispatch<D extends Dispatch = Dispatch>() {
  return useStore().dispatch as D
}
