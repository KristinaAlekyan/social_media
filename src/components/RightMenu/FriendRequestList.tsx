"use client";

import Image from "next/image";
import { useOptimistic, useState } from "react";


const FriendRequestList = () => {

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/noAvatar.png"}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">
            Jon
          </span>
        </div>
        <div className="flex gap-3 justify-end">
            <button>
              <Image
                src="/accept.png"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
            <button>
              <Image
                src="/reject.png"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </button>
        </div>
      </div>
    </div>
  );
};

export default FriendRequestList;