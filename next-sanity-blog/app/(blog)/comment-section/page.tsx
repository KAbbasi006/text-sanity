'use client'
import { useState, useEffect } from 'react';

const CommentSection = () => {
  // State to store the comment form input and existing comments
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<any[]>([]);

  // Load comments from local storage when the component mounts
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(savedComments);
  }, []);

  // Handle username change
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // Handle comment change
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure both username and comment are provided
    if (username && comment) {
      const newComment = { username, comment };
      const updatedComments = [...comments, newComment];

      // Save the new comment in local storage
      localStorage.setItem('comments', JSON.stringify(updatedComments));

      // Update the state
      setComments(updatedComments);
      setUsername('');
      setComment('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Comment Section</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>

          {/* Comment Textarea */}
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Your Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              value={comment}
              onChange={handleCommentChange}
              required
              rows={4}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Write your comment"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-[#124E66] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
            >
              Submit Comment
            </button>
          </div>
        </form>

        {/* Display Comments */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Comments</h2>
          <div className="space-y-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50"
                >
                  <p className="text-sm font-medium text-gray-700">{comment.username}</p>
                  <p className="mt-2 text-gray-600">{comment.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
