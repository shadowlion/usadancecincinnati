import React from "react";
import BaseNavigation from "./BaseNavigation";
import BaseFooter from "./BaseFooter";

const BaseLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <BaseNavigation />
      </header>
      <main className="flex-shrink-0">{children}</main>
      <footer className="mt-auto py-3 bg-light">
        <BaseFooter />
      </footer>
    </div>
  );
};

export default BaseLayout;
