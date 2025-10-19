import Content from "../../components/content";
import { useEffect, useState } from "react";

export default function Useeffect() {
  function LiveClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);

      return () => clearInterval(timer);
    }, []); // [] → nur beim ersten Laden ausführen

    return (
      <div>
        <h2 className="text-2xl font-semibold mb-2">🕒 Aktuelle Uhrzeit</h2>
        <p className="text-4xl font-bold text-emerald-600">{time}</p>
        <p className="text-sm text-gray-500 mt-2">(Aktualisiert jede Sekunde)</p>
      </div>
    );
  }

  return (
    <section>
      <Content content={<LiveClock />} />
    </section>
  );
}