import React from "react";
import PropTypes from "prop-types";

function CodeAddr({ ...props }) {
  const { classes, addr } = props;
  let code_addr = "http://git.dev.sh.ctripcorp.com/OPS_APP_Frontend/reactMaterialSeedNew/blob/master/src/views/" + addr;
  return (
    <div>
      <a href={code_addr} target="_blank">
        <h2>代码地址</h2>
      </a>
      <hr />
    </div>
  );
}

CodeAddr.propTypes = {
  addr: PropTypes.node
};

export default CodeAddr;
