import PostCard from "@/components/NewPost";
import Post from "@/components/Post";
import SecondVersion from "@/components/SecondVersion";
import ThirdPost from "@/components/ThirdPost";


export default function Home() {
  return (
    <div className="w-full h-screen  pt-5 flex justify-center">
      {/* <Post /> */}
      {/* <SecondVersion /> */}
      {/* <ThirdPost /> */}
      <PostCard />
    </div>
  );
}
