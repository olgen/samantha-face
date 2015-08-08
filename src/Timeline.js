import React from "react";
import commitsWithTopics from "json!commits_with_topics.json";

function mapCommitsToLanes(commits) {
  return commits.reduce((memo, commit) => {
    commit.topics.forEach((topic) => {
      if (memo[topic] === undefined) {
        memo[topic] = [];
      }
      memo[topic].push(commit);
    });
    return memo;
  }, {});
}

function renderLane({ title, items }) {
  return (
    <div className="lane" style={{ width: items.length * 20 }}>
      <div className="lane-title">{ title }</div>
      {
        items.map( (item) => {
          return (
            <div className="lane-item">
              <div className="lane-item-content">{ item.title }</div>
            </div>
          );
        })
      }
    </div>
  );
}

function renderLanes(lanes) {
  return (
    <div className="lanes">
      { Object.keys(lanes).map((name) => renderLane({ title: name, items: lanes[name] })) }
    </div>
  );
}

const Timeline = React.createClass({
  propTypes: {
  },

  render() {
    return renderLanes(mapCommitsToLanes(commitsWithTopics));
  },
});

export default Timeline;
