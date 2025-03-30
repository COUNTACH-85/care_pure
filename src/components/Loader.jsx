// const Loader = () => {
//     return (
//         <div className="flex justify-center items-center mt-4">
//             <div className="animate-spin h-8 w-8 border-4 border-green-600 border-t-transparent rounded-full"></div>
//         </div>
//     );
// };

// export default Loader;

import { motion } from "framer-motion";

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-6">
            {/* Rotating Spinner */}
            <motion.div 
                className="h-12 w-12 border-4 border-green-600 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            
            {/* Pulsing Dots */}
            <div className="flex space-x-2 mt-3">
                <motion.div 
                    className="h-3 w-3 bg-green-600 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                />
                <motion.div 
                    className="h-3 w-3 bg-green-600 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.div 
                    className="h-3 w-3 bg-green-600 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.4 }}
                />
            </div>

            {/* Loading Text */}
            <motion.p 
                className="text-green-700 font-medium mt-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                Generating Diet Plan...
            </motion.p>
        </div>
    );
};

export default Loader;
