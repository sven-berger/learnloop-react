import Section from "../../components/section";

export default function AcpProfiles() {
  const profiles = [
    { id: 1, firstName: "John", lastName: "Doe", age: 30 },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 25 },
    { id: 3, firstName: "Alice", lastName: "Johnson", age: 28 },
    { id: 4, firstName: "Patrick", lastName: "James", age: 35 },
  ];

  let countProfiles = "<span className="text-red-400">`{profiles.length}`</span>;" ;

  return (
    <>
      <Section sectionTitle={`Anzahl der Profile: ${countProfiles}`}>
        <table className="w-full text-left border-collapse mb-4">
          <thead>
            <tr>
              <th className="border-b border-gray-200 p-2">ID</th>
              <th className="border-b border-gray-200 p-2">First Name</th>
              <th className="border-b border-gray-200 p-2">Last Name</th>
              <th className="border-b border-gray-200 p-2">Age</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <td className="border-b border-gray-200 p-2">{profile.id}</td>
                <td className="border-b border-gray-200 p-2">
                  {profile.firstName}
                </td>
                <td className="border-b border-gray-200 p-2">
                  {profile.lastName}
                </td>
                <td className="border-b border-gray-200 p-2">{profile.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </>
  );

  return (
    <div>
      <AcpProfiles />
    </div>
  );
}
