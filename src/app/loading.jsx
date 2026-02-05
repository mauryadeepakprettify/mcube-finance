const loading = () => {
  return (
    <div className="fixed inset-0 flex h-screen items-center justify-center">
      <span className="border-alpha/50 border-b-primary block h-[39px] w-[39px] animate-spin rounded-full border-2 border-b-3"></span>
    </div>
  );
};

export default loading;
