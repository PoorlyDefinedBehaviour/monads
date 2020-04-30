const IO = fn => ({
  // map :: Functor f => f a ~> (a -> b) -> f b
  map: f => IO(() => f(fn())),
  // flatMap :: Functor f => f a ~> (a -> f b) -> f b
  flatMap: f => f(fn()),
  // flatten: Functor f => f (f a) ~> f a
  flatten: fn,
  // unsafeRun :: IO t => t a ~> a
  unsafeRun: fn,
  // inspect :: () -> String
  inspect: () => `IO(${fn.name})`,
})

IO.pure = x => IO(() => x)

export default IO
