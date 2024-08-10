function Unauthorized() {
  return (
    <div className="text-center">
      <p>You are not authorized to view this page</p>
      <p>Please log in with an authorized account</p>
      <a className="text-blue-600 underline" href="/">Go back</a>
    </div>
  );
}

export default Unauthorized;
