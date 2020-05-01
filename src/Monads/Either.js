const Right = x => ({
  // map :: Functor f => f a ~> (a -> b) -> f b
  map: f => x |> f |> Right,
  // flatMap :: Functor f => f a ~> (a -> f b) -> f b
  flatMap: f => x |> f,
  // ap :: Functor f => f (a -> b) ~> f a -> f b
  ap: functor => functor.map(x),
  // fold :: Right r => r b ~> (a -> c) -> (b -> c) -> c
  fold: (_f, g) => x |> g,
  // inspect :: Right r => r a ~> () -> String
  inspect: () => `Right(${x})`,
})

const Left = x => ({
  // map :: Functor f => f a ~> (a -> b) -> f a
  map: _f => x |> Left,
  // flatMap :: Functor f => f a ~> (a -> f b) -> f a
  flatMap: _f => x |> Left,
  // ap :: Functor f => f (a -> b) ~> f a -> f (a -> b)
  ap: _functor => x |> Left,
  // fold :: Left l => l a ~> (a -> c) -> (b -> c) -> c
  fold: (f, _g) => x |> f,
  // inspect :: Left l => l a ~> () -> String
  inspect: () => `Left(${x})`,
})

const Either = Right
Either.Right = Right
Either.Left = Left
Either.pure = Either

export default Either
