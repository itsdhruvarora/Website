// Website of jayantkageri, NextJS Site for jayantkageri.in
// Copyright (C) 2021 - 2022 Jayant Hegde Kageri <https://github.com/jayantkageri>

// This file is part of Website of jayantkageri.

// Website of jayantkageri is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Website of jayantkageri is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with Website of jayantkageri.  If not, see <https://www.gnu.org/licenses/>.

import React from "react";
import banner from "../assets/banner.png";

export default function Video() {
  return (
    <>
      <section id="intro" className="bg-gray-900 min-w-full min-h-screen">
        <div className="container">
          <header className="bg-gray-900">
            <div className="container px-6 py-16 mx-auto">
              <div className="items-center flex justify-center">
                <div className="w-full">
                  <video
                    className="w-full h-full rounded"
                    poster={banner.src}
                    controls
                    // Disable Playback Speed Option
                    controlsList={"noplaybackrate"}
                  >
                    <source
                      src={"/assets/videos/jayantkageri.mp4"}
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>
    </>
  );
}
