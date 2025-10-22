/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useMemo } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Video2() {
  const [open, setOpen] = useState(false);

  const modelId = "cb3PdBNtPt9"; // Replace with your actual Matterport model ID

  const mpUrl = useMemo(() => {
    const base = "https://my.matterport.com/show/";
    const params = new URLSearchParams({
      m: modelId,
      play: "1",
      brand: "0",
      qs: "1",
      title: "0",
      dh: "1",
    }).toString();
    return `${base}?${params}`;
  }, [modelId]);

  return (
    <>
      <div className="video-area-two" id="matterport">
        {" "}
        <div className="container">
          {" "}
          <div className="row">
            {" "}
            <div className="col-12">
              {" "}
              <div className="video-bg"> 
                <div className="absolute bottom-10 right-50% bg-black/20 px-20 flex flex-col items-center justify-center py-2 rounded-full">
                <img src="/images/logo.png" alt=""  className="w-24 h-auto"/>
                  <h1 className=" text-white">Chalet Scandinavian </h1>
                  <h4 className=" text-white">Visite virtuelle </h4>
                </div>
                
               <div
                onClick={() => setOpen(true)}
                className="flex  items-center justify-center border-white border-4 hover:bg-amber-700 cursor-pointer text-white bg-amber-800/50  rounded-full w-16 h-16 transition-all duration-300"
              >
                <Play size={32} />
              </div></div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>

      {/* Dialog for Matterport Viewer */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className=" !w-[90vw] !max-w-[1200px]  h-[80vh] p-0 overflow-hidden">
          
          <iframe
            src={mpUrl}
            allowFullScreen
            className="w-full h-full border-0"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
