import React, { Component } from "react";

export default function User(props) {
  return (
    <div>
      <h1>User</h1>
      <h1>{props.match.params.userId}</h1>
    </div>
  );
}
