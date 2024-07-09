import { IoIosColorFilter } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiBox } from "react-icons/fi";

import { Caption, Title } from "../Shared-components/CustomComponent";

export const instagramPosts = [
  {
    id: 1,
    image: "../../public/images/bf4697002a82.jpg",
    caption: "Caption for post 1",
    likes: 150,
    comments: 25,
  },
  {
    id: 2,
    image: "../../public/images/banner_outils_de_jardinage_fr_vonroc_280224.jpg",
    caption: "Caption for post 2",
    likes: 200,
    comments: 30,
  },
  {
    id: 3,
    image: "../../public/images/desinfection-2.jpg",
    caption: "Caption for post 3",
    likes: 180,
    comments: 20,
  },
  {
    id: 4,
    image: "../../public/images/desinsectisation.png",
    caption: "Caption for post 4",
    likes: 250,
    comments: 40,
  },
  {
    id: 5,
    image: "../../public/images/desinsectisation-deratisation-deinfection-lille.jpg",
    caption: "Caption for post 5",
    likes: 300,
    comments: 35,
  },
  {
    id: 6,
    image: "../../public/images/do8e9fbiu7o6-390x260-1.jpg",
    caption: "Caption for post 6",
    likes: 190,
    comments: 15,
  },
];
// const filterDiscoverItems = [
//   {
//     id: 1,
//     title: "Filter & Discover",
//     icon: <IoIosColorFilter size={70} />,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting",
//   },
//   {
//     id: 2,
//     title: "Add To Cart",
//     icon: <IoBagRemoveOutline size={70} />,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting",
//   },
//   {
//     id: 3,
//     title: "Fast Shipping",
//     icon: <MdOutlineLocalShipping size={70} />,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting",
//   },
//   {
//     id: 4,
//     title: "Enjoy The Product",
//     icon: <FiBox size={70} />,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting",
//   },
// ];
const InstagramPost = () => {
  return (
    <div>
      <section className="post grid-cols-1 grid md:grid-cols-3 lg:grid-cols-6">
        {instagramPosts.map((instagramPost, index) => (
          <div key={index}>
            <img
              src={instagramPost.image}
              alt=""
              className="w-full h-full object-cover transition-transform ease-in-out hover:-rotate-12 hover:scale-90"
            />
          </div>
        ))}
      </section>
      {/* //<FilterDiscover /> */}
    </div>
  );
};

// export const FilterDiscover = () => {
//   return (
//     <>
//       {" "}
//       <section className=" grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 bg-white-100">
//         {filterDiscoverItems.map((filter) => (
//           <div
//             key={filter.id}
//             className="flex items-center gap-8 py-12 relative"
//           >
//             <div className="icon">
//               <i>{filter.icon}</i>
//             </div>
//             <div>
//               <Title className="text-bold" level={5}>
//                 {filter.title}
//               </Title>
//               <Caption>{filter.description}</Caption>
//               <Title
//                 className="absolute -bottom-5 right-0 opacity-10"
//                 level={1}
//               >
//                 0{filter.id}
//               </Title>
//             </div>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// };

export default InstagramPost;
