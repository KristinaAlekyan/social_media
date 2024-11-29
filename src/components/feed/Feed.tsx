import Post from "./Post";

const Feed = async ({ username }: { username?: string }) => {

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      <Post />
    </div>
  );
};

export default Feed;