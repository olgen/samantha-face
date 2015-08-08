import React from "react";
import commitsSmall from "json!commits_small.json";

const Timeline = React.createClass({
  propTypes: {
  },

  render() {
    return (
      <div>
        {
          commitsSmall.map((commit) => {
            return (
              <div> { commit.title }, { commit.created_at } </div>
            );
          })
        }
      </div>
    );
  },
});

export default Timeline;
