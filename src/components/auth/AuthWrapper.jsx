export const AuthWrapper = ({ headerText, children, className }) => {
  return (
    <div className={`flex justify-center items-center flex-col ${className}`}>
      <h2 className="scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tighter">
        Cinephilogy Auth
      </h2>
      <p className="scroll-m-20 pt-1 text-xl font-semibold tracking-widest">
        {headerText}
      </p>
      <div>{children}</div>
    </div>
  );
};
