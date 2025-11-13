// optimize-videos.js
import fs from "fs-extra";
import path from "path";
import ffmpeg from "fluent-ffmpeg";
ffmpeg.setFfmpegPath("C:\\ffmpeg\\ffmpeg.exe"); // 👈 add this line

const INPUT_DIR = "./public/video"; // folder containing original videos
const OUTPUT_DIR = "./public/optimized-videos"; // output folder
const MAX_WIDTH = 1280; // limit resolution (720p or 1080p)
const CRF = 28; // lower = higher quality, 23–30 is good for web

async function optimizeVideos() {
  await fs.ensureDir(OUTPUT_DIR);
  const files = await fs.readdir(INPUT_DIR);

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const ext = path.extname(file).toLowerCase();
    const name = path.basename(file, ext);

    if (![".mp4", ".mov", ".avi", ".mkv", ".webm"].includes(ext)) continue;

    const outputPath = path.join(OUTPUT_DIR, `${name}.webm`);

    console.log(`🎥 Optimizing: ${file}...`);

    await new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .outputOptions([
          `-vf scale='min(${MAX_WIDTH},iw):-2'`, // resize to MAX_WIDTH keeping aspect ratio
          "-c:v libvpx-vp9", // VP9 codec for .webm
          `-crf ${CRF}`, // quality factor
          "-b:v 0", // constant quality
          "-c:a libopus", // modern audio codec
        ])
        .on("end", () => {
          console.log(`✅ Optimized: ${name}.webm`);
          resolve();
        })
        .on("error", reject)
        .save(outputPath);
    });
  }

  console.log("\n🎉 All videos optimized successfully!");
}

optimizeVideos();
