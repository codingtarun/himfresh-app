import { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = "Mobi | Page not found";
  });
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold text-secondary">404</h1>
        <p class="fs-4 text-muted">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <a href="/" class="btn btn-primary">
          Go Back Home
        </a>
      </div>
    </div>
  );
};
