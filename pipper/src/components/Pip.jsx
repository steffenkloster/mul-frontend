import PropTypes from "prop-types";
import Avatar from "./Avatar";

const Pip = ({ children, nickname, avatarSeed }) => {
  return (
    <div className="flex gap-4 border-neutral-200 border-b p-2">
      <Avatar key={`avatar-${avatarSeed}`} seed={avatarSeed} />
      <div className="flex-grow flex flex-col gap-2">
        <b>{nickname}</b>
        <p>{children}</p>
      </div>
    </div>
  );
};

Pip.propTypes = {
  nickname: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  avatarSeed: PropTypes.number.isRequired,
};

export default Pip;
