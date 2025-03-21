
import React from 'react';
import Signup from '@/components/auth/Signup';
import Login from '@/components/auth/Login';
import Logout from '@/components/auth/Logout';
import { auth } from '@/lib/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

const Authentication = () => {
  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    return () => unsubscribe();
  }, []);

  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Authentication</h1>
      
      {user ? (
        <div className="max-w-md mx-auto space-y-6">
          <div className="p-6 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50">
            <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
            <p className="mb-4">You are logged in as: <span className="font-semibold">{user.email}</span></p>
            <Logout />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Login />
          <Signup />
        </div>
      )}
    </div>
  );
};

export default Authentication;
