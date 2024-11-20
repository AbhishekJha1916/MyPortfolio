// pages/about.js
import Header from "@/components/header";

export default function About() {
  return (
    <div>
      <Header />
      <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-8 py-16">
        {/* About Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
          <p className="text-gray-600 mt-4 text-lg">
            I’m a skilled professional with experience in web and app development, graphic design, video editing, and UI/UX. Passionate about innovation and continuous learning, I strive to craft impactful solutions using my expertise in modern technologies and data analytics.
          </p>
        </div>

        {/* Skills Section */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title="Web Development"
            description="Building responsive and dynamic websites using modern frameworks like React, Next.js, and Tailwind CSS."
            icon="🌐"
          />
          <SkillCard
            title="Graphic Design"
            description="Creating visually stunning graphics and designs using tools like Adobe Photoshop and Illustrator."
            icon="🎨"
          />
          <SkillCard
            title="Video Editing"
            description="Crafting professional-grade video content with Adobe Premiere Pro and After Effects."
            icon="🎥"
          />
          <SkillCard
            title="UI/UX Design"
            description="Designing user-friendly interfaces and enhancing user experiences with modern design principles."
            icon="💡"
          />
          <SkillCard
            title="App Development"
            description="Developing efficient and engaging mobile applications tailored to specific needs."
            icon="📱"
          />
          <SkillCard
            title="Data Analytics"
            description="Leveraging data to make informed decisions and craft impactful solutions."
            icon="📊"
          />
        </div>
      </section>
    </div>
  );
}

// SkillCard Component
type SkillCardProps = {
  title: string;
  description: string;
  icon: string; // You can adjust this type based on what you pass as icons
};

function SkillCard({ title, description, icon }: SkillCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="text-4xl">{icon}</div>
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

