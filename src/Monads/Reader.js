const Reader = f => ({
  f,
  // map :: Reader r => r e a ~> (a -> b) -> r e b
  map: g => Reader(env => env |> f |> g),
  // flatMap :: Reader r => r e a ~> (a -> r e b) -> r e b
  flatMap: g => Reader(env => g(f(env)).run(env)),
  // run :: Reader r => r e a ~> e -> a
  run: env => f(env),
})

export default Reader
