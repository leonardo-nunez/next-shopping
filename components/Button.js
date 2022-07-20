const Button = ({ className, style, onClick, value, icon }) => {
  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={onClick}
      value={value}
    >
      {icon}
    </button>
  );
};

export default Button;
