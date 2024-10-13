// TagInput.js
import React, { useState } from 'react';



const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState('');
  let nextId = 0;

  // Handle adding a new tag
  const handleAddTag = (e) => {
    e.preventDefault();
    if (input) {
      setTags([...tags, {id: nextId++, tag: input}]);
      setInput('');
      console.log("hello world");
    }
  };

  // Handle removing a tag
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="tag-input-container">
      <form onSubmit={handleAddTag}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter interest..."
          className="border p-2"
        />
        <button onClick={handleAddTag} className="ml-2 bg-blue-500 text-white p-2 rounded">
          Add
        </button>
      </form>

      <div className="tag-list mt-4">
        {tags.map(tag => (
          <div
            key={tag.id}
            className="tag bg-gray-200 p-2 rounded inline-flex items-center mr-2 mt-2"
          >
            <span>{tag.tag}</span>
            <button
              onClick={() => handleRemoveTag(tag)}s
              className="ml-2 text-red-500 font-bold"
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInput;