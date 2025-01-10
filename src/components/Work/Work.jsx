import { useState } from "react";

const WorkData = [
  {
    id: 1,
    img: "/video1.mp4",
    name: "Bet365",
    description: "Experience the ultimate sports betting platform with seamless gameplay and live updates.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "/video2.mp4",
    name: "Live Cassino",
    description: "Dive into the thrilling world of live casino games, all from the comfort of your home.",
    aosDelay: "300",
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
    <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Explore Our Featured Works
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Handpicked projects crafted with passion and precision.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {WorkData.map((service, index) => (
            <div
              key={service.id}
              className="relative flex flex-col w-[400px] md:w-[500px] bg-white rounded-3xl shadow-xl overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <h2 className="text-3xl font-bold">{service.name}</h2>
                <p className="mt-2 text-lg font-medium">
                  {service.description}
                </p>
              </div>

              {/* Video */}
              <div className="relative w-full h-[300px] overflow-hidden">
                <video
                  src={service.img}
                  className="w-full h-full object-cover"
                  controls
                />
              </div>

              {/* Footer */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleLike(index)}
                    className="flex items-center px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600"
                  >
                    ❤️ Like
                    <span className="ml-2 bg-white text-red-500 rounded-full px-2">
                      {likes[index]}
                    </span>
                  </button>
                  <button
                    onClick={() => handleComment(index)}
                    className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
                  >
                    💬 Comments
                    <span className="ml-2 bg-white text-blue-500 rounded-full px-2">
                      {comments[index].length}
                    </span>
                  </button>
                </div>

                {/* Comments Section */}
                {commentInputs[index] && (
                  <div className="mt-6">
                    {/* Comment Input */}
                    <textarea
                      placeholder="Write a comment..."
                      className="w-full border border-gray-300 rounded-lg p-3 resize-none"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleCommentSubmit(index);
                        }
                      }}
                    ></textarea>

                    {/* Scrollable Comment List */}
                    <div
                      className="mt-2 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                    >
                      {comments[index].map((comment, i) => (
                        <div
                          key={i}
                          className="mt-3 bg-gray-100 p-3 rounded-lg"
                        >
                          <span className="block text-gray-700 font-semibold">
                            User {i + 1}:
                          </span>
                          <p className="text-gray-600">{comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
