"use client";

// NAVBAR
export default function Example() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex bg-purple-300 items-center justify-between">
          {/* div da logo */}
          <div className="flex items-center justify-start gap-2">
            <div>
              <img
                src="logo-tailwind.svg"
                className="w-10 md:w-10 lg:w-12 h-auto mx-auto"
                alt="Logo"
              />
            </div>

            <div className="Logo-Color">React Tailwind</div>
          </div>
          <div className="flex gap-2 mx-2">
            <li>
              <a href="#" className="text-purple-700">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="text-purple-700">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-purple-700">
                About Us
              </a>
            </li>
          </div>
        </nav>
      </header>
    </div>
  );
}
