var BCToken = artifacts.require("BCToken");

module.exports = function(deployer) {
  // Deploy the BCToken contract as our only task
  deployer.deploy(BCToken);
};
