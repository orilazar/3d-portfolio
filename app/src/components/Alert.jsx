const Alert = ({ type, text }) => {
  return (
    <div className="fixed top-10 left-0 right-0 flex justify-center items-center ">
      <div
        className={` rounded-xl px-2 py-2 ${
          type === "danger" ? "bg-red-500" : "bg-green-600"
        } items-center text-indigo-100 lg:rounded-full flex lg:inline-flex`}
        role="alert"
      >
        <p className="mr-2 text-left font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
