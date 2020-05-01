/* eslint-disable no-console */
import IO from "./Monads/IO"
import Maybe from "./Monads/Maybe"
import State from "./Monads/State"

const log = x => IO(() => console.log(x))

const toUpperCase = str => str.toUpperCase()

IO.pure("hello world").map(toUpperCase).flatMap(log).unsafeRun() // "HELLO WORLD"

const square = x => x * x

Maybe(10).map(square).inspect() |> console.log // Just(100)

Maybe(null).map(square).inspect() |> console.log // Nothing(null)

State.get()
  .map(x => x + 2)
  .map(x => x + 2)
  .runState(2) |> console.log
