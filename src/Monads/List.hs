data List a = Nil | Cons a (List a) deriving (Show)

append :: List a -> List a -> List a
append xs Nil = xs
append Nil ys = ys
append (Cons x xs) ys = Cons x (append xs ys)

instance Functor List where
  -- fmap :: (a -> b) -> List a -> List b
  fmap _ Nil = Nil
  fmap f (Cons x xs) = Cons (f x) (fmap f xs)

instance Applicative List where
  -- pure :: a -> List a
  pure x = Cons x Nil
  -- (<*>) :: List (a -> b) -> List a -> List b
  _ <*> Nil = Nil
  Nil <*> _ = Nil
  (Cons f fs) <*> xs = (fmap f xs) `append` (fs <*> xs)

instance Monad List where
  -- return :: a -> List a
  return = pure
  (Cons x Nil) >>= f = f x
  (Cons x xs) >>= f = (f x) `append` (xs >>= f)

square :: Int -> Int
square x = x * x

main = do
  let applicative = Cons (\x -> x * 2) Nil

  let list = Cons 1 (Cons 2 (Cons 3 (Cons 4 (Cons 5 Nil))))

  print (fmap square list)

  print (applicative <*> list)

  print (list >>= (\x -> Cons (x + 1) Nil))

