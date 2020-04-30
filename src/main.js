/* eslint-disable no-console */
import IO from "./Monads/IO"
import Maybe from "./Monads/Maybe"

const log = x => IO(() => console.log(x))

const toUpperCase = str => str.toUpperCase()

IO.pure("hello world").map(toUpperCase).flatMap(log).unsafeRun() // "HELLO WORLD"

const square = x => x * x

Maybe(10).map(square).inspect() |> console.log // Just(100)

Maybe(null).map(square).inspect() |> console.log // Nothing(null)
