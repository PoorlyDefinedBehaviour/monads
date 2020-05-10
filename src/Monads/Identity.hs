data Identity a = Identity a deriving (Show)

instance Functor Identity where
  -- fmap :: Identity i =>  (a -> b) -> i a -> i b
  fmap f (Identity x) = Identity (f x)
  -- (<$) :: Identity i => b -> i a -> i b
  (<$) = fmap . const

instance Applicative Identity where
  -- pure :: Identity i => a -> i a
  pure = Identity
  -- (<*>) :: Identity i => i (a -> b) -> i a -> i b
  (Identity f) <*> id = fmap f id
  -- (*>) :: Identity i => i a -> i b -> i b
  _ *> x = x
  -- (<*) :: Identity i => i a -> i b -> i a
  x <* _ = x

instance Monad Identity where
  -- return :: Identity i => a -> i a
  return = pure
  -- (>>=) :: Identity i => i a -> (a -> i b) -> i b
  (Identity x) >>= f = f x
  -- (>>) :: Identity i => i a -> i b -> i b
  x >> y = x >>= (\_ -> y)

double :: Int -> Int
double x = x * 2

foo :: Int -> Identity Int
foo x = (Identity . double) x

main = do
  print (20 <$ Identity 10)

  print (Identity (\x -> x * x) <*> Identity 3)

  print (Identity 10 <* Identity 20)

  print (Identity 10 *> Identity 20)

  print (Identity 50 >>= foo)

  print (Identity () >> Identity "hello world")