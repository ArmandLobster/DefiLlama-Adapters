const DHEDGE_FACTORY_ABI =
  "function getManagedPools(address manager) view returns (address[] managedPools)";

const LOBSTER_POOL_ABI =
  "function getFundSummary() view returns (tuple(string name, uint256 totalSupply, uint256 totalFundValue))";

module.exports = {
  DHEDGE_FACTORY_ABI,
  LOBSTER_POOL_ABI,
};
