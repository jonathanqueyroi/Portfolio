export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseClasses = "px-6 py-2 font-medium text-sm transition-all duration-300";
  
  const variants = {
    primary: "bg-white text-[#0a192f] hover:bg-opacity-90",
    outline: "border border-white text-white hover:bg-white hover:text-[#0a192f]",
    ghost: "text-white hover:bg-white hover:bg-opacity-10"
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}