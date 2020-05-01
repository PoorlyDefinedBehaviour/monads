const Identity = x => ({
  // map :: Functor f => f a ~> (a -> b) -> f b
  map: f => x |> f |> Identity,
  // flatMap :: Functor f => f a ~> (a -> f b) -> f b
  flatMap: f => x |> f,
  // ap :: Functor f => f (a -> b) ~> f a -> f b
  ap: functor => functor.map(x),
  // inspect :: Identity i => i a ~> () -> String
  inspect: () => `Identity(${x})`,
})

// pure :: Identity i => i a ~> b -> i b
Identity.pure = Identity

export default Identity
