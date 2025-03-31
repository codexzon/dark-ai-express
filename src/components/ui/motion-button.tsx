
import React from 'react';
import { motion } from 'framer-motion';
import { Button, ButtonProps } from '@/components/ui/button';

interface MotionButtonProps extends ButtonProps {
  whileHover?: any;
  whileTap?: any;
  initial?: any;
  animate?: any;
  transition?: any;
}

const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ children, className, whileHover, whileTap, initial, animate, transition, ...props }, ref) => {
    return (
      <motion.div
        whileHover={whileHover}
        whileTap={whileTap}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        <Button ref={ref} className={className} {...props}>
          {children}
        </Button>
      </motion.div>
    );
  }
);

MotionButton.displayName = 'MotionButton';

export { MotionButton };
