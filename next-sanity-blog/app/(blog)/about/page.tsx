export default function About() {
    return (
      <div className="container mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto mb-8">
          Welcome to <span className="font-bold">CodeStep</span>, your trusted partner in learning web development. 
          Our mission is to empower beginners with the skills and knowledge they need to build a successful career in web development.
          We offer resources, guidance, and inspiration to help you step into the exciting world of coding and development.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Our Mission */}
          <div className="bg-[#124E66] text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              At CodeStep, our mission is to make learning web development accessible, simple, and enjoyable for everyone. 
              We aim to inspire and guide individuals to unlock their potential and bring their creative ideas to life.
            </p>
          </div>
  
          {/* Our Vision */}
          <div className="bg-[#124E66] text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p>
              We envision a world where anyone can learn to code, regardless of their background. 
              CodeStep strives to bridge the gap between beginners and industry experts, creating a supportive community for lifelong learning.
            </p>
          </div>
        </div>
      </div>
    );
  }
  