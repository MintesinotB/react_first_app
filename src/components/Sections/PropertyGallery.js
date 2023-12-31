export default function PropertyGallery() {
  return (
    <div className="bg-white py-32">
      <h2 className="text-4xl text-gray-600 pl-48 pb-12">Property Gallery</h2>
      <div className="flex justify-center">
        <img src="images/first.jpg" alt="" className="w-80 h-96" />
        <img src="images/second.jpg" alt="" className="w-80 h-96" />
        <img src="images/third.jpg" alt="" className="w-80 h-96" />
        <img src="images/forth.jpg" alt="" className="w-80 h-96" />
      </div>
    </div>
  );
}
