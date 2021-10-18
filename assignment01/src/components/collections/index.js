import React from "react";
import CollectionList from "./CollectionList";
import "../../styles.css";
import "./collectionstyles.css";

function index() {
  return (
    <div className="container">
      <div className="collection_header">
        <h4>Collection from Shirley</h4>
        <p>See all Collections &#x25B8;</p>
      </div>
      <div style={{ display: "flex", gap: "2em", flexWrap: "wrap" }}>
        <CollectionList name="Diet for Two Weeks" />
        <CollectionList name="Crunchy Food" />
        <CollectionList name="Just for Healthy" />
        <CollectionList name="Full of Protiens" />
      </div>
    </div>
  );
}

export default index;
