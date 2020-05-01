const isNullOrUndefined = x => x === null || x === undefined

const Maybe = x => (isNullOrUndefined(x) ? Maybe.Nothing(x) : Maybe.Just(x))

Maybe.Just = x => ({
  // map :: Functor f => f a ~> (a -> b) -> f b
  map: f => Maybe.Just(f(x)),
  // flatMap :: Functor f => f a ~> (a -> f b) -> f b
  flatMap: f => f(x),
  // flatten :: Functor f => f (f a) ~> f a
  flatten: () => x,
  // inspect :: Just j => j a ~> () -> String
  inspect: () => `Just(${x})`,
})

Maybe.Nothing = x => ({
  // map :: Functor f => f a ~> (a -> b) -> f a
  map: _f => Maybe.Nothing(x),
  // flatMap :: Functor f => f a ~> (a -> f b) -> f a
  flatMap: _f => Maybe.Nothing(x),
  // flatten :: Functor f => f (f a) ~> f a
  flatten: () => x,
  // inspect :: Nothing n => n a ~> () -> String
  inspect: () => `Nothing(${x})`,
})

export default Maybe
