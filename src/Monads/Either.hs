import Prelude hiding (Either(..))
import Data.Char

data Either a b = Left a | Right b deriving (Show)

instance Functor (Either e) where
  -- fmap :: Functor f => (a -> b) -> f a -> f b
  fmap f (Right x) = Right (f x)
  fmap _ (Left x) = Left x

instance Applicative (Either e) where
  pure = Right
  Left e <*> _ = Left e
  Right f <*> right = fmap f right

instance Monad (Either e) where
  Left e >>= _ = Left e 
  Right x >>= f = f x



main :: IO ()
main = do
  print (Right 2 :: Either () Int)

