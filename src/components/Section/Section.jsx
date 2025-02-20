import React from "react";

function Section({ id, content, styles }) {
  return (
    <section id={`${id}`} className={styles}>
      {content}
    </section>
  );
}

export default Section;
