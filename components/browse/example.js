import React from "react";
import { Box } from "@chakra-ui/core";
import { motion } from "framer-motion";

// 1. Create a custom motion component from Box
const MotionBox = motion.custom(Box);

// 2. You'll get access to `motion` and `chakra` props in `MotionBox`
function Example() {
    return (
        <MotionBox
            size="40px"
            bg="red.300"
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        />
    );
}

export default Example;
