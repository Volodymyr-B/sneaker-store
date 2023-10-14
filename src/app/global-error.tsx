"use client";

import { AppButton } from "@/components/UI/app-button";

interface GlobalErrorProps {
  reset: () => void;
  error: Error & { digest?: string };
}

export default function GlobalError({ reset, error }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <main>
          <div className="w-screen h-screen flex flex-col gap-9 justify-center items-center">
            <h3>Something went wrong! ☹️</h3>
            <AppButton onClick={reset}>Try again</AppButton>
          </div>
        </main>
      </body>
    </html>
  );
}
