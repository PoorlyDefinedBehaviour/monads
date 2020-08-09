import { curry } from "ramda"

// fmap :: Functor f => (a -> b) -> f a -> f b
export const fmap = curry((f, functor) => functor.map(f))
