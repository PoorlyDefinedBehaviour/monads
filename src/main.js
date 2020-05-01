/* eslint-disable no-console */
import IO from "./Monads/IO"
import Maybe from "./Monads/Maybe"
import State from "./Monads/State"
import Identity from "./Monads/Identity"
import Either from "./Monads/Either"

console.log("--- IO ---")

const log = x => IO(() => console.log(x))

const toUpperCase = str => str.toUpperCase()

IO.pure("hello world").map(toUpperCase).flatMap(log).unsafeRun() // "HELLO WORLD"

console.log("--- Maybe ---")

const square = x => x * x

Maybe(10).map(square).inspect() |> console.log // Just(100)

Maybe(null).map(square).inspect() |> console.log // Nothing(null)

console.log("--- State ---")

State.get()
  .map(x => x + 2)
  .map(x => x + 2)
  .runState(2) |> console.log

console.log("--- identity ---")

const double = x => x * 2
Identity.pure(10).map(double).inspect() |> console.log

console.log("--- Either ---")

Either("hello world")
  .map(str => str.split(""))
  .map(str => str.join(""))
  .fold(
    () => "oops",
    x => x
  ) |> console.log

Either.Left("hello world")
  .map(str => str.split(""))
  .map(str => str.join(""))
  .fold(
    () => "oops",
    x => x
  ) |> console.log
