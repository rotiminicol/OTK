import { useState } from "react";

const WorkData = [
  {
    id: 1,
    img: "/video1.mp4",
    name: "Bet365",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "/video2.mp4",
    name: "Live Cassino",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "/video2.mp4",
    name: "Cassion",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: "/video2.mp4",
    name: "Bet365",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "700",
  },
  {
    id: 5,
    img: "/video1.mp4",
    name: "Live Cassino",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "900",
  },
  {
    id: 6,
    img: "/video2.mp4",
    name: "Cassion",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "1100",
  },
];

const Work = () => {
  const [likes, setLikes] = useState(WorkData.map(() => 0));
  const [comments, setComments] = useState(WorkData.map(() => []));
  const [commentInputs, setCommentInputs] = useState(WorkData.map(() => false));
  const [newComment, setNewComment] = useState("");

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  };

  const handleComment = (index) => {
    const newCommentInputs = [...commentInputs];
    newCommentInputs[index] = !newCommentInputs[index];
    setCommentInputs(newCommentInputs);
    // Scroll up when comment input is opened
    if (!newCommentInputs[index]) {
      document.getElementById(`service-${index}`).scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy(0, -200); // Adjust this value as needed
    }
  };

  const handleCommentSubmit = (index) => {
    if (newComment.trim() !== "") {
      const newComments = [...comments];
      newComments[index] = [...newComments[index], newComment];
      setComments(newComments);
      setNewComment("");
    }
  };

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-blue-900">
              Check Out Some Of Our Work:
            </h1>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {WorkData.map((service, index) => (
              <div
                id={`service-${index}`}
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="w-72 h-[500px] rounded-2xl bg-white hover:bg-transparent hover:text-black relative shadow-lg group"
              >
                {/* Text container */}
                <div className="p-2 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-black transition-colors text-sm line-clamp-1">
                    {service.description}
                  </p>
                </div>

                {/* Video container */}
                <div className={`h-80 flex items-center justify-center overflow-hidden bg-gray-100 ${commentInputs[index] ? 'hidden' : 'block'}`}>
                  <video
                    src={service.img}
                    className="w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    controls
                  />
                </div>

                {/* Bottom section with like and comment buttons */}
                <div className="p-4 flex flex-col items-center">
                  <div className="flex justify-around w-full mb-2">
                    <button
                      className="bg-gray-200 hover:bg-red-500 text-gray-600 hover:text-white py-2 px-2 rounded-full text-sm"
                      onClick={() => handleLike(index)}
                    >
                      ❤️ Like<sup>{likes[index]}</sup>
                    </button>
                    <button
                      className="bg-gray-200 hover:bg-blue-500 text-gray-600 hover:text-white py-2 px-2 rounded-full text-sm"
                      onClick={() => handleComment(index)}
                    >
                      💬 Comment<sup>{comments[index].length}</sup>
                    </button>
                  </div>

                  {/* Comment textarea */}
                  {commentInputs[index] && (
                    <div className="w-full mb-2">
                      <textarea
                        className="w-full p-2 border rounded"
                        placeholder="Write a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleCommentSubmit(index);
                          }
                        }}
                      ></textarea>
                    </div>
                  )}
                  
                  {/* Display comments */}
                  {commentInputs[index] && (
                    <div className="w-full text-gray-700 max-h-32 overflow-y-auto">
                      {comments[index].map((comment, i) => (
                        <div key={i} className="flex items-start mb-1">
                          <div className="flex-shrink-0 bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold mr-2">
                            {comment[0].toUpperCase()}
                          </div>
                          <div className="bg-gray-100 p-2 rounded-lg">
                            <p className="text-sm">{comment}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
