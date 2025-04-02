require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/6_iUmzHGA9ZYtU68qs2YLjcCI44oFVT4",
      accounts: ["4483a71444dd555b05d8a549d0317a155dd6a2d4b4fffc90b5adae2a6d721368"]
    }
  }
};
