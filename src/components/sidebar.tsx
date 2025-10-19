import Profile from "./profile";

export default function Sidebar() {
  const birthday = new Date(1991, 8, 15);
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear() - 
    (today.getMonth() < birthday.getMonth() || 
    (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate()) ? 1 : 0);

  return (
    <aside className="space-y-6">
      <Profile
        name="Sven Oliver Berger"
        age= {age}
        title="Praktikant"
        location="65510 • Idstein"
        email="sven.berger@wolkenwerk.cloud"
        phone="+49 15119409788"
        description={`Ich bin ${age} Jahre alt und angehender Fachinformatiker für Anwendungsentwicklung und lerne React.`}
      />

      {/* Skills */}
      <section className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
        <h3 className="mb-3 text-lg font-semibold">Skills</h3>
        <ul className="space-y-3">
          {[
            { label: "TypeScript", value: 1},
            { label: "React", value: 2 },
            { label: "React Native", value: 0 },
            { label: "Node.js", value: 0 },
          ].map((s) => (
            <li key={s.label}>
              <div className="mb-1 flex justify-between text-sm">
                <span>{s.label}</span>
                <span>{s.value}%</span>
              </div>
              <div className="h-2 w-full rounded bg-gray-200">
                <div
                  className="h-2 rounded bg-indigo-500"
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}