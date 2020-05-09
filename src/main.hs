module Main where 

import Prelude hiding (Maybe (..))

data Maybe a = Nothing | Just a deriving (Show)

instance Functor Maybe where
  fmap f (Just x) = Just (f x)
  fmap _ Nothing = Nothing

instance Applicative Maybe where
  pure = return
  (Just f) <*> (Just x) = Just (f x)

instance Monad Maybe where 
  Just x >>= f = f x
  Nothing >>= _ = Nothing
  return x = Just x

double :: Int -> Int
double x = x * 2

main = do 
  print (double <$> Just 10)