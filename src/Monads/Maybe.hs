import Prelude hiding (head, Maybe (..))

data Maybe a = Nothing | Just a deriving (Show)

instance Functor Maybe where
  fmap f (Just x) = Just (f x)
  fmap _ Nothing = Nothing

instance Applicative Maybe where
  pure x = Just x
  (Just f) <*> (Just x) = Just (f x)
  Nothing <*> _ = Nothing
  _ <*> Nothing = Nothing

instance Monad Maybe where 
  Just x >>= f = f x
  Nothing >>= _ = Nothing
  return = pure

head :: [a] -> Maybe a
head (x : _) = Just x
head [] = Nothing

double :: Int -> Int
double x = x * 2

main :: IO ()
main = do 
  print (double . double <$> head [1, 2, 3])
  print (double . double <$> head [])