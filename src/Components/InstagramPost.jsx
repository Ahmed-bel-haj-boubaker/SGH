import image1 from "../../public/images/bf4697002a82.jpg";
import image2 from "../../public/images/banner_outils_de_jardinage_fr_vonroc_280224.jpg";
import image3 from "../../public/images/desinfection-2.jpg";
import image4 from "../../public/images/desinsectisation.png";
import image5 from "../../public/images/desinsectisation-deratisation-deinfection-lille.jpg";
import image6 from "../../public/images/do8e9fbiu7o6-390x260-1.jpg";

export const instagramPosts = [
  {
    id: 1,
    image: image1,
    caption: "Caption for post 1",
    likes: 150,
    comments: 25,
  },
  {
    id: 2,
    image: image2,
    caption: "Caption for post 2",
    likes: 200,
    comments: 30,
  },
  {
    id: 3,
    image: image3,
    caption: "Caption for post 3",
    likes: 180,
    comments: 20,
  },
  {
    id: 4,
    image: image4,
    caption: "Caption for post 4",
    likes: 250,
    comments: 40,
  },
  {
    id: 5,
    image: image5,
    caption: "Caption for post 5",
    likes: 300,
    comments: 35,
  },
  {
    id: 6,
    image: image6,
    caption: "Caption for post 6",
    likes: 190,
    comments: 15,
  },
];

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
    </div>
  );
};

export default InstagramPost;
