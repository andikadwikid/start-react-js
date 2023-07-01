const Input = ({ type = "text", placeholder, name }) => {
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
      name={name}
      id={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
