import Section from "../components/section";

export default function Profile() {
  // JavaScript-Funktion
  function getGreeting(name: string) {
    return `Hallo ${name}!`;
  }

  const userName = "Sven";

  return (
    <section>
      <Section sectionTitle="Profil">
        <p>{getGreeting(userName)}, willkommen auf meinem Profil!</p>
      </Section>
    </section>
  );
}