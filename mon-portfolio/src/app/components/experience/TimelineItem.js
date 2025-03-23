// TimelineItem.js
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function TimelineItem({ align, company, position, period, location, description, tech = [] }) {
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });
  
  const variants = {
    hidden: { 
      opacity: 0, 
      x: align === 'left' ? -50 : 50,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: "100%",
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <div 
      ref={itemRef}
      className={`flex items-center ${align === 'left' ? 'flex-row-reverse' : 'flex-row'} relative mb-12`}
    >
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px">
        <motion.div 
          className="w-full bg-gradient-to-b from-orange-300 to-blue-500"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={lineVariants}
        />
      </div>
      
      {/* Dot on timeline */}
      <motion.div 
        className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-orange-300 border-4 border-[#0a192f] z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      />
      
      {/* Content */}
      <motion.div 
        className={`w-full md:w-1/2 ${align === 'left' ? 'md:pr-12 text-right' : 'md:pl-12'}`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className={`bg-[#112240] p-6 rounded-lg shadow-xl border-l-4 ${isHovered ? 'border-orange-300' : 'border-blue-500'} transform transition-all duration-300 ${isHovered ? 'translate-y-[-5px]' : ''}`}
        >
          <motion.h3 
            className="text-xl font-bold text-white"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            {position}
          </motion.h3>
          
          <motion.div 
            className="flex items-center justify-start gap-2 my-2"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <span className="text-orange-300 font-medium">{company}</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-400">{location}</span>
          </motion.div>
          
          <motion.span 
            className="inline-block bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs mb-4 font-mono"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            {period}
          </motion.span>
          
          <motion.ul 
            className="space-y-2 text-gray-300"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            {description.map((item, index) => (
              <motion.li 
                key={index} 
                className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-2 before:rounded-full before:bg-blue-500 before:transform before:translate-y-[-50%]"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
          
          {tech && tech.length > 0 && (
            <motion.div 
              className="mt-4 flex flex-wrap gap-2"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              {tech.map((item, index) => (
                <motion.span 
                  key={index} 
                  className="px-2 py-1 bg-[#172a4e] text-blue-300 rounded text-xs font-mono relative overflow-hidden group"
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-20"></span>
                </motion.span>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}