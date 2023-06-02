import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Unexpected error</h1>
      <p>Please return to the main page.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}