import type { FC } from "react";
import AnchorButton from "~/components/button/anchor-button";
import StatusMessage from "~/components/status-message";
import styles from "~/styles/pages/not-found.module.scss";

const BadRequest: FC = () => (
  <StatusMessage code={400} message="Bad Request">
    <p>Page is inaccessible.</p>
    <p>Please wait a little for implementation.</p>
    <p>
      <AnchorButton
        variant="normal"
        href="/portal"
        isSameOrigin
        boxStyles={styles["enshita-notfound-button"]}
      >
        top
      </AnchorButton>
    </p>
  </StatusMessage>
);

export { BadRequest };
