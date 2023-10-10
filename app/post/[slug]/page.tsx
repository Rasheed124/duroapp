

import type { Metadata } from "next";
// import { getSinglePost } from "@/schemas/utils/sanity.utils";

// import PostPage from "@/components/site/Post/PostPage";

type Props = {
  params: {
    slug: string;
  };
};

// export const revalidate = 30; // revalidate every 30 seconds

export async function generateMetadata({ params }: Props): Promise<Metadata> {


  // if (!post)
  //   return {
  //     title: "Not Found",
  //     description: "This page is not found",
  //   };

  return {
    title: "post.title",
    description: "post.description",
    alternates: {
      canonical: `/post/`,
      languages: {
        "en-CA": `en-CA/post/`,
      },
    },
  };
}

export default function Post({ params }: Props) {
  return (
    <>

                <div className="text-2xl font-bold text-center ">
        <h2>Welcome to my     {params.slug} page</h2>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque cupiditate totam provident tempora iure, ad, expedita labore, quos fuga animi eveniet porro hic. Ratione voluptates eaque sapiente! Esse quam, quidem reprehenderit, magni fuga rerum ducimus quod excepturi dignissimos, pariatur sequi dicta? Cumque, eum! Odio hic voluptate rerum nulla itaque? Doloribus!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque cupiditate totam provident tempora iure, ad, expedita labore, quos fuga animi eveniet porro hic. Ratione voluptates eaque sapiente! Esse quam, quidem reprehenderit, magni fuga rerum ducimus quod excepturi dignissimos, pariatur sequi dicta? Cumque, eum! Odio hic voluptate rerum nulla itaque? Doloribus!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque cupiditate totam provident tempora iure, ad, expedita labore, quos fuga animi eveniet porro hic. Ratione voluptates eaque sapiente! Esse quam, quidem reprehenderit, magni fuga rerum ducimus quod excepturi dignissimos, pariatur sequi dicta? Cumque, eum! Odio hic voluptate rerum nulla itaque? Doloribus!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque cupiditate totam provident tempora iure, ad, expedita labore, quos fuga animi eveniet porro hic. Ratione voluptates eaque sapiente! Esse quam, quidem reprehenderit, magni fuga rerum ducimus quod excepturi dignissimos, pariatur sequi dicta? Cumque, eum! Odio hic voluptate rerum nulla itaque? Doloribus!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque cupiditate totam provident tempora iure, ad, expedita labore, quos fuga animi eveniet porro hic. Ratione voluptates eaque sapiente! Esse quam, quidem reprehenderit, magni fuga rerum ducimus quod excepturi dignissimos, pariatur sequi dicta? Cumque, eum! Odio hic voluptate rerum nulla itaque? Doloribus!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque cupiditate totam provident tempora iure, ad, expedita labore, quos fuga animi eveniet porro hic. Ratione voluptates eaque sapiente! Esse quam, quidem reprehenderit, magni fuga rerum ducimus quod excepturi dignissimos, pariatur sequi dicta? Cumque, eum! Odio hic voluptate rerum nulla itaque? Doloribus!</p>
      </div>
       
    
    </>
  );
}
