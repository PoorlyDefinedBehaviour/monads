const State = state => ({
  // map :: State s => s a b ~> (b -> c) -> s a c
  map: f =>
    State(x => {
      const [a, newState] = state(x)
      return [f(a), newState]
    }),
  // flatMap :: state s => s a b ~> (b -> s a c) -> s a c
  flatMap: f =>
    State(x => {
      const [a, newState] = state(x)
      return f(a).runState(newState)
    }),
  // runState :: State s a => s a b ~> x -> s a c
  runState: x => state(x),
})

State.pure = x => State(s => [x, s])
State.get = () => State(s => [s, s])

export default State
