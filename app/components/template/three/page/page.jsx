import React from 'react';

const MyDocument = () => (
  <div className="flex">
    <div className="w-3/4 p-10">
      <h1 className="text-3xl font-bold mb-4">JAMES MOORE</h1>
      <p className="text-lg text-blue-600 mb-4">Experienced Project Manager</p>
      <div className="mb-4">
        <p className="text-sm">📞 +1 000 *** ****</p>
        <p className="text-sm">📧 jamesmoore@gmail.com</p>
        <p className="text-sm">🔗 linkedin.com/james-moore</p>
        <p className="text-sm">📍 New York City, NY</p>
      </div>
      <h2 className="text-2xl font-bold mt-10 mb-2">SUMMARY</h2>
      <div className="border-t border-black mb-2"></div>
      <p className="text-sm">
        Result-orientated project team leader with 5 years of experience covering project and product management including developing, implementing and supporting complex infrastructures for fast growing startups. A fast and eager learner, I am detail oriented and adapt to changing project requirements quickly to meet business goals. Comfortable with ambiguity and able to thrive in a fast-paced environment.
      </p>
      <h2 className="text-2xl font-bold mt-10 mb-2">EXPERIENCE</h2>
      <div className="border-t border-black mb-2"></div>
      <div className="mb-6">
        <p className="text-lg">Senior IT Product Manager</p>
        <div className="flex justify-between mb-2">
          <p className="text-sm">02/2019 - Ongoing</p>
          <p className="text-sm">San Francisco, CA</p>
        </div>
        <p className="text-lg">Rover Games</p>
        <p className="text-sm">
          - Accelerated outbound sales cycle by 330% by designing and implementing customer acquisition platform for training and managing technical sales personnel.
        </p>
        <p className="text-sm">
          - Established and curated strategic partnerships with 6 out of 10 top state manufacturing companies which resulted in $20M additional annual revenue.
        </p>
        <p className="text-sm">
          - Led re-architect effort of a core SaaS product to reduce the platform deployment time for clients by 2 months.
        </p>
      </div>
      <div className="mb-6">
        <p className="text-lg">Project Manager</p>
        <p className="text-lg">Tesla</p>
        <div className="flex justify-between mb-2">
          <p className="text-sm">2012 - 2019</p>
          <p className="text-sm">Los Angeles, CA</p>
        </div>
        <p className="text-sm">
          - Lead a team of developers to build a proprietary CRM system for enterprise and its strategic partners, optimizing sales process and increasing sales revenue by 24%.
        </p>
        <p className="text-sm">
          - Curated a $2M business implementation project that saves ~$3.5M on operational inefficiencies between sales and development departments annually.
        </p>
      </div>
      <div className="mb-6">
        <p className="text-lg">Project Coordinator</p>
        <p className="text-lg">Wolf Industry</p>
        <div className="flex justify-between mb-2">
          <p className="text-sm">2009 - 2012</p>
          <p className="text-sm">Los Angeles, CA</p>
        </div>
        <p className="text-sm">
          - Maintained and documented inventory of over 4,000 items.
        </p>
        <p className="text-sm">
          - Proposed & managed a project which reduced outbound logistics costs by 7% while reducing average delivery times and increasing delivery precision.
        </p>
      </div>
      <h2 className="text-2xl font-bold mt-10 mb-2">EDUCATION</h2>
      <div className="border-t border-black mb-2"></div>
      <p className="text-sm">Industrial Engineering, MSc</p>
      <p className="text-sm">University of California, Berkeley</p>
      <p className="text-sm">Industrial Engineering, BSc</p>
      <p className="text-sm">University of California, Berkeley</p>
    </div>

    <div className="w-1/4 bg-blue-800 text-white p-10">
      <img src="./image/téléchargement.jpeg" alt="Profile" className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-2xl font-bold mb-4">STRENGTHS</h2>
      <div className="border-t border-white mb-4"></div>
      <p className="text-sm flex items-center mb-2">
        <img src="./image/star.png" alt="Star" className="mr-2" />
        Strategic Planner: Developing steps along the way to achieve "big picture" results with market & stakeholder input.
      </p>
      <p className="text-sm flex items-center mb-2">
        <img src="./image/star.png" alt="Star" className="mr-2" />
        Flexible: Comfortable with ambiguity and able to thrive in a fast-paced environment.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">ACHIEVEMENTS</h2>
      <div className="border-t border-white mb-4"></div>
      <p className="text-sm flex items-center mb-2">
        <img src="./image/star.png" alt="Star" className="mr-2" />
        Cost Saving Of $100M: Through efficient project management and teamwork, my team saved the division at Tesla over $100 Million in the engine assembly department.
      </p>
      <p className="text-sm flex items-center mb-2">
        <img src="./image/Group.png" alt="Diagram" className="mr-2" />
        Exceeded throughput target by 90%: Cutting loading time & fixing key security issues by moving key remote workers successfully online at scale.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">SKILLS</h2>
      <div className="border-t border-white mb-4"></div>
      <p className="text-sm">- Product Development • Scrum • SQL • Tableau • JIRA • Stakeholder Management</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">LANGUAGES</h2>
      <div className="border-t border-white mb-4"></div>
      <div className="mb-2">
        <p className="text-sm">- English: Native</p>
        <div className="bg-gray-300 h-2 rounded mb-2"></div>
      </div>
      <div className="mb-2">
        <p className="text-sm">- Spanish: Advanced</p>
        <div className="bg-gray-300 h-2 rounded mb-2"></div>
      </div>
      <div className="mb-2">
        <p className="text-sm">- German: Intermediate</p>
        <div className="bg-gray-300 h-2 rounded mb-2"></div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">PASSIONS</h2>
      <div className="border-t border-white mb-4"></div>
      <p className="text-sm flex items-center mb-2">
        <img src="./image/Vector.png" alt="Heart" className="mr-2" />
        Family
      </p>
      <p className="text-sm flex items-center mb-2">
        <img src="./image/Vectors.png" alt="Kite" className="mr-2" />
        Adrenaline Sports
      </p>
      <p className="text-sm flex items-center mb-2">
        <img src="./image/Vecto.png" alt="Guitar" className="mr-2" />
        Composing music
      </p>
    </div>
  </div>
);

export default MyDocument;
