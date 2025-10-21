import Content from "../../components/content";
import Button from "../../components/buttonOnClick";
import { useState } from "react";

export default function UseState() {
  function FavoriteColor() {
    const [color, setColor] = useState("");

    return (
      <>
        <Button
          buttonContent="Lieblingsfarbe anzeigen"
          onClick={() => setColor("asdsa")}
        />
        <p>Meine Lieblingsfarbe ist: {color}</p>
      </>
    );
  }

  return (
    <section>
      <Content content={<FavoriteColor />} />
    </section>
  );
}