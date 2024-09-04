import React from "react";
import useField from "tinacms";

export const AuthorSelect = ({ input, field }) => {
  const authorField = useField(field);

  return (
    <div>
      {/* Author Selection */}
      <select {...input} onChange={(e) => input.onChange(e.target.value)}>
        <option value="Xavier1">Xavier2</option>
        <option value="guest-writer">Guest Writer1</option>
      </select>

      {/* Custom Author Input */}
      {input.value === "guest-writer" && (
        <input
          type="text"
          placeholder="Enter your name"
          value={authorField.input.value || ""}
          onChange={(e) => authorField.input.onChange(e.target.value)}
        />
      )}
    </div>
  );
};