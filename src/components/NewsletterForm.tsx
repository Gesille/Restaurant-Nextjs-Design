"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: send the address to your newsletter provider.
    setSubscribed(true);
  };

  if (subscribed) {
    return <p role="status">Thanks for subscribing!</p>;
  }

  return (
    <form className="subscribe-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control mb-2 text-center"
          placeholder="Enter email address"
          aria-label="Email address"
          autoComplete="email"
          required
        />
        <input type="submit" value="Subscribe" className="form-control submit px-3" />
      </div>
    </form>
  );
}
