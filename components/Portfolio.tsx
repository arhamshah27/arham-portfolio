import Image from "next/image"

export function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-primary-foreground/10 rounded-full p-4">
              
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Arham Shah</h1>
            <p className="text-lg md:text-xl font-medium">Computer Science Student</p>
            <p className="max-w-md text-muted-foreground">
              An 18-year-old computer science student from Vadodara, Gujarat, India, with a passion for technology and a
              drive to create innovative solutions.
            </p>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">About</h2>
                <p className="text-muted-foreground">
                  Arham is a passionate computer science student with a keen interest in technology and innovation. He
                  is currently pursuing a B.Tech degree in Computer Science and Engineering at CHARUSAT, where he is
                  exploring various aspects of computer science, including software development, artificial
                  intelligence, and cybersecurity.
                </p>
                <p className="text-muted-foreground mt-4">
                  Beyond his academic pursuits, Arham is an avid learner who enjoys exploring new technologies and
                  experimenting with different programming languages and frameworks. He is driven by a desire to create
                  solutions that can positively impact people&apos;s lives and is always eager to take on new challenges.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-primary-foreground/10 rounded-full p-4">
                  <img src="/placeholder.svg" width={400} height={400} alt="Arham Shah" className="rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-muted rounded-lg p-4 flex flex-col items-center shadow-lg transition-transform hover:-translate-y-2">
                <div className="bg-primary-foreground/10 rounded-full p-3 mb-2">
                  <CodeIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-1">Programming</h3>
                <p className="text-muted-foreground text-sm">Proficient in Python, Java, and C++</p>
              </div>
              <div className="bg-muted rounded-lg p-4 flex flex-col items-center shadow-lg transition-transform hover:-translate-y-2">
                <div className="bg-primary-foreground/10 rounded-full p-3 mb-2">
                  <DatabaseIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-1">Databases</h3>
                <p className="text-muted-foreground text-sm">Experience with MySQL, PostgreSQL, and MongoDB</p>
              </div>
              <div className="bg-muted rounded-lg p-4 flex flex-col items-center shadow-lg transition-transform hover:-translate-y-2">
                <div className="bg-primary-foreground/10 rounded-full p-3 mb-2">
                  <WebhookIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-1">Web Development</h3>
                <p className="text-muted-foreground text-sm">Familiar with React, Node.js, and HTML/CSS</p>
              </div>
              <div className="bg-muted rounded-lg p-4 flex flex-col items-center shadow-lg transition-transform hover:-translate-y-2">
                <div className="bg-primary-foreground/10 rounded-full p-3 mb-2">
                  <CpuIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-1">Algorithms</h3>
                <p className="text-muted-foreground text-sm">Adept at problem-solving and algorithm design</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 md:px-6 flex justify-center">
          <p className="text-sm">&copy; 2024 Arham Shah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CpuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function DatabaseIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function WebhookIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  )
}
