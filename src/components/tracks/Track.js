import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Track = props => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" />
              Track
            </strong>
            :{track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc" />
              Album
            </strong>
            :{track.album_name}
          </p>
          <Button color="secondary" variant="contained">
            <Link
              to={`lyrics/track/${track.track_id}`}
              className="btn btn-block"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fas fa-chevron-right" /> View Lyrics
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Track;
