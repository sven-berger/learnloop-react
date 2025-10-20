import Section from "../components/section";
import Button from "../components/buttonOnClick";
import Content from "../components/content";
import Card from "../components/card";
import { useEffect, useState } from "react";

import Raven from "../assets/images/animals/raven.jpg";
import Spider from "../assets/images/animals/spider.jpg";
import Butterfly from "../assets/images/animals/butterfly.jpg";

export default function Home() {
  const [welcome, setWelcome] = useState({ title: "" });

  useEffect(() => {
    setWelcome({ title: "Willkommen auf meiner Homepage" });
  }, []);

  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Aktueller Stand: {count}</p>
        <Button onClick={() => setCount(count + 1)}>Counter erhöhen</Button>
      </div>
    );
  }

  function NameForm() {
    const [name, setName] = useState("");
    return (
      <>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Dein Name"
          className="w-full mb-5 border border-gray-200 p-2 rounded-sm"
        />
        <p>Hallo {name || "Unbekannter"}</p>
      </>
    );
  }

  return (
    <section>
      <Section sectionTitle="Startseite">
        <p>{welcome.title}</p>
      </Section>

      <Content content={<Counter />} />
      <Content content={<NameForm />} />
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-3">
        <Card
          title="Test1"
          image={Raven}
          description="Descritipon1"
          url="https://google.de"
        />
        <Card
          title="Test2"
          image={Spider}
          description="Descritipon2"
          url="https://google.de"
        />
        <Card
          title="Test3"
          image={Butterfly}
          description="Descritipon3"
          url="https://google.de"
        />
      </div>
    </section>
  );
}
