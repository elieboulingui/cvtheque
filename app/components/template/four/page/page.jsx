import React from 'react';

const Pdf = () => (
  <div className="bg-white mx-auto p-4 lg:p-8 w-full lg:w-8/12">
    {/* Header */}
    <div className="text-left">
      <h1 className="font-bold text-lg">BOULINGUI</h1>
      <h2 className="font-bold text-lg">JOSUE </h2>
    </div>

    {/* User Experience Section */}
    <div className="mt-6  border-t border-b border-black p-2 flex justify-between mx-4">
    <div className="font-bold text-sm">USER EXPERIENCE DESIGNER</div>
    <div className="text-sm">www.boulingui.com</div>
</div>

    {/* Main Content */}
    <div className="flex flex-wrap mt-6">
      {/* Left Column */}
      <div className="w-full lg:w-1/3 pr-4">
        {/* About Me Section */}
        <div className="bg-white  p-4 mb-4 ">
          <div className="flex items-center mb-2">
            <img src="/image/a.png" className="w-5 h-5 mr-2" alt="About Me Icon" />
            <h3 className="text-lg font-bold mb-2">ABOUT ME</h3>
          </div>
          <div className="h-0.5 w-full bg-black my-2"></div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white  p-4 mb-4">
          <div className="flex items-center mb-2">
            <img src="/image/contact-book_4203928.png" className="w-5 h-5 mr-2" alt="Contact Icon" />
            <h3 className="text-lg font-bold mb-2">CONTACT</h3>
          </div>
          <div className="h-0.5 w-full bg-black my-2"></div>
          <div className="text-sm">
            <p>Mobile:</p>
            <p>02800200</p>
            <p>ADRESSE:</p>
            <p>12th avenue Street autralia</p>
            <p>Home:</p>
            <p>02800200</p>
            <p>email:</p>
            <p>johnwatson@gmail.com</p>
            <p>Website:</p>
            <p>jwatson</p>
            <p>Skype:</p>
            <p>username</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white p-4 mb-4">
          <div className="flex items-center mb-2">
            <img src="/image/skills.png" className="w-5 h-5 mr-2" alt="Skills Icon" />
            <h3 className="text-lg font-bold mb-2">SKILLS</h3>
          </div>
          <div className="h-0.5 w-full bg-black my-2"></div>
          <div className="flex flex-col">
            <div className="w-1/2 mb-4">
              <p className="text-sm">Skill 01</p>
              <div className="w-full h-2 bg-black rounded-full mt-1"></div>
              <div className="w-full h-2 bg-black rounded-full mt-1"></div>
              <div className="w-full h-2 bg-black rounded-full mt-1"></div>
              <div className="w-full h-2 bg-black rounded-full mt-1"></div>
              <div className="w-full h-2 bg-black rounded-full mt-1"></div>
            </div>
            <div className="w-1/2 mb-4">
              <p className="text-sm">Skill 02</p>
              <div className="w-full h-2 bg-black rounded-full mt-1"></div>
              <div className="w-full h-2 bg-black rounded-full mt-1"></div>
              <div className="w-full h-2 bg-gray-400 rounded-full mt-1"></div>
              <div className="w-full h-2 bg-gray-400 rounded-full mt-1"></div>
              <div className="w-full h-2 bg-gray-400 rounded-full mt-1"></div>
            </div>
            {/* Repeat for other skills */}
            <div className="w-1/2 mb-4">
              <p className="text-sm">Skill 02</p>
              <div className="w-full h-2 bg-black rounded-full mt-1"></div>
              <div className="w-full h-2 bg-black rounded-full mt-1"></div>
              <div className="w-full h-2 bg-gray-400 rounded-full mt-1"></div>
              <div className="w-full h-2 bg-gray-400 rounded-full mt-1"></div>
              <div className="w-full h-2 bg-gray-400 rounded-full mt-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-2/3 pl-12">
        {/* Experiences Section */}
        <div className="bg-white  p-4 mb-4">
          <div className="flex items-center mb-2">
            <img src="/image/71200.png" className="w-5 h-5 mr-2" alt="Experiences Icon" />
            <h3 className="text-lg font-bold mb-2">EXPERIENCES</h3>
          </div>
          <div className="h-0.5 w-full bg-black my-2"></div>
          {/* Experience items */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-full lg:w-1/3 pr-2 mb-4 lg:mb-0">
              <p className="font-bold">Graphic Designer</p>
              <p className="text-sm">2015 - 2017</p>
            </div>
            <div className="w-full lg:w-2/3 pl-16 text-left">
              <p className="font-bold">SOFT DESIGN STUDIOS</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          {/* Repeat for other experiences */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-full lg:w-1/3 pr-2 mb-4 lg:mb-0">
              <p className="font-bold">Graphic Designer</p>
              <p className="text-sm">2015 - 2017</p>
            </div>
            <div className="w-full lg:w-2/3 pl-16">
              <p className="font-bold">SOFT DESIGN STUDIOS</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full lg:w-1/3 pr-2 mb-4 lg:mb-0">
              <p className="font-bold">Graphic Designer</p>
              <p className="text-sm">2015 - 2017</p>
            </div>
            <div className="w-full lg:w-2/3 pl-16">
              <p className="font-bold">SOFT DESIGN STUDIOS</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        
        {/* Education Section */}
        <div className="bg-white p-4 ">
          <div className="flex items-center mb-2">
            <img src="/image/education.jpg" className="w-5 h-5 mr-2" alt="Education Icon" />
            <h3 className="text-lg font-bold mb-2">EDUCATION</h3>
          </div>
          <div className="h-0.5 w-full bg-black my-2"></div>
          {/* Education items */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-full lg:w-1/3 pr-2 mb-4 lg:mb-0">
              <p className="font-bold">Graphic Designer</p>
              <p className="text-sm">2015 - 2017</p>
            </div>
            <div className="w-full lg:w-2/3 pl-16">
              <p className="font-bold">SOFT DESIGN STUDIOS</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full lg:w-1/3 pr-2 mb-4 lg:mb-0">
              <p className="font-bold">Graphic Designer</p>
              <p className="text-sm">2015 - 2017</p>
            </div>
            <div className="w-full lg:w-2/3 pl-16">
              <p className="font-bold">SOFT DESIGN STUDIOS</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full lg:w-1/3 pr-2 mb-4 lg:mb-0">
              <p className="font-bold">Graphic Designer</p>
              <p className="text-sm">2015 - 2017</p>
            </div>
            <div className="w-full lg:w-2/3 pl-16">
              <p className="font-bold">SOFT DESIGN STUDIOS</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>

        {/* References Section */}
        <div className="bg-white  p-4 ">
          <div className="flex items-center mb-2">
            <img src="/image/note.png" className="w-5 h-5 mr-2" alt="References Icon" />
            <h3 className="text-lg font-bold mb-2">REFERENCES</h3>
          </div>
          <div className="h-0.5 w-full bg-black my-2"></div>
          {/* References items */}
          <div className="mb-4 flex flex-wrap">
            <div className="w-full lg:w-1/3 pr-2 mb-4 lg:mb-0">
              <p className="font-bold">WILLIAM KLEIMAM</p>
              <p>phone +5551235566</p>
              <p>email: willan@gmail.com</p>
            </div>
            <div className="w-full lg:w-2/3 pl-16">
              <p className="font-bold">SIMBOU BOULINGUI JUDITH</p>
              <p>DIRECTOR, Matrix media limited</p>
            </div>
          </div>
          {/* Repeat for other references */}
        </div>
      </div>
    </div>
  </div>
);

export default Pdf;
