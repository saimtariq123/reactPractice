import { useState } from 'react';
import Card from '../Card';

function OurTeam() {
  const teamData = [
    { image: '../public/team-person-1.png', name: 'Tashi Namora', role: 'Site Engineer' },
    { image: '../public/team-person-2.png', name: 'Larry Ludson', role: 'Civil Engineer' },
    { image: '../public/team-person-3.png', name: 'Dwight Schrute', role: 'Site Engineer' },
    { image: '../public/team-person-4.png', name: 'Jim Harper', role: 'Regional Manager' },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h3 className="text-orange-500 font-bold text-lg mb-2">Our Team</h3>
        <h2 className="text-2xl font-semibold">Meet Our Team of Professionals</h2>
        <p className="max-w-xl mx-auto text-sm text-gray-700 mt-4">
          Lorem ipsum dolor sit amet consectetur. Pellentesque proin pretium amet id duis. Urna scelerisque.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {teamData.map((member, idx) => (
          <Card key={idx} image={member.image} name={member.name} role={member.role} />
        ))}
      </div>
    </section>
  );
}
export default OurTeam;