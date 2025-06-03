export default function VideosView({ videos }) {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {videos.map((url, i) => (
          <div
            key={i}
            className="w-full h-80 rounded-lg overflow-hidden bg-black shadow-md"
          >
            <iframe
              src={url}
              title={`clip-${i}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
