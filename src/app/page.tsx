import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/wVqprXOZ4DSdknmFTDfsk6vpQTSPaZI1DzWRrAiV80eoOlcE",
  "https://utfs.io/f/wVqprXOZ4DSdRe6DnFQjfxi6nuzwyJH5P3Z0YL2Qq7pcDdeG",
  "https://utfs.io/f/wVqprXOZ4DSdR0sMhijfxi6nuzwyJH5P3Z0YL2Qq7pcDdeGk",
  "https://utfs.io/f/wVqprXOZ4DSdCDfPUb2x4vkymSsXCIKcM3Zj8enaBwlrNtfq"
]

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }))


export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
