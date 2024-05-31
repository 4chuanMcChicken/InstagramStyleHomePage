import React from "react";
import "./ShowCase.less";
import { HeartFilled, MessageFilled } from "@ant-design/icons";
import { SingleShowCase } from "@/api/interface";

const ShowCase = React.forwardRef<HTMLDivElement, SingleShowCase>(
  ({ url, commentCount, likeCount }, ref) => {
    return (
      <div className="showcase" ref={ref}>
        <img className="image" src={url} alt="Showcase" />
        <div className="hover-content">
          <div className="icon-text">
            <HeartFilled style={{ fontSize: "20px" }} />
            <span>{likeCount}</span>
          </div>
          <div className="icon-text">
            <MessageFilled style={{ fontSize: "20px" }} />
            <span>{commentCount}</span>
          </div>
        </div>
      </div>
    );
  },
);

ShowCase.displayName = "ShowCase";

export default ShowCase;
