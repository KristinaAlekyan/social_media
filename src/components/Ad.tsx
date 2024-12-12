import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm ">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
            }`}
        >
          <Image
            src="https://assets.designhill.com/design-blog/wp-content/uploads/2024/07/1993-Logo-with-an-oval-shape.jpg"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://assets.designhill.com/design-blog/wp-content/uploads/2024/07/1993-Logo-with-an-oval-shape.jpg"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Samsung</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Samsung is a South Korean company."
            : size === "md"
              ? "Samsung is a South Korean company originally founded as a grocery trading store by Lee Byung-Chull in March 1938. The company forayed in the electronics industry in 1969 and its first electronic product was a black-and-white television. Soon, the company also started exporting its products and became a major electronic manufacturer in its home country. "
              : "Samsung is a South Korean company originally founded as a grocery trading store by Lee Byung-Chull in March 1938. The company forayed in the electronics industry in 1969 and its first electronic product was a black-and-white television. Soon, the company also started exporting its products and became a major electronic manufacturer in its home country. "
          }  </p>

        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;