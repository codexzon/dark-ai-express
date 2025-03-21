
import React, { useState } from "react";
import { signOutUser } from "@/lib/authService";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Logout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOutUser();
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleLogout} 
      variant="outline" 
      className="border-primary/30 hover:border-primary/60"
      disabled={isLoading}
    >
      {isLoading ? "Signing Out..." : "Sign Out"}
    </Button>
  );
};

export default Logout;
