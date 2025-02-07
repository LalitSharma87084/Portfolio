export default function Navbar() {
  return (
    
    <nav className="flex justify-between items-center p-4 text-sm">
        <div>
          <a href="mailto:Lsharma906850@gmail.com" className="hover:underline">
          Lsharma906850@gmail.com
          </a>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-1 border rounded-full hover:bg-gray-200">Copy</button>
          <button className="px-4 py-1 border rounded-full hover:bg-gray-200">CV</button>
        </div>
        <div className="space-x-3">
          <a href="#" className="hover:underline">LinkedIn</a>
          <span>/</span>
          <a href="#" className="hover:underline">Github</a>
          <span>/</span>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </nav>
  );
}
