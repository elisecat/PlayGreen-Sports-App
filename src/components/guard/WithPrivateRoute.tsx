import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebase_app from '../../configFirebase';

interface WithPrivateRouteProps {
  children: ReactNode;
}

const WithPrivateRoute: React.FC<WithPrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const auth = getAuth(firebase_app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/auth/login');
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  return <>{children}</>;
};

export default WithPrivateRoute;