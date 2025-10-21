import Section from "../components/section";

export default function ProfileProps() {
  function ProfileList() {
    const profiles = [
      { id: 1001, firstName: "John", lastName: "Doe", age: 30 },
      { id: 1002, firstName: "Jane", lastName: "Smith", age: 25 },
      { id: 1003, firstName: "Alice", lastName: "Johnson", age: 28 },
    ];
    
    return (
      <>
        <Section
          sectionTitle={`Profil of ${profiles[2].firstName} ${profiles[1].lastName} (${profiles[0].age} years old)`}
        >
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
                  <td className="border-b border-gray-200 p-2">
                    {profile.age}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </>
    );
  }

  return (
    <div>
      <ProfileList />
    </div>
  );
}
