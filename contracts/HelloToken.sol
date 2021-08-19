// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HelloToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Hello Discord Token", "HELLO") {
        _mint(msg.sender, initialSupply);
    }

    function decimals() public virtual view override returns (uint8) {
        return 0;
    }
}